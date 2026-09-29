# Main config

`plugins/Kishin/config.yml` - Database, islands, modules, market, holograms and everything that isn't its own feature file.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `config.yml` (639 lines)

```yaml
hub:
  # World /fly (kishin.fly.hub) is allowed in, and where PvP/mob damage/building are blocked.
  world: "world"
  # Where /spawn, join, respawn and the void safety net send a player with no island.
  # Format: "world;x;y;z;yaw;pitch"
  spawn: "world;137.508;194;104.531;0;0"

# The shop (categories, buy and sell prices) lives in its own file: plugins/Kishin/shop.yml

# /fishing replaces every vanilla salmon/cod/pufferfish/tropical fish catch with a custom fish
# item that has a randomly rolled weight and size, worth: weight(kg) * prices.<TYPE> +
# (size(cm) / size.bonus-step-cm) * size.bonus-per-step. Drop caught fish into the /fishing
# menu and close it to sell everything inside at once.
fishing:
  prices:
    SALMON: 45
    COD: 35
    PUFFERFISH: 20
    TILAPIA: 10
  weight:
    min-kg: 0.5
    max-kg: 20.0
  size:
    min-cm: 10
    max-cm: 150
    bonus-step-cm: 10
    bonus-per-step: 30

homes:
  caps:
    YUREI: 1
    KAPPA: 2
    NAMAHAGE: 4
    KITSUNE: 6
    KISHIN: 10

cooldowns:
  seconds:
    repair: 300
    kit: 86400
    feed: 60
    heal: 60

# Public chat: [Lv X] Rank Name [tag] » message, plus the slur/toxicity filter and the
# leaderboard tags. See ChatFormatListener / ChatFilterService / ChatTagService.
chat:
  format:
    # MiniMessage. The separator between "[Lv X] Rank Name [tag]" and the message itself.
    arrow: "<dark_gray><b>»</b></dark_gray>"
    # Hex colors the "[Lv X]" badge gradients between.
    level-gradient-start: "#D62839"
    level-gradient-end: "#FF6B4A"

  # Leaderboard badges shown after a player's name when they're #1 on a board. First match
  # in "order" wins, so someone topping two boards only wears one badge.
  tags:
    order: [ "level", "fishing", "island" ]
    level:
      icon: "✦"   # #1 on the server level leaderboard (highest prestige, then level)
    fishing:
      icon: "🐟"  # #1 on /fishing's leaderboard (total money earned selling fish)
    island:
      icon: "🏝"  # owner of the #1 island (see /island top)

  # Blocks slurs/toxic language before it's ever broadcast. Case-insensitive, and resistant to
  # basic obfuscation (1337speak, repeated letters, punctuation between letters).
  filter:
    enabled: true
    # Matched against each individual word of the message. Safe: low false-positive risk.
    # Fill this in with your server's own list - deliberately left with just an example below.
    blocked-words:
      - "noob4life" # example entry; replace with real moderation terms
    # Matched anywhere in the whole message with spaces stripped, so a slur split across
    # words ("n i g g e r") still gets caught. Higher false-positive risk (e.g. a fragment
    # "ass" would also flag "assassin") - keep this list short and only for words severe
    # enough that occasional over-blocking is worth it. Empty by default.
    blocked-fragments: []

# Ranks are bought with CREDITS (premium currency, 100 credits = $1, so 1000 credits = $10).
# KAPPA, NAMAHAGE and KITSUNE are permanent. KISHIN is a monthly subscription: /rankup renews it,
# and when it runs out the player drops back to KITSUNE.
# Rank prices, the subscription rank and its duration now live in ranks.yml (per rank,
# under "rankup:"). On first start an existing "rankup" section here is copied over.

# ----------------------------------------------------------------------------
# Modules. Turn off anything another plugin already does for you; a disabled
# module registers none of its commands or listeners, and another plugin's
# command with the same name (e.g. EssentialsX /home, LiteBans /ban) takes the
# plain name. Restart the server after changing these.
# ----------------------------------------------------------------------------
modules:
  # /ban /mute /warn /kick /unban /unmute /punish /history /report(s) /freeze /vanish
  # /staffchat /staff /invsee /endersee /tp /tphere /gamemode /gmc.. /broadcast /maintenance
  moderation: true
  # /home /sethome /delhome /homes
  homes: true
  # /tpa /tpaccept /tpdeny /tpatoggle /tpahere
  teleport-requests: true
  # /msg /r /msgtoggle /ignore /unignore
  messaging: true
  # /spawn /back /hat /craft /workbench /enderchest /repair /feed /heal /nick /afk /fly /kit
  # /pv /vault /list /ping /seen /playtime /rules /discord /website
  essentials: true
  # /balance /pay /eco
  economy-commands: true
  # Registers Kishin as the Vault economy. Turn off if another plugin should own balances.
  vault-economy: true
  # "[Lv 5] Rank Name >> message" chat format and rank chat colours
  chat-format: true
  # Slur / toxicity filter
  chat-filter: true

# Player levelling. XP needed for a level = xp-base + xp-per-level * (level - 1).
# Reaching max-level stops XP until the player prestiges.
leveling:
  max-level: 50
  xp-base: 250
  xp-per-level: 75
  show-xp-actionbar: true
  xp:
    player-kill: 50
    mob-kill: 5
    block-break: 1
    # Extra XP per kill on top of the first, capped: kill #4 of a streak gives 3 * streak-bonus.
    streak-bonus: 5
    streak-bonus-cap: 10

# Milestone rewards for /level. Every entry is a level that unlocks a reward the player claims
# from the menu, and the claims reset on prestige (the level restarts at 1).
#   money:     cash
#   gems:      gems
#   lootboxes: list of TYPE:RARITY or TYPE:RARITY:amount
#              TYPE = MONEY / GEMS / LEVEL, RARITY = COMMON / UNCOMMON / RARE / EPIC / LEGENDARY
# Levels above leveling.max-level are ignored. If this whole section is removed, the built-in
# defaults (the same values as below) are used.
level-rewards:
  5:
    money: 2500
    gems: 50
  10:
    money: 5000
    gems: 100
  15:
    money: 7500
    gems: 150
    lootboxes: ["MONEY:COMMON"]
  20:
    money: 10000
    gems: 250
    lootboxes: ["GEMS:COMMON"]
  25:
    money: 15000
    gems: 350
    lootboxes: ["MONEY:UNCOMMON", "GEMS:COMMON"]
  30:
    money: 20000
    gems: 500
    lootboxes: ["GEMS:UNCOMMON", "LEVEL:COMMON"]
  35:
    money: 30000
    gems: 650
    lootboxes: ["MONEY:RARE", "GEMS:UNCOMMON"]
  40:
    money: 40000
    gems: 800
    lootboxes: ["GEMS:RARE", "LEVEL:UNCOMMON"]
  45:
    money: 50000
    gems: 1000
    lootboxes: ["MONEY:EPIC", "GEMS:RARE"]
  50:
    money: 75000
    gems: 1500
    lootboxes: ["MONEY:EPIC", "GEMS:EPIC", "LEVEL:RARE"]

# Lootbox player-head textures. Each type needs a "default" skull texture; go to
# https://minecraft-heads.com/player-heads, open a head that fits (money bag, gem, star...),
# scroll to "Value:" and paste that whole base64 string here. Optionally, give a specific
# rarity its own texture under "rarities" (e.g. a shinier variant for LEGENDARY) - anything
# not overridden falls back to "default". Types left blank just show a plain Steve head.
lootboxes:
  textures:
    MONEY:
      default: ""
      rarities:
        COMMON: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjZhZWY1ZDQ4MjRiOWRhMmRmMTBiZWNmZmRmOTUyYzczMjUyMGZmNTQ4MjgzOWFiOTNkNTFkZWJkOWM3OTMxNCJ9fX0="
        UNCOMMON: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjFmZmFkMjY0MTRiZmZmNTZhNzY1MTQyZGUwZWZmZDM1NjA0N2U3NDcxNjUzZGYwZDhlMDFjZDY5NDBlYWM5ZCJ9fX0="
        RARE: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWZhNzU5OTVjZTUzYmQzNjllZDczNjE1YmYzMjNlMTRhOWNkNzc4OGNhNWFjYjY1YjBiMWFmNTY0NWRkZDA5MSJ9fX0="
        EPIC: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzFmNTFkODAxY2UzZTY2NWM3ZDBkNWMzODFhY2IxYTQzODc1MmNmNTc2ZTVlODYxMDJhNGY3Y2EzNThhNmFhZCJ9fX0="
        LEGENDARY: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODE2MjBkYzcxYTMwMjBjOGVmMmJiOTNkZTIxMzhkOTExZTEyMmJjYTczZGQxZjdkNDYxYTY0NjU1YTBmNjFiOCJ9fX0="
    GEMS:
      default: ""
      rarities:
        COMMON: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjdmMjU0ZTRkNzg4ZGQ3OWE1NzFhMjI2YTMyNTE3OTI1Yzk5ZWNlYjhiYTQ1MDhmZjM2NjQyY2U5OTEyZWVhNSJ9fX0="
        UNCOMMON: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTk2MGQ2ZmZhZjQ0ZThhZmNiZGY4YjI5YTc3ZDg0Y2UyMmM3MWQwMGM2NGJmZDk5YWYzNDBhNjk1MzViZmQ3In19fQ=="
        RARE: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTFmNTE0NmM1NDIwMWRjYjc4ZjljYjE4ZjA5YWFlZGVkODM4OWE1NTc2ODZhZmE4NzNiNGIzYmViZjk3MDE1NCJ9fX0="
        EPIC: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMmQ4MzJlZjAyYmJhN2I5YTZiNzlkNGE5NmYzYjFiMjRhZmEwMzA5ODQ1NjUyZmVjZDYxZDRlOTg1Zjc2ODIifX19"
        LEGENDARY: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWQ1ZDdmZjFkNjJkZTU5MTMxMGZlZTE2MzAyNDZjZGE0OWEzYzI4Y2FiMDYzYmZmNTQ3MDNiNWQ5NWUyNzFkMCJ9fX0="
    LEVEL:
      default: ""
      rarities:
        COMMON: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjZmZjBhYTQ4NTQ0N2JiOGRjZjQ1OTkyM2I0OWY5MWM0M2IwNDBiZDU2ZTYzMTVkYWE4YjZmODNiNGMzZWI1MSJ9fX0="
        UNCOMMON: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODdkODg1YjMyYjBkZDJkNmI3ZjFiNTgyYTM0MTg2ZjhhNTM3M2M0NjU4OWEyNzM0MjMxMzJiNDQ4YjgwMzQ2MiJ9fX0="
        RARE: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTg5MDFmNzE0MzRkNTM5MjA3NDc2OTRmNjgyZjVlNTNiOGY3NDQ4M2YyNjljMzg0YzY5MzZiN2Q4NjU4MiJ9fX0="
        EPIC: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzk5YWQ3YTA0MzE2OTI5OTRiNmM0MTJjN2VhZmI5ZTBmYzQ5OTc1MjQwYjczYTI3ZDI0ZWQ3OTcwMzVmYjg5NCJ9fX0="
        LEGENDARY: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjQxNWEzNTQ2NmM3NTk5MDNhNDIzNjgyMjZmOGI0ODVhNDdiYjE2N2YwYTFlOTc4YjU1Mzg4ODEyNGE4OTA5ZCJ9fX0="

# Prestige resets the level to 1 and gives a permanent buff that grows with every prestige.
# The buff is linear: prestige 3 with xp-percent-per-prestige 5 means +15% XP.
prestige:
  min-level: 50
  max: 10
  buffs:
    xp-percent-per-prestige: 5.0
    loot-percent-per-prestige: 4.0

stats:
  # Killing the same player again within this window gives no kill, streak or XP (anti-boosting).
  repeat-kill-cooldown-seconds: 120
  # Kill streaks that are announced to the whole server.
  streak-announce: [5, 10, 25, 50, 100]
  # Broadcast when someone ends a streak of at least this many kills.
  streak-end-announce-min: 5

# "MATERIAL:amount" entries per rank. A rank left empty (or unlisted) has no kit to claim.
kits:
  YUREI: []
  KAPPA: []
  NAMAHAGE: []
  KITSUNE: []
  KISHIN: []

# ----------------------------------------------------------------------------
# Database. PostgreSQL is the primary, recommended backend.
#   type: postgresql  -> host/port/name/user/password below (ssl-mode: disable|require|verify-full)
#   type: mysql       -> MySQL 8+ or MariaDB 10.5+; same keys, port is usually 3306
#                        (ssl-mode: disabled|preferred|required)
#   type: sqlite      -> a single file in plugins/Kishin (sqlite-file); fine for small or test
#                        servers, no external database needed. Connection keys are ignored.
# The MySQL and SQLite drivers are downloaded by the server on first start (plugin.yml libraries).
# ----------------------------------------------------------------------------
database:
  type: "postgresql"
  host: "localhost"
  port: 5432
  name: "kishin"
  user: "kishin"
  password: "change-me"
  ssl-mode: "require"
  sqlite-file: "database.db"
  player-pool:
    max: 6
    min-idle: 2
  bulk-pool:
    max: 3
    min-idle: 1

islands:
  world: "islands"
  paste-y: 100
  # A player whose Y drops below this in the islands world (falling off the edge, digging out
  # the bottom, etc.) is teleported back to their island spawn instead of falling forever.
  void-y: 0
  plot:
    max-size: 300
    padding: 100

  # Island worth scanning. The scan runs in two phases: chunk snapshots are taken on the main
  # thread a few per tick, then counted off-thread, so a large island never stalls the server.
  level:
    # How many chunk snapshots to take per tick. Raise it on a strong host, lower it if the
    # server stutters while someone is scanning.
    chunks-per-tick: 4
    # Vertical window to scan, relative to islands.paste-y. Everything outside it is ignored,
    # which keeps the count fast and stops players padding their level with bedrock-level spam.
    scan-below: 40
    scan-above: 90
    # Worth needed for one island level.
    worth-per-level: 100000
    # Minimum wait between two scans of the same island.
    cooldown-seconds: 120
    # Worth also moves live as blocks are placed/broken/formed; this full rescan of one loaded
    # island per minute (oldest scan first) recalibrates it and recounts the island limits.
    # 0 turns the background rescans off.
    auto-rescan-minutes: 30
    # Worth per block. Anything not listed here counts as zero, so cobblestone walls and dirt
    # never inflate a level. Add or rebalance freely - nothing else in the plugin reads these.
    block-values:
      STONE: 1
      DEEPSLATE: 1
      COBBLESTONE: 1
      OAK_LOG: 3
      SPRUCE_LOG: 3
      BIRCH_LOG: 3
      JUNGLE_LOG: 3
      ACACIA_LOG: 3
      DARK_OAK_LOG: 3
      CHERRY_LOG: 4
      MANGROVE_LOG: 4
      COAL_BLOCK: 45
      COPPER_BLOCK: 60
      IRON_BLOCK: 120
      GOLD_BLOCK: 300
      REDSTONE_BLOCK: 150
      LAPIS_BLOCK: 180
      DIAMOND_BLOCK: 900
      EMERALD_BLOCK: 1100
      NETHERITE_BLOCK: 9000
      AMETHYST_BLOCK: 220
      COAL_ORE: 12
      DEEPSLATE_COAL_ORE: 14
      IRON_ORE: 25
      DEEPSLATE_IRON_ORE: 28
      COPPER_ORE: 14
      GOLD_ORE: 60
      DEEPSLATE_GOLD_ORE: 66
      REDSTONE_ORE: 30
      LAPIS_ORE: 36
      DIAMOND_ORE: 180
      DEEPSLATE_DIAMOND_ORE: 200
      EMERALD_ORE: 220
      ANCIENT_DEBRIS: 1400
      NETHER_QUARTZ_ORE: 20
      SPAWNER: 2500
      BEACON: 3000
      END_PORTAL_FRAME: 2000
      SEA_LANTERN: 40
      SHULKER_BOX: 350
      ENCHANTING_TABLE: 250
      ANVIL: 120
      OBSIDIAN: 35
      CRYING_OBSIDIAN: 90
      GLOWSTONE: 18
      PRISMARINE_BRICKS: 25
      QUARTZ_BLOCK: 22
      HAY_BLOCK: 12
      BONE_BLOCK: 20
      HONEY_BLOCK: 30
      SLIME_BLOCK: 30

  # Ore generator (cobblestone generator) - the "Ore Generator" island upgrade.
  # Each entry of "levels" is one upgrade level: the first is what every island
  # starts with (free), every later one is bought from the island bank for "cost".
  # "blocks" are chance weights for what lava + water forms at that level (they
  # don't have to add up to 100 - each block gets weight / total).
  # "replace" lists the blocks the generator may turn into something else.
  ore-generator:
    enabled: true
    replace: [COBBLESTONE, STONE]
    levels:
      - blocks: {COBBLESTONE: 100}
      - cost: 50000
        blocks: {COBBLESTONE: 80, COAL_ORE: 20}
      - cost: 200000
        blocks: {COBBLESTONE: 70, COAL_ORE: 18, IRON_ORE: 12}
      - cost: 750000
        blocks: {COBBLESTONE: 62, COAL_ORE: 16, IRON_ORE: 14, GOLD_ORE: 8}
      - cost: 2500000
        blocks: {COBBLESTONE: 55, COAL_ORE: 15, IRON_ORE: 13, GOLD_ORE: 9, LAPIS_ORE: 8}
      - cost: 8000000
        blocks: {COBBLESTONE: 50, COAL_ORE: 14, IRON_ORE: 12, GOLD_ORE: 9, LAPIS_ORE: 9, DIAMOND_ORE: 6}
      - cost: 25000000
        blocks: {COBBLESTONE: 45, COAL_ORE: 13, IRON_ORE: 12, GOLD_ORE: 9, LAPIS_ORE: 9, DIAMOND_ORE: 7, EMERALD_ORE: 5}

  # Island bank interest. The Bank Interest upgrade sets the rate per payout period
  # (e.g. 200 = 2%). Interest is paid once per period to loaded islands only, never for time an
  # island sat unloaded, and only on the first interest-bearing-cap of the balance - so a big bank
  # grows linearly, not exponentially.
  bank:
    interest-period-hours: 24
    interest-bearing-cap: 10000000
    max-interest-per-payout: 250000   # 0 = no cap

  # Nether and end islands (unlocked with the Nether Island / End Island upgrades). Each island
  # gets the same plot in these void worlds, generated the first time someone goes there.
  #   schematics:   file name(s) in plugins/Kishin/schematics (.schem or .schematic). With several,
  #                 each island gets a random one. Leave empty [] for the built-in starter platform.
  #                 Paste it so its origin (where you stood when you //copy'd it) is the island centre.
  #   spawn-offset: [x, y, z] from that origin to where players arrive - tune it so they land on
  #                 top of the build. If the block under them is air, a 3x3 pad is placed.
  dimensions:
    nether:
      enabled: true
      world: "islands_nether"
      schematics: ["nether_island.schem"]
      spawn-offset: [0, 1, 0]
    end:
      enabled: true
      world: "islands_the_end"
      schematics: ["end_island.schem"]
      spawn-offset: [0, 1, 0]

  # /is reset (owner only, from the Danger Zone of /is). Limits are per player, so deleting and
  # recreating an island doesn't reset them. kishin.island.reset.bypass skips the limits.
  reset:
    enabled: true
    cooldown-minutes: 1440
    max-resets: 3            # 0 = unlimited
    keep-members: true
    keep-bank: false
    keep-upgrades: false
    keep-challenges: false

  # Deletes islands nobody has touched in a long time and recycles their plots. OFF by default
  # because it deletes things - try /isadmin purge preview first to see what it would remove.
  purge:
    enabled: false
    inactive-days: 60
    max-level: 5             # never purge islands above this level
    max-bank: 100000         # ...or with more than this in the bank
    per-run: 5
    check-every-hours: 6

  # /is coop <player>: temporary Member-level access for a non-member. Co-ops end after the
  # duration, when removed with /is uncoop, or on a restart.
  coop:
    duration-minutes: 120
    max: 4

  # Per-island limits (lag control). Hoppers, spawners, redstone machinery and mobs are limited by
  # their upgrades (see /is upgrades); add fixed limits for any other block below.
  # kishin.island.limits.bypass ignores block limits.
  limits:
    enabled: true
    blocks:
      BEACON: 10
      CHEST: 200
      FURNACE: 64

# ----------------------------------------------------------------------------
# Stacking. Place a stackable block (or a spawner of the same mob) against the same block to add
# it to the stack; sneak to place normally. Break takes one off, sneak-break takes the whole stack.
# Mobs spawned on islands merge into nearby mobs of the same kind ("x12 Zombie").
# ----------------------------------------------------------------------------
stacking:
  blocks:
    enabled: true
    max-stack: 10000
    materials: [IRON_BLOCK, GOLD_BLOCK, DIAMOND_BLOCK, EMERALD_BLOCK, NETHERITE_BLOCK, LAPIS_BLOCK,
                REDSTONE_BLOCK, COAL_BLOCK, COPPER_BLOCK, AMETHYST_BLOCK, QUARTZ_BLOCK]
  spawners:
    enabled: true
    max-stack: 64
    silk-touch-pickup: true
    # When mob stacking is off, a stack of N spawners spawns at most this many extra mobs.
    max-extra-mobs-without-mob-stacking: 4
  mobs:
    enabled: true
    radius: 6
    max-stack: 200
    exclude: [VILLAGER, WITHER, ENDER_DRAGON, ELDER_GUARDIAN, WARDEN, IRON_GOLEM, SNOW_GOLEM, ALLAY,
              PARROT, WANDERING_TRADER]

# ----------------------------------------------------------------------------
# Automation tools, handed out with /isadmin give (or from crates/shops that run that command).
# ----------------------------------------------------------------------------
automation:
  collectors:
    per-island: 16         # chunk collectors per island (always one per chunk)
  harvester:
    radius: 1              # 1 = 3x3, 2 = 5x5

# ----------------------------------------------------------------------------
# Classes (/classes picks one - permanently, /class levels it up 1-10)
# ----------------------------------------------------------------------------
classes:
  # Vanilla EXP levels needed to upgrade TO each class level (level 1 is free on pick).
  upgrade-costs:
    2: 5
    3: 10
    4: 15
    5: 20
    6: 25
    7: 30
    8: 35
    9: 40
    10: 50

# ----------------------------------------------------------------------------
# Market: auction house (/ah) and buy orders (/orders)
# Everything is stored in the database (auctions, buy_orders, market_log tables).
# ----------------------------------------------------------------------------
market:
  auction:
    tax: 0.05                # 5% of every sale is removed from the economy
    duration-hours: 48       # unsold items go back to the seller's /ah collect bin
    min-price: 1
    max-price: 1000000000000
    anti-abuse:
      # Items the shop buys can't be listed below shop value x this (stops alt money-laundering
      # and "list for $1, buy with an alt, sell to the shop"). 0 = off.
      min-price-vs-shop: 1.0
      # ...nor above shop value x this (0 = off). Items the shop doesn't buy are never limited.
      max-price-vs-shop: 0
      # Players on the same IP can't buy each other's listings (logged to the console).
      block-same-ip: true
    max-listings:            # per rank; staff get 16
      default: 5
      YUREI: 5
      KAPPA: 7
      NAMAHAGE: 9
      KITSUNE: 12
      KISHIN: 16
  orders:
    tax: 0.0                 # cut taken from sellers when they deliver
    duration-days: 7         # undelivered money is refunded when an order ends
    max-amount: 10000        # most items one order can ask for
    min-price-each: 0.01
    max-price-each: 1000000000
    max-orders:
      default: 3
      YUREI: 3
      KAPPA: 4
      NAMAHAGE: 5
      KITSUNE: 7
      KISHIN: 10

# ----------------------------------------------------------------------------
# Gem income. Gems buy minions/generators/spawners in the gem shop (special-shop.yml),
# so they need a steady source besides crates and level rewards. Rough balance guide:
# 5 gems / 30 min = ~10 gems per hour -> a 1000-gem Feeder minion is ~100 hours of play
# from playtime alone. Tune this together with special-shop.yml prices.
# Staff / web store: /gems give|take|set|check <player> <amount> (works offline + console).
# ----------------------------------------------------------------------------
gem-rewards:
  playtime:
    enabled: true
    every-minutes: 30        # minutes of active play per payout
    gems: 5
    skip-afk: true           # /afk players don't progress
    rank-bonus:              # extra gems per payout for these ranks (rank ids from ranks.yml)
      KAPPA: 1
      NAMAHAGE: 2
      KITSUNE: 3
      KISHIN: 5

# ----------------------------------------------------------------------------
# Weekly island top rewards. Each week at <day> <hour> (in <timezone>) the best
# islands by worth are paid: gems to every member (offline too), money into the
# island bank, and console commands per member ({player} {position} {island}).
# Force a payout: /kishin toprewards
# ----------------------------------------------------------------------------
island-top-rewards:
  enabled: true
  day: SUNDAY
  hour: 20
  timezone: "Europe/Zagreb"
  broadcast: true
  broadcast-places: 3        # how many places the broadcast lists
  places:
    "1":
      gems: 500
      bank: 1000000
      commands: []           # e.g. ["crate give {player} legendary 1"]
    "2":
      gems: 300
      bank: 500000
    "3":
      gems: 200
      bank: 250000
    "4-10":
      gems: 75
      bank: 100000

# ----------------------------------------------------------------------------
# Visiting: /is rate 1-5, /is featured (staff pick an island with /kishin feature
# while standing on it). Open islands appear in /is featured while their team is
# online, best rated first.
# ----------------------------------------------------------------------------
visiting:
  ratings:
    enabled: true
  featured:
    min-ratings: 0           # open islands need this many ratings to be listed

# Holograms (/hologram): lines may use PlaceholderAPI placeholders, e.g. a live
# island leaderboard:  /hologram addline top <gold>#1 %kishin_top_island_worth_1_name% <gray>%kishin_top_island_worth_1_value%
holograms:
  live-refresh-seconds: 30
  # Background behind all floating text (holograms, generators, crates, NPC names, stacks):
  #   none      - no box; water/portals/glass behind the text render correctly (recommended)
  #   default   - vanilla grey see-through box (hides water/portals behind it - client limitation)
  #   "#AARRGGBB" - custom colour, e.g. "#FF000000" solid black (solid colours render fine too)
  background: none
  # /hologram holograms only:
  #   nametags - each line is an invisible armor stand's name (like HolographicDisplays /
  #              DecentHolograms): grey strip per line, water/portals/holograms behind stay
  #              visible. Scale doesn't apply. (default)
  #   lines    - text displays, a strip per line (supports /hologram scale; strips hide water/portals behind)
  #   box      - one text display box around all lines (uses "background" above)
  style: nametags
  line-background: default   # strip colour for "lines" style: default (vanilla see-through grey), none or "#AARRGGBB"
  line-spacing: 0.28          # blocks between lines for "lines" style (times the hologram's scale)
  nametag-line-spacing: 0.27  # blocks between lines for "nametags" style (scale doesn't apply)
  blank-line-size: 0.6        # an empty line is this much of a normal line (smaller gaps look tidier)
  # Extras usable in hologram lines:
  #   {item:NETHER_STAR} or {item:DIAMOND_BLOCK:0.9}  - a spinning, glowing item as its own line
  #   <gradient:#FF0055:#FFD1DC:#FF0055:{phase}>TEXT</gradient>  - a gradient that slides (animated)
  #   {online} {max}  - players online / slots; PlaceholderAPI %placeholders% work too
  animation-ticks: 2          # how often animations update (2 = 10x per second)
  gradient-speed: 0.05        # how fast {phase} gradients move
  item-spin-degrees: 6        # item rotation per 2 ticks
  item-line-size: 1.1         # space an item line takes (times its scale)

# ----------------------------------------------------------------------------
# Quality of life
# ----------------------------------------------------------------------------
# Sell wand: /sellwand give <player> [uses] [multiplier] (console too - crates, store)
sell-wand:
  enabled: true
  material: BLAZE_ROD
  default-uses: 100          # -1 = unlimited
  default-multiplier: 1.0
  own-island-only: true      # only on islands you're a member/coop of
  cooldown-ms: 500

# Mined blocks go straight into the inventory (permission kishin.autopickup, /autopickup toggles).
auto-pickup:
  enabled: true
  default-on: true
  island-worlds-only: true

# ----------------------------------------------------------------------------
# Leaderboards (/leaderboard, /baltop, %kishin_top_...% placeholders)
# ----------------------------------------------------------------------------
leaderboards:
  refresh-minutes: 5       # how often the rankings are rebuilt from the database
  exclude-staff: true      # TRAINEE and up aren't ranked (staff balances are often /eco'd)

# ----------------------------------------------------------------------------
# Combat tagging: hitting a player tags you both. While tagged you can't
# teleport, fly, glide or use commands outside the list below, and logging out
# kills you (your items drop). kishin.combat.bypass is never tagged.
# ----------------------------------------------------------------------------
combat:
  enabled: true
  tag-seconds: 15
  kill-on-logout: true
  allowed-commands: [msg, w, tell, message, r, reply, sc, staffchat, report, rules, discord, list, ping, stats, balance, bal, money]
```
