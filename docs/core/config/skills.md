# Skills

`plugins/Kishin/skills.yml` - Skill XP, levels, perks and rewards.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `skills.yml` (161 lines)

```yaml
# ============================================================================
#  KISHIN SKILLS  (/skills)
#  Five skills level up on their own while you play. Each level makes the
#  skill's perk stronger and pays money-per-level x level; milestone levels
#  pay extra. XP needed for level L -> L+1 = xp-base * L ^ xp-exponent.
#  Blocks placed by players never give XP (remembered in the chunk, even
#  after restarts and piston pushes); crops only count when fully grown. Pets and events can boost XP.
#
#  perk types: double-drop (mining/farming/foraging), double-catch (fishing),
#              combat-damage (combat). per-level is % per level.
# ============================================================================
max-level: 50
xp-base: 100
xp-exponent: 1.5
action-bar: true

texts:
  menu-title: "<dark_gray>✦ Skills"
  menu-name: "<{color}><bold>{symbol} {skill}</bold> <white>{level}"
  menu-progress: "<gray>Progress to {next} <dark_gray>» <white>{percent}%"
  menu-xp: "<dark_gray>{xp} / {needed} XP"
  menu-max: "<gold><bold>✦ MAX LEVEL ✦"
  menu-perk: "<gray>Perk <dark_gray>» <white>{perk}"
  menu-next: "<gray>Next level <dark_gray>» <white>{perk} <dark_gray>+ <#FFD166>${money}"
  menu-click: "<{color}>▶ Click for {skill} collections"
  action-bar: "<{color}>+{xp} {symbol} {skill} <dark_gray>({progress}/{needed})"
  action-bar-max: "<{color}>+{xp} {symbol} {skill} <dark_gray>• <gold>MAX"
  title: "<{color}><bold>{skill} {level}"
  subtitle: "<gray>{perk}"
  level-up: "<{color}><bold>{symbol} SKILL UP!</bold> <white>{skill} <dark_gray>» <white><bold>{level}</bold>\n<gray>  {perk} <dark_gray>• <#FFD166>+${money}\n{milestone}"
  milestone-line: "<gold>  ★ Milestone reward: {reward}"

skills:
  mining:
    name: "Mining"
    symbol: "⛏"
    color: "#00C6FF"
    icon: DIAMOND_PICKAXE
    description: ["<gray>Mine stone and ores."]
    perk: {type: double-drop, per-level: 0.6, text: "{value}% chance of double ore drops"}
    money-per-level: 1000
    milestones:
      10: {gems: 25}
      25: {gems: 75, commands: ["lootbox give {player} gems rare 1"]}
      50: {gems: 250, commands: ["lootbox give {player} gems legendary 1"]}
    xp:
      COBBLESTONE: 0.5
      STONE: 0.5
      COBBLED_DEEPSLATE: 0.7
      DEEPSLATE: 0.7
      NETHERRACK: 0.3
      COAL_ORE: 3
      DEEPSLATE_COAL_ORE: 3
      COPPER_ORE: 3
      DEEPSLATE_COPPER_ORE: 3
      IRON_ORE: 5
      DEEPSLATE_IRON_ORE: 5
      GOLD_ORE: 7
      DEEPSLATE_GOLD_ORE: 7
      NETHER_GOLD_ORE: 5
      REDSTONE_ORE: 5
      DEEPSLATE_REDSTONE_ORE: 5
      LAPIS_ORE: 7
      DEEPSLATE_LAPIS_ORE: 7
      NETHER_QUARTZ_ORE: 4
      DIAMOND_ORE: 15
      DEEPSLATE_DIAMOND_ORE: 15
      EMERALD_ORE: 20
      DEEPSLATE_EMERALD_ORE: 20
      ANCIENT_DEBRIS: 40
      OBSIDIAN: 5
      AMETHYST_CLUSTER: 6
  farming:
    name: "Farming"
    symbol: "✿"
    color: "#43E97B"
    icon: GOLDEN_HOE
    description: ["<gray>Harvest fully grown crops."]
    perk: {type: double-drop, per-level: 0.8, text: "{value}% chance of double crops"}
    money-per-level: 1000
    milestones:
      10: {gems: 25}
      25: {gems: 75, commands: ["lootbox give {player} money rare 1"]}
      50: {gems: 250, commands: ["lootbox give {player} gems legendary 1"]}
    xp:
      WHEAT: 2
      CARROTS: 2
      POTATOES: 2
      BEETROOTS: 2
      NETHER_WART: 3
      SUGAR_CANE: 1
      CACTUS: 1
      MELON: 3
      PUMPKIN: 3
      COCOA: 2
      BAMBOO: 0.5
      SWEET_BERRY_BUSH: 1
  foraging:
    name: "Foraging"
    symbol: "♣"
    color: "#C8A165"
    icon: GOLDEN_AXE
    description: ["<gray>Chop down trees."]
    perk: {type: double-drop, per-level: 0.8, text: "{value}% chance of double logs"}
    money-per-level: 1000
    milestones:
      10: {gems: 25}
      25: {gems: 75}
      50: {gems: 250, commands: ["lootbox give {player} gems legendary 1"]}
    xp:
      OAK_LOG: 3
      SPRUCE_LOG: 3
      BIRCH_LOG: 3
      JUNGLE_LOG: 3
      ACACIA_LOG: 3
      DARK_OAK_LOG: 3
      MANGROVE_LOG: 3
      CHERRY_LOG: 4
      CRIMSON_STEM: 4
      WARPED_STEM: 4
  fishing:
    name: "Fishing"
    symbol: "≈"
    color: "#4FACFE"
    icon: FISHING_ROD
    description: ["<gray>Catch anything with a rod."]
    perk: {type: double-catch, per-level: 0.6, text: "{value}% chance of a double catch"}
    money-per-level: 1200
    milestones:
      10: {gems: 25}
      25: {gems: 75, commands: ["lootbox give {player} money rare 1"]}
      50: {gems: 250, commands: ["lootbox give {player} gems legendary 1"]}
    xp:
      catch: 12              # XP per catch
  combat:
    name: "Combat"
    symbol: "⚔"
    color: "#FF6B6B"
    icon: DIAMOND_SWORD
    description: ["<gray>Slay mobs."]
    perk: {type: combat-damage, per-level: 0.5, text: "+{value}% damage to mobs"}
    money-per-level: 1200
    milestones:
      10: {gems: 25}
      25: {gems: 75, commands: ["lootbox give {player} gems rare 1"]}
      50: {gems: 250, commands: ["lootbox give {player} gems legendary 1"]}
    xp:
      "*": 5                 # any hostile mob not listed
      ZOMBIE: 5
      SKELETON: 5
      SPIDER: 5
      CREEPER: 7
      ENDERMAN: 12
      BLAZE: 12
      WITCH: 10
      WITHER_SKELETON: 20
      PIGLIN_BRUTE: 25
      GUARDIAN: 12
      ELDER_GUARDIAN: 150
      WITHER: 500
      ENDER_DRAGON: 1000
```
