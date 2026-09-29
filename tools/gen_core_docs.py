#!/usr/bin/env python3
"""
Generates the reference pages of the Kishin Core docs straight from the plugin:

  docs/core/commands.md       from plugin.yml (commands)
  docs/core/permissions.md    from plugin.yml (permissions) + ranks.yml (which rank grants what)
                              + the Java sources (which command/feature uses each node)
  docs/core/config/<file>.md  one page per default .yml file, with the full file

and refreshes the "generated" sections of docs/core/_index.json. Hand-written pages and
sections are never touched.

Usage (from the website folder):
    python3 tools/gen_core_docs.py <path to Kishin/src/main/resources> [path to Kishin/src/main/java]
    npm run docs      (same thing, expects the plugin next to this repo in ../Kishin)
Needs PyYAML:  pip install pyyaml
"""
import json
import os
import re
import sys

import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.join(HERE, "..", "docs", "core")

# config files: title and a one-line description (files not listed still get a page)
CONFIGS = [
    ("config.yml", "Main config", "Database, islands, modules, market, holograms and everything that isn't its own feature file."),
    ("ranks.yml", "Ranks", "The rank ladder, prefixes, permissions and /rankup prices."),
    ("pets.yml", "Pets", "Pet types, rarities, summon slots, upgrades, merging, disposal, eggs and the hatching animation."),
    ("crates.yml", "Crates", "Crates and their weighted rewards."),
    ("bosses.yml", "World bosses", "Boss schedule, arena, looks, phases, abilities and placement rewards."),
    ("store.yml", "Store (/buy)", "The in-game store: credit packs, ranks, monthly rank, crate keys, battlepass and sales."),
    ("scoreboard.yml", "Scoreboard", "Sidebar lines, boards, pages and animations."),
    ("tab.yml", "Tab list", "Header, footer, the 4x20 info grid and animations."),
    ("minions.yml", "Minions", "The six minion types, upgrades and limits."),
    ("generators.yml", "Generators", "Generator types, fuel, output and upgrades."),
    ("skills.yml", "Skills", "Skill XP, levels, perks and rewards."),
    ("collections.yml", "Collections", "Collection tiers and rewards."),
    ("enchants.yml", "Enchants", "Vanilla and custom enchants and their prices."),
    ("events.yml", "Server events", "Gold rush, double XP, lucky drops, meteor shower, treasure hunt."),
    ("chatgames.yml", "Chat games", "The ten chat games, schedule, rewards and design."),
    ("announcements.yml", "Announcements", "Automatic chat announcements."),
    ("battlepass.yml", "Battlepass", "Season, tasks and the 100 levels of rewards."),
    ("daily.yml", "Daily rewards", "The 7-day reward cycle and streak bonus."),
    ("challenges.yml", "Challenges", "Island challenge tiers and rewards."),
    ("missions.yml", "Island missions", "Daily and weekly island missions."),
    ("tutorial.yml", "Tutorial", "The first-join tutorial steps."),
    ("shop.yml", "Shop", "Shop categories, buy and sell prices."),
    ("special-shop.yml", "Gem shop", "Minions, generators and spawners for gems, money or credits."),
    ("cosmetics.yml", "Cosmetics", "Chat tags players can earn."),
    ("trade.yml", "Trading", "The /trade screen."),
]
SKIP = {"plugin.yml", "messages.yml"}


def load_yaml(path):
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def md_escape(text):
    return str(text).replace("|", "\\|").replace("<", "&lt;").replace(">", "&gt;")


