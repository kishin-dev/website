# Enchants

`plugins/Kishin/enchants.yml` - Vanilla and custom enchants and their prices.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `enchants.yml` (268 lines)

```yaml
# ============================================================================
#  KISHIN ENCHANTING  (/enchant)
#  Hold an item and open /enchant. Every enchant below that fits the item is
#  listed with the price of its next level. Levels can go above vanilla max.
#
#  items: PICKAXE AXE SHOVEL HOE SWORD BOW CROSSBOW TRIDENT ROD
#         HELMET CHESTPLATE LEGGINGS BOOTS ELYTRA
#  levels: one entry per level, price of buying THAT level:
#          {money: 1000, gems: 5, credits: 0, xp-levels: 5}
#  values: (custom enchants) the effect strength per level, shown as {value}
#          in the description.
# ============================================================================

texts:
  menu-title: "<dark_purple><bold>✦ Enchanting ✦"
  no-item-name: "<#FF6B6B><bold>Hold a tool, weapon or armour"
  no-item-lore: "<gray>Hold the item you want to enchant\n<gray>in your main hand and reopen <white>/enchant"
  vanilla-title: "<aqua><bold>{name}</bold>"
  custom-title: "<gradient:#B388FF:#FFA3E3><bold>{name}</bold></gradient> <dark_gray>(Kishin)"
  level-line: "<gray>Level <white>{level}</white><dark_gray> / {max}"
  next-line: "<gray>Next <dark_gray>» <white>{name} {level}"
  cost-line: "<gray>Cost <dark_gray>» {cost}"
  xp-line: "<gray>XP <dark_gray>» <green>{levels} levels"
  maxed-line: "<#43E97B>✔ Maxed out"
  click-line: "<#B388FF>▶ Click to enchant"
  conflict-line: "<#FF6B6B>✖ Can't combine with {other}"
  lore-line: "<gradient:#B388FF:#FFA3E3>{name} {level}</gradient>"
  bought: "<#43E97B>✔ <gray>Enchanted with <white>{name} {level}</white>!"
  hold-one: "<#FF6B6B>Hold exactly one item in your main hand."
  wrong-item: "<#FF6B6B>That enchant doesn't fit this item."
  maxed: "<#FF6B6B>That enchant is already at its highest level."
  conflict: "<#FF6B6B>That can't be combined with {other}."
  loading: "<#FF6B6B>Your data is still loading, try again."
  need-xp: "<#FF6B6B>You need <white>{levels}</white> XP levels for that."
  cannot-afford: "<#FF6B6B>You can't afford that. It costs {cost}"
  lucky-catch: "<aqua>✦ Lucky Catch! <gray>You reeled in an extra catch."

# Enchants that can't be on the same item.
conflicts:
  - [fortune, silk_touch]
  - [sharpness, smite, bane_of_arthropods]
  - [protection, fire_protection, blast_protection, projectile_protection]
  - [mending, infinity]
  - [autosmelt, silk_touch]

# ----------------------------------------------------------------------------
# Vanilla enchants (names are Minecraft ids)
# ----------------------------------------------------------------------------
vanilla:
  efficiency:
    name: "Efficiency"
    icon: ENCHANTED_BOOK
    items: [PICKAXE, AXE, SHOVEL, HOE]
    description: ["<gray>Break blocks faster."]
    levels:
      - {money: 2500}
      - {money: 7500}
      - {money: 20000}
      - {money: 50000}
      - {money: 120000}
      - {money: 350000, gems: 50}
      - {money: 1000000, gems: 150}
  fortune:
    name: "Fortune"
    items: [PICKAXE, SHOVEL, AXE, HOE]
    description: ["<gray>More drops from ores and crops."]
    levels:
      - {money: 15000}
      - {money: 60000}
      - {money: 200000, gems: 25}
      - {money: 750000, gems: 100}
  silk_touch:
    name: "Silk Touch"
    items: [PICKAXE, SHOVEL, AXE, HOE]
    description: ["<gray>Blocks drop themselves."]
    levels:
      - {money: 25000}
  unbreaking:
    name: "Unbreaking"
    items: [PICKAXE, AXE, SHOVEL, HOE, SWORD, BOW, CROSSBOW, TRIDENT, ROD, HELMET, CHESTPLATE, LEGGINGS, BOOTS, ELYTRA]
    description: ["<gray>Your gear lasts longer."]
    levels:
      - {money: 3000}
      - {money: 10000}
      - {money: 30000}
      - {money: 150000, gems: 40}
      - {money: 500000, gems: 120}
  mending:
    name: "Mending"
    items: [PICKAXE, AXE, SHOVEL, HOE, SWORD, BOW, CROSSBOW, TRIDENT, ROD, HELMET, CHESTPLATE, LEGGINGS, BOOTS, ELYTRA]
    description: ["<gray>XP repairs your gear."]
    levels:
      - {money: 100000, gems: 50}
  sharpness:
    name: "Sharpness"
    items: [SWORD, AXE]
    description: ["<gray>More melee damage."]
    levels:
      - {money: 3000}
      - {money: 9000}
      - {money: 25000}
      - {money: 60000}
      - {money: 150000}
      - {money: 500000, gems: 75}
  looting:
    name: "Looting"
    items: [SWORD]
    description: ["<gray>More mob drops."]
    levels:
      - {money: 15000}
      - {money: 60000}
      - {money: 200000, gems: 30}
      - {money: 700000, gems: 100}
  protection:
    name: "Protection"
    items: [HELMET, CHESTPLATE, LEGGINGS, BOOTS]
    description: ["<gray>Take less damage."]
    levels:
      - {money: 3000}
      - {money: 9000}
      - {money: 25000}
      - {money: 70000}
      - {money: 250000, gems: 50}
  feather_falling:
    name: "Feather Falling"
    items: [BOOTS]
    description: ["<gray>Take less fall damage."]
    levels:
      - {money: 2000}
      - {money: 6000}
      - {money: 15000}
      - {money: 40000}
  power:
    name: "Power"
    items: [BOW]
    description: ["<gray>Stronger arrows."]
    levels:
      - {money: 3000}
      - {money: 9000}
      - {money: 25000}
      - {money: 60000}
      - {money: 150000}
  luck_of_the_sea:
    name: "Luck of the Sea"
    items: [ROD]
    description: ["<gray>Better fishing loot."]
    levels:
      - {money: 5000}
      - {money: 20000}
      - {money: 75000}
      - {money: 250000, gems: 40}
  lure:
    name: "Lure"
    items: [ROD]
    description: ["<gray>Fish bite faster."]
    levels:
      - {money: 4000}
      - {money: 15000}
      - {money: 50000}
      - {money: 200000, gems: 30}

# ----------------------------------------------------------------------------
# Kishin custom enchants. Keep the ids - the effects are tied to them.
# ----------------------------------------------------------------------------
custom:
  autosmelt:
    name: "Autosmelt"
    icon: BLAST_FURNACE
    items: [PICKAXE, SHOVEL]
    description: ["<gray>Ores, sand and stone drop", "<gray>already smelted."]
    levels:
      - {money: 150000, gems: 75}
  explosive:
    name: "Explosive"
    icon: TNT
    items: [PICKAXE]
    values: [4, 8, 12, 16, 20]          # % chance to break a 3x3x3 area (sneak to mine normally)
    description: ["<gray>{value}% chance to blast", "<gray>a 3x3x3 area around the block."]
    levels:
      - {money: 250000, gems: 100}
      - {money: 500000, gems: 150}
      - {money: 1000000, gems: 250}
      - {money: 2500000, gems: 400}
      - {money: 5000000, gems: 750, credits: 50}
  haste:
    name: "Haste"
    icon: GOLDEN_PICKAXE
    items: [PICKAXE, SHOVEL, AXE]
    values: [1, 2, 3]                    # Haste effect level while held
    description: ["<gray>Haste {value} while you hold it."]
    levels:
      - {money: 50000, gems: 25}
      - {money: 200000, gems: 75}
      - {money: 750000, gems: 200}
  timber:
    name: "Timber"
    icon: OAK_LOG
    items: [AXE]
    values: [16, 32, 64]                 # most logs felled at once (sneak to chop normally)
    description: ["<gray>Chop whole trees at once", "<gray>(up to {value} logs)."]
    levels:
      - {money: 75000, gems: 25}
      - {money: 250000, gems: 75}
      - {money: 750000, gems: 150}
  replant:
    name: "Replant"
    icon: WHEAT_SEEDS
    items: [HOE]
    description: ["<gray>Grown crops you harvest are", "<gray>planted again automatically."]
    levels:
      - {money: 50000, gems: 25}
  lifesteal:
    name: "Lifesteal"
    icon: GHAST_TEAR
    items: [SWORD, AXE]
    values: [3, 6, 10]                   # % of damage dealt healed
    description: ["<gray>Heal {value}% of the damage", "<gray>you deal."]
    levels:
      - {money: 100000, gems: 50}
      - {money: 400000, gems: 125}
      - {money: 1200000, gems: 300}
  lucky-catch:
    name: "Lucky Catch"
    icon: TROPICAL_FISH
    items: [ROD]
    values: [10, 20, 30]                 # % chance of a double catch
    description: ["<gray>{value}% chance to catch", "<gray>twice as much."]
    levels:
      - {money: 75000, gems: 30}
      - {money: 300000, gems: 90}
      - {money: 900000, gems: 225}
  speed:
    name: "Swiftness"
    icon: SUGAR
    items: [BOOTS]
    values: [1, 2]                       # Speed effect level while worn
    description: ["<gray>Speed {value} while you wear them."]
    levels:
      - {money: 100000, gems: 50}
      - {money: 500000, gems: 150}
  experience:
    name: "Wisdom"
    icon: EXPERIENCE_BOTTLE
    items: [PICKAXE, SWORD, AXE, SHOVEL]
    values: [1.5, 2, 3]                  # XP multiplier from blocks and mobs
    description: ["<gray>{value}x experience from", "<gray>blocks and mobs."]
    levels:
      - {money: 50000, gems: 20}
      - {money: 200000, gems: 60}
      - {money: 600000, gems: 150}

# Autosmelt: what drops turn into.
autosmelt-results:
  RAW_IRON: IRON_INGOT
  RAW_GOLD: GOLD_INGOT
  RAW_COPPER: COPPER_INGOT
  ANCIENT_DEBRIS: NETHERITE_SCRAP
  SAND: GLASS
  RED_SAND: GLASS
  COBBLESTONE: STONE
  COBBLED_DEEPSLATE: DEEPSLATE
  CLAY_BALL: BRICK
  NETHERRACK: NETHER_BRICK
  KELP: DRIED_KELP
  CACTUS: GREEN_DYE

# Explosive never breaks these (containers are always skipped too).
explosive-never-breaks: [SPAWNER, BEACON, BEDROCK, END_PORTAL_FRAME, REINFORCED_DEEPSLATE, BUDDING_AMETHYST]
```
