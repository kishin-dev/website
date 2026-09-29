# Collections

`plugins/Kishin/collections.yml` - Collection tiers and rewards.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `collections.yml` (76 lines)

```yaml
# ============================================================================
#  KISHIN COLLECTIONS  (/collections, or click a skill in /skills)
#  Gathering an item (mining, farming, chopping, fishing, mob drops) counts
#  towards its collection. Reaching a tier pays that tier's reward.
#  Items are grouped by skill. Each item can have its own tiers/rewards,
#  otherwise the defaults below are used.
#  reward: money, gems, bank (island), commands ({player})
# ============================================================================

default-tiers: [100, 500, 2500, 10000, 50000, 250000]
default-rewards:
  - {money: 1000}
  - {money: 5000, gems: 2}
  - {money: 20000, gems: 5}
  - {money: 75000, gems: 15}
  - {money: 250000, gems: 40}
  - {money: 1000000, gems: 100, commands: ["lootbox give {player} gems epic 1"]}

texts:
  menu-title: "<dark_gray>✦ {skill} Collections"
  menu-name: "<{color}><bold>{name}</bold> <white>{tier}"
  menu-collected: "<gray>Collected <dark_gray>» <white>{amount}"
  menu-tier: "<gray>Tier <dark_gray>» <white>{tier}<dark_gray> / {max}"
  menu-next: "<gray>Next tier at <white>{goal}"
  menu-reward: "<gray>Reward <dark_gray>» {reward}"
  menu-maxed: "<gold><bold>✔ COLLECTION MAXED"
  tier-up: "<gradient:#FFD700:#FF8C00><bold>✦ COLLECTION</bold></gradient> <white>{item} {tier} <dark_gray>» <gray>{amount} collected\n<gray>  Reward: {reward}"

items:
  mining:
    COBBLESTONE: {tiers: [1000, 5000, 25000, 100000, 500000, 2000000]}
    COAL: {}
    RAW_IRON: {name: "Iron"}
    IRON_INGOT: {name: "Iron Ingot"}
    RAW_GOLD: {name: "Gold"}
    GOLD_INGOT: {name: "Gold Ingot"}
    REDSTONE: {}
    LAPIS_LAZULI: {}
    DIAMOND: {tiers: [25, 100, 500, 2500, 10000, 50000]}
    EMERALD: {tiers: [25, 100, 500, 2500, 10000, 50000]}
    QUARTZ: {}
    OBSIDIAN: {tiers: [25, 100, 500, 2500, 10000, 50000]}
  farming:
    WHEAT: {}
    CARROT: {}
    POTATO: {}
    BEETROOT: {}
    MELON_SLICE: {name: "Melon"}
    PUMPKIN: {}
    SUGAR_CANE: {}
    CACTUS: {}
    NETHER_WART: {}
    COCOA_BEANS: {name: "Cocoa"}
  foraging:
    OAK_LOG: {}
    SPRUCE_LOG: {}
    BIRCH_LOG: {}
    JUNGLE_LOG: {}
    ACACIA_LOG: {}
    DARK_OAK_LOG: {}
    CHERRY_LOG: {}
    MANGROVE_LOG: {}
  fishing:
    COD: {}
    SALMON: {}
    TROPICAL_FISH: {tiers: [10, 50, 250, 1000, 5000, 25000]}
    PUFFERFISH: {tiers: [10, 50, 250, 1000, 5000, 25000]}
  combat:
    ROTTEN_FLESH: {}
    BONE: {}
    STRING: {}
    GUNPOWDER: {}
    SPIDER_EYE: {}
    ENDER_PEARL: {tiers: [25, 100, 500, 2500, 10000, 50000]}
    BLAZE_ROD: {tiers: [25, 100, 500, 2500, 10000, 50000]}
    SLIME_BALL: {}
```