# ---------------------------------------------------------------- commands
def gen_commands(plugin):
    cmds = plugin.get("commands", {})
    out = ["# Commands", "",
           f"Every command Kishin Core registers ({len(cmds)} in total), generated from `plugin.yml`.",
           "Arguments in `<angle brackets>` are required, `[square brackets]` are optional.", "",
           "> **Tip:** some groups of commands can be switched off in `config.yml` -> `modules` "
           "(moderation, homes, teleport requests, messaging, essentials, economy commands), so they "
           "don't clash with another plugin that owns the same command.", "",
           "| Command | Aliases | What it does | Usage |", "|---|---|---|---|"]
    for name in sorted(cmds):
        c = cmds[name] or {}
        aliases = ", ".join(f"`/{a}`" for a in (c.get("aliases") or []))
        usage = c.get("usage") or f"/{name}"
        out.append(f"| `/{name}` | {aliases} | {md_escape(c.get('description', ''))} | `{md_escape(usage)}` |")
    return "\n".join(out) + "\n"


# ---------------------------------------------------------------- permissions
def rank_grants(ranks_yaml, nodes):
    """node -> lowest rank name that grants it (following inheritance, wildcards and -negations)."""
    ranks = (ranks_yaml or {}).get("ranks") or {}
    granted = {}
    current = {}
    for name, r in ranks.items():
        r = r or {}
        if r.get("inherit", True) is False:
            current = {}
        for entry in r.get("permissions") or []:
            entry = str(entry)
            neg = entry.startswith("-")
            pattern = entry[1:] if neg else entry
            for node in nodes:
                if pattern == "*" or pattern == node or (pattern.endswith(".*") and node.startswith(pattern[:-1])):
                    current[node] = not neg
        for node, on in current.items():
            if on and node not in granted:
                granted[node] = (name, bool(r.get("staff", False)))
    return granted


def usage_map(java_root, nodes, commands):
    """node -> sorted list of '/command' or feature names that reference it in the Java code."""
    found = {n: set() for n in nodes}
    if not java_root or not os.path.isdir(java_root):
        return found
    literal = re.compile(r'"(kishin\.[a-z0-9_.\-*]+)"')
    for base, _, files in os.walk(java_root):
        for f in files:
            if not f.endswith(".java"):
                continue
            with open(os.path.join(base, f), encoding="utf-8", errors="replace") as fh:
                text = fh.read()
            hits = set(literal.findall(text))
            if not hits:
                continue
            label = None
            if f.endswith("Command.java"):
                cmd = f[:-len("Command.java")].lower()
                if cmd in commands:
                    label = f"`/{cmd}`"
            if not label:
                label = os.path.basename(base).replace("_", " ").capitalize()
            for h in hits:
                if h in found:
                    found[h].add(label)
    return {k: sorted(v) for k, v in found.items()}


def gen_permissions(plugin, ranks_yaml, java_root):
    perms = plugin.get("permissions", {}) or {}
    nodes = list(perms)
    grants = rank_grants(ranks_yaml, nodes)
    used = usage_map(java_root, nodes, plugin.get("commands", {}) or {})
    player = [n for n in nodes if not n.startswith("kishin.staff")]
    staff = [n for n in nodes if n.startswith("kishin.staff")]

    def table(list_):
        rows = ["| Permission | Default | Granted by rank | Used by |", "|---|---|---|---|"]
        for n in sorted(list_):
            p = perms[n] or {}
            default = str(p.get("default", "op")).lower()
            default = {"true": "everyone", "false": "nobody", "op": "op", "not op": "non-ops"}.get(default, default)
            g = grants.get(n)
            rank = f"{g[0]}+" if g else "-"
            use = ", ".join(used.get(n, [])[:3]) or "-"
            rows.append(f"| `{n}` | {default} | {rank} | {use} |")
        return "\n".join(rows)

    return "\n".join([
        "# Permissions", "",
        f"All {len(nodes)} permission nodes of Kishin Core, generated from `plugin.yml`, `ranks.yml` and the plugin code.", "",
        "- **Default** is what Bukkit gives without any rank: *everyone*, *op* or *nobody*.",
        "- **Granted by rank** is the lowest rank in the default `ranks.yml` that has it - every rank above inherits it.",
        "- Kishin has its own rank system (see [Ranks & permissions](?p=core&page=ranks)), so you don't need LuckPerms. "
        "Any of these nodes can also be given with another permissions plugin.",
        "- The server console always has every Kishin permission, so webstores can run commands like `credits give`.", "",
        "## Player permissions", "", table(player), "",
        "## Staff permissions", "", table(staff), "",
    ]) + "\n"


