# Minions

`plugins/Kishin/minions.yml` - The six minion types, upgrades and limits.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `minions.yml` (318 lines)

```yaml
# ============================================================================
# Kishin minions
# ============================================================================
# Six minions, each with one job:
#   Miner      - mines the blocks in front of it into a chest of your choice
#   Collector  - collects drops around it into a chest of your choice (with a filter)
#   Seller     - sells the items in a chest of your choice and gives you the cash
#   Feeder     - feeds the other minions around it from the food in its chest
#   Demolition - drops TNT at its location every few seconds
#   Deposit    - turns items around it straight into island value
#
# Buy them in /shop -> Minions (prices in special-shop.yml) - right-click in the
# shop for a free demo. Place one by right-clicking a block on your island (it
# faces the way you look - a Miner mines in that direction). Right-click a
# minion to link its chest, feed it, upgrade it, filter or pick it up.
# /minions lists all of yours.
#
# Minions work while their chunk is loaded. Text is MiniMessage.
# /kishin reload applies changes.
# ============================================================================

enabled: true

# Minions one island can have placed (kishin.island.limits.bypass ignores this).
max-per-island: 12

# How often (seconds) minions do their work check.
tick-seconds: 1

# How far (blocks) the linked chest may be from the minion.
link-range: 16

# Food: a hungry minion stops working. Feed it from its menu (click food in your
# inventory) or put a Feeder minion next to it. Types can set needs-food: false.
food:
  enabled: true
  capacity-hours: 24
  # item: minutes of work per item
  items:
    BREAD: 30
    BAKED_POTATO: 30
    COOKED_BEEF: 60
    COOKED_PORKCHOP: 60
    GOLDEN_CARROT: 180
    HAY_BLOCK: 300

# Auto-sell (Miner and Collector): instead of filling the chest, sellable items
# are sold to the /shop and the money goes straight to the owner. Bought once
# per minion and kept when you pick it up.
auto-sell:
  multiplier: 1.0
  price:
    money: 5000000
    gems: 2500
    credits: 250

# Free demo from the shop (right-click a minion there): works for this many
# minutes, can't be upgraded or picked up, then disappears.
demo:
  enabled: true
  minutes: 30
  once-per-player: true

demolition:
  fuse-ticks: 60

# Minion types.
#   behaviour:   MINER, COLLECTOR, SELLER, FEEDER, DEMOLITION or DEPOSIT
#   name / description: shown on the item, in the shop and in its menu
#   icon:        item in menus and the shop
#   head:        block worn on the head (or texture: base64 player-head value)
#   armor-color / tool: how it looks
#   needs-food:  default true (false for the Feeder)
#   auto-sell:   whether the auto-sell unlock is offered (default: Miner, Collector)
#   upgrades:    per track, a list of levels. The first level is what a new
#                minion has; every later one is bought with "cost".
#                speed = seconds per action, distance = blocks in front,
#                fortune = fortune level, radius = blocks around it,
#                multiplier = % of the shop sell price, amount = TNT per drop
types:
  miner:
    behaviour: MINER
    name: "<#43e5e5><bold>Miner Minion"
    description:
      - "<#43e5e5>This minion will constantly mine the blocks"
      - "<#43e5e5>in front of it and deposit the drops in a"
      - "<#43e5e5>chest of your choice. The miner's distance"
      - "<#43e5e5>and fortune levels can be upgraded too!"
    icon: DIAMOND_PICKAXE
    head: DIAMOND_ORE
    armor-color: "#43e5e5"
    tool: DIAMOND_PICKAXE
    upgrades:
      speed:
        - {value: 8}
        - {value: 7, cost: {gems: 300}}
        - {value: 6, cost: {gems: 600}}
        - {value: 5, cost: {gems: 1200}}
        - {value: 4, cost: {gems: 2400}}
        - {value: 3, cost: {gems: 4800}}
      distance:
        - {value: 1}
        - {value: 2, cost: {gems: 500}}
        - {value: 3, cost: {gems: 1000}}
        - {value: 4, cost: {gems: 2000}}
        - {value: 5, cost: {gems: 4000}}
      fortune:
        - {value: 0}
        - {value: 1, cost: {gems: 1500}}
        - {value: 2, cost: {gems: 4000}}
        - {value: 3, cost: {gems: 10000}}

  collector:
    behaviour: COLLECTOR
    name: "<#ffb300><bold>Collector Minion"
    description:
      - "<#ffb300>This minion will constantly collect the drops"
      - "<#ffb300>in a radius around it and deposit them in a"
      - "<#ffb300>chest of your choice. It can also filter items too!"
    icon: HOPPER
    head: HOPPER
    armor-color: "#ffb300"
    tool: HOPPER
    upgrades:
      speed:
        - {value: 5}
        - {value: 4, cost: {gems: 300}}
        - {value: 3, cost: {gems: 800}}
        - {value: 2, cost: {gems: 2000}}
      radius:
        - {value: 4}
        - {value: 6, cost: {gems: 400}}
        - {value: 8, cost: {gems: 900}}
        - {value: 10, cost: {gems: 1800}}
        - {value: 12, cost: {gems: 3600}}

  seller:
    behaviour: SELLER
    name: "<#3ddc3d><bold>Seller Minion"
    description:
      - "<#3ddc3d>This minion will constantly sell the items in a"
      - "<#3ddc3d>chest of your choice and give you the cash!"
    icon: EMERALD
    head: EMERALD_BLOCK
    armor-color: "#3ddc3d"
    tool: EMERALD
    upgrades:
      speed:
        - {value: 30}
        - {value: 25, cost: {gems: 300}}
        - {value: 20, cost: {gems: 700}}
        - {value: 15, cost: {gems: 1500}}
        - {value: 10, cost: {gems: 3000}}
      multiplier:
        - {value: 100}
        - {value: 105, cost: {gems: 1000}}
        - {value: 110, cost: {gems: 2500}}
        - {value: 120, cost: {gems: 6000}}
        - {value: 130, cost: {gems: 15000, credits: 50}}

  feeder:
    behaviour: FEEDER
    name: "<#ff4d8d><bold>Feeder Minion"
    description:
      - "<#ff4d8d>This minion will constantly feed other minions"
      - "<#ff4d8d>in a radius around it so you never have to"
      - "<#ff4d8d>worry about having to feed them"
    icon: GOLDEN_APPLE
    head: HAY_BLOCK
    armor-color: "#ff4d8d"
    tool: GOLDEN_APPLE
    needs-food: false
    upgrades:
      speed:
        - {value: 30}
        - {value: 20, cost: {gems: 300}}
        - {value: 10, cost: {gems: 800}}
      radius:
        - {value: 6}
        - {value: 10, cost: {gems: 400}}
        - {value: 14, cost: {gems: 1000}}
        - {value: 20, cost: {gems: 2500}}

  demolition:
    behaviour: DEMOLITION
    name: "<#ff5a1f><bold>Demolition Minion"
    description:
      - "<#ff5a1f>This minion will constantly drop TNT at its"
      - "<#ff5a1f>location a few seconds apart"
    icon: TNT
    head: TNT
    armor-color: "#ff5a1f"
    tool: FLINT_AND_STEEL
    upgrades:
      speed:
        - {value: 15}
        - {value: 12, cost: {gems: 300}}
        - {value: 10, cost: {gems: 700}}
        - {value: 8, cost: {gems: 1500}}
        - {value: 6, cost: {gems: 3000}}
      amount:
        - {value: 1}
        - {value: 2, cost: {gems: 1500}}
        - {value: 3, cost: {gems: 4000}}

  deposit:
    behaviour: DEPOSIT
    name: "<#ff8c00><bold>Deposit Minion"
    description:
      - "<#ff8c00>This minion will constantly deposit the items"
      - "<#ff8c00>around it straight to your island's value"
    icon: GOLD_BLOCK
    head: GOLD_BLOCK
    armor-color: "#ff8c00"
    tool: GOLD_INGOT
    upgrades:
      speed:
        - {value: 10}
        - {value: 8, cost: {gems: 400}}
        - {value: 6, cost: {gems: 1000}}
        - {value: 4, cost: {gems: 2500}}
      radius:
        - {value: 4}
        - {value: 6, cost: {gems: 500}}
        - {value: 8, cost: {gems: 1200}}
        - {value: 10, cost: {gems: 2500}}
        - {value: 12, cost: {gems: 5000}}

# ----------------------------------------------------------------------------
# Skins: bought once per player (gems/money/credits) and usable on all their
# minions. head: block/material on the head, or texture: base64 skull texture.
# permission: set it (and leave cost empty) for rank-only skins.
# types: [] = fits every minion type, or list type ids (miner, collector...).
# ----------------------------------------------------------------------------
skins:
  enabled: true
  list:
    golden:
      name: "<gold>Golden"
      head: GOLD_BLOCK
      armor-color: "#FFD700"
      tool: GOLDEN_PICKAXE
      cost: {gems: 400}
      types: [miner]
    frost:
      name: "<aqua>Frost"
      head: PACKED_ICE
      armor-color: "#A5F2F3"
      cost: {gems: 300}
    inferno:
      name: "<red>Inferno"
      head: MAGMA_BLOCK
      armor-color: "#D1400C"
      cost: {gems: 300}
    ender:
      name: "<dark_purple>Ender"
      head: PURPUR_BLOCK
      armor-color: "#7B3FA0"
      cost: {gems: 450}
    emerald:
      name: "<green>Emerald"
      head: EMERALD_BLOCK
      armor-color: "#17DD62"
      cost: {gems: 600}
    pumpkin:
      name: "<gold>Pumpkin King"
      head: CARVED_PUMPKIN
      armor-color: "#E38A1B"
      cost: {gems: 250}
    royal:
      name: "<yellow><b>Royal</b>"
      head: GILDED_BLACKSTONE
      armor-color: "#5B2C83"
      permission: "kishin.minions.skin.royal"   # e.g. give it to the KISHIN rank in ranks.yml

# ----------------------------------------------------------------------------
# Compactor (Miner and Collector minions): turns full sets in the linked chest
# into blocks. Recipes: INPUT: "OUTPUT[:how many inputs]" (default 9).
# ----------------------------------------------------------------------------
compactor:
  enabled: true
  price:
    money: 1000000
    gems: 750
  recipes:
    COAL: "COAL_BLOCK"
    IRON_INGOT: "IRON_BLOCK"
    RAW_IRON: "RAW_IRON_BLOCK"
    GOLD_INGOT: "GOLD_BLOCK"
    RAW_GOLD: "RAW_GOLD_BLOCK"
    RAW_COPPER: "RAW_COPPER_BLOCK"
    COPPER_INGOT: "COPPER_BLOCK"
    REDSTONE: "REDSTONE_BLOCK"
    LAPIS_LAZULI: "LAPIS_BLOCK"
    DIAMOND: "DIAMOND_BLOCK"
    EMERALD: "EMERALD_BLOCK"
    QUARTZ: "QUARTZ_BLOCK:4"
    SLIME_BALL: "SLIME_BLOCK"
    BONE_MEAL: "BONE_BLOCK"
    WHEAT: "HAY_BLOCK"
    MELON_SLICE: "MELON"

# ----------------------------------------------------------------------------
# Anti-exploit
# ----------------------------------------------------------------------------
anti-exploit:
  demolition:
    # Demolition minions do nothing this close (blocks) to a placed generator.
    min-distance-from-generators: 8
    # ...or while this many TNT are already lit within 16 blocks (lag machines).
    max-active-tnt-nearby: 12
  deposit:
    # Items a Deposit minion won't turn into island worth (endless generator output).
    blocked: [COBBLESTONE, STONE, COBBLED_DEEPSLATE, DEEPSLATE, NETHERRACK, BASALT, BLACKSTONE, ANDESITE, DIORITE, GRANITE, TUFF]
    # Share of the normal block worth a deposit adds (0.5 = half).
    worth-multiplier: 0.5
    # Most worth one island can gain from Deposit minions per day (0 = no cap).
    daily-cap-per-island: 2500000
```
