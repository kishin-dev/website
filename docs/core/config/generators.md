# Generators

`plugins/Kishin/generators.yml` - Generator types, fuel, output and upgrades.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `generators.yml` (110 lines)

```yaml
# ============================================================================
# Kishin generators
# ============================================================================
# Generators are special blocks bought in the gem shop (/shop -> Generators,
# prices in special-shop.yml). Place one on your island, right-click it and put
# fuel in: click a fuel item in your own inventory while its menu is open.
# While it has fuel it makes its item every "interval" seconds into its own
# output slot - click the output slot to collect. A full output pauses it and
# stops burning fuel. Upgrades (in the menu) make it faster.
#
# Generators can't be broken, pushed or blown up - pick them up from the menu.
# If an island is reset or deleted, its generators wait in /generators to be
# claimed back with their fuel and output.
#
# Text is MiniMessage. /kishin reload applies changes.
# ============================================================================

enabled: true

# Generators one island can have placed (kishin.island.limits.bypass ignores this).
max-per-island: 8

# Fuel items the fuel slot holds (one fuel type at a time).
fuel-capacity: 128

# Items the output slot holds before the generator pauses.
output-capacity: 256

# Hours of work a generator catches up on after its chunk was unloaded (fuel permitting).
offline-hours: 24

# How often (seconds) generators in loaded chunks work and update their label.
tick-seconds: 2

# Fuel item -> seconds of running time per item.
fuels:
  COAL: 60
  CHARCOAL: 60
  COAL_BLOCK: 600
  BLAZE_ROD: 120
  DRIED_KELP_BLOCK: 20

# The floating label above every generator.
# Placeholders: <name> <level> <status> <output> <capacity> <fuel> (seconds of fuel left)
hologram:
  enabled: true
  height: 1.35
  lines:
    - "<name> <gray>Lv <white><level>"
    - "<status>"
    - "<gray>Stored: <white><output></white>/<capacity>"

# The speed upgrade ladder, shared by every type. The first entry is what a new
# generator starts at; every later entry is one upgrade, bought with "cost".
#   interval-percent: cycle time as a % of the type's interval (50 = twice as fast)
levels:
  - {interval-percent: 100}
  - {interval-percent: 90, cost: {money: 250000, gems: 500}}
  - {interval-percent: 80, cost: {money: 1000000, gems: 1500}}
  - {interval-percent: 70, cost: {money: 3000000, gems: 3000}}
  - {interval-percent: 60, cost: {money: 8000000, gems: 6000}}
  - {interval-percent: 50, cost: {money: 20000000, gems: 12000, credits: 50}}

# Generator types.
#   name:     display name
#   block:    the special block it is placed as (pick something players can't get
#             otherwise so it is never mistaken for a normal block)
#   output:   what it makes, amount per cycle
#   interval: seconds per cycle at level 1
#   particle: particle while it runs (Bukkit Particle name, "" for none)
#
# Default economy (shop sell prices): Iron ~$160/min, Gold ~$250/min,
# Diamond ~$660/min, Emerald ~$810/min, Netherite ~$925/min at level 1,
# for about $20/min of coal.
types:
  iron:
    name: "<gradient:#f0f0f0:#9a9a9a><bold>Iron Generator</bold></gradient>"
    block: LODESTONE
    output: IRON_BLOCK
    amount: 1
    interval: 60
    particle: CRIT
  gold:
    name: "<gradient:#ffe066:#e0a800><bold>Gold Generator</bold></gradient>"
    block: GILDED_BLACKSTONE
    output: GOLD_BLOCK
    amount: 1
    interval: 75
    particle: WAX_ON
  diamond:
    name: "<gradient:#7df9ff:#1e9fd6><bold>Diamond Generator</bold></gradient>"
    block: REINFORCED_DEEPSLATE
    output: DIAMOND_BLOCK
    amount: 1
    interval: 180
    particle: GLOW
  emerald:
    name: "<gradient:#7dff9b:#12a33a><bold>Emerald Generator</bold></gradient>"
    block: VERDANT_FROGLIGHT
    output: EMERALD_BLOCK
    amount: 1
    interval: 120
    particle: HAPPY_VILLAGER
  netherite:
    name: "<gradient:#b58cff:#4a2a6b><bold>Netherite Generator</bold></gradient>"
    block: END_PORTAL_FRAME
    output: NETHERITE_INGOT
    amount: 1
    interval: 240
    particle: PORTAL
```