# ---------------------------------------------------------------- config pages
def header_comment(text):
    """The leading # comment block, cleaned up, as plain paragraphs."""
    lines = []
    for line in text.splitlines():
        if not line.startswith("#"):
            if lines:
                break
            continue
        body = line[1:].strip()
        if set(body) <= set("=-~ "):
            continue
        lines.append(body)
    return lines


def gen_config(path, filename, title, desc):
    with open(path, encoding="utf-8") as f:
        text = f.read().replace("\r\n", "\n")
    fence = "````" if "```" in text else "```"
    lines = len(text.splitlines())
    return "\n".join([
        f"# {title}", "",
        f"`plugins/Kishin/{filename}` - {desc}", "",
        "> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new "
        "options, compare your copy with the default below. Most files reload with `/kishin reload` "
        "(some features have their own reload command, noted at the top of the file).", "",
        f"## Default `{filename}` ({lines} lines)", "",
        f"{fence}yaml", text.rstrip(), fence, "",
    ])


# ---------------------------------------------------------------- index
def update_index(config_pages):
    path = os.path.join(DOCS, "_index.json")
    index = {"title": "Kishin Core", "sections": []}
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            index = json.load(f)
    reference = {"title": "Reference", "generated": True, "pages": [
        {"id": "commands", "title": "Commands", "file": "commands.md"},
        {"id": "permissions", "title": "Permissions", "file": "permissions.md"},
    ]}
    configs = {"title": "Config files", "generated": True, "pages": config_pages}
    kept = [s for s in index["sections"] if not s.get("generated")]
    # keep the hand-written "Reference" pages (e.g. placeholders) after the generated ones
    hand_ref = [s for s in kept if s["title"] == "Reference"]
    kept = [s for s in kept if s["title"] != "Reference"]
    if hand_ref:
        reference["pages"] += hand_ref[0]["pages"]
    index["sections"] = kept + [reference, configs]
    with open(path, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=2, ensure_ascii=False)
        f.write("\n")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    res = sys.argv[1]
    java = sys.argv[2] if len(sys.argv) > 2 else os.path.join(res, "..", "java")
    plugin = load_yaml(os.path.join(res, "plugin.yml"))
    ranks = load_yaml(os.path.join(res, "ranks.yml")) if os.path.exists(os.path.join(res, "ranks.yml")) else {}
    os.makedirs(os.path.join(DOCS, "config"), exist_ok=True)

    with open(os.path.join(DOCS, "commands.md"), "w", encoding="utf-8") as f:
        f.write(gen_commands(plugin))
    with open(os.path.join(DOCS, "permissions.md"), "w", encoding="utf-8") as f:
        f.write(gen_permissions(plugin, ranks, java))

    known = {c[0]: c for c in CONFIGS}
    files = sorted(f for f in os.listdir(res) if f.endswith(".yml") and f not in SKIP)
    ordered = [c[0] for c in CONFIGS if c[0] in files] + [f for f in files if f not in known]
    pages = []
    for fname in ordered:
        _, title, desc = known.get(fname, (fname, fname.replace(".yml", "").replace("-", " ").title(), "Configuration file."))
        page_id = "config-" + fname.replace(".yml", "")
        with open(os.path.join(DOCS, "config", fname.replace(".yml", ".md")), "w", encoding="utf-8") as f:
            f.write(gen_config(os.path.join(res, fname), fname, title, desc))
        pages.append({"id": page_id, "title": fname, "file": f"config/{fname.replace('.yml', '.md')}"})
    update_index(pages)
    print(f"Generated commands, permissions and {len(pages)} config pages into {os.path.normpath(DOCS)}")


if __name__ == "__main__":
    main()
