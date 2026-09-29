# Island missions

`plugins/Kishin/missions.yml` - Daily and weekly island missions.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `missions.yml` (111 lines)

```yaml
# ============================================================================
# Island missions board  (/is missions)
# Every day <daily.count> and every week <weekly.count> missions are drawn from
# the pools below. All islands get the same missions and the whole team works
# on them together (progress from every member counts).
#
# Types:  BREAK / PLACE  targets: block materials     (only on your own island)
#         KILL           targets: entity types
#         FISH           (any catch)
#         SELL           amount = money earned from /shop and /sell
#         CHALLENGE      amount = challenges completed
# targets: empty/missing = anything counts.
# reward:  bank  -> island bank
#          gems  -> every member (offline members too)
#          money, commands ({player} {island}) -> members online when it completes
# ============================================================================
enabled: true
timezone: "Europe/Zagreb"
reset-hour: 0               # daily missions change at this hour
weekly-reset-day: MONDAY
# Blocks placed less than this many minutes ago don't count when broken (stops place+break farming).
placed-block-memory-minutes: 10

daily:
  count: 3
  pool:
    cobble:
      type: BREAK
      targets: [COBBLESTONE, STONE]
      amount: 3000
      name: "<gray>Stone Breakers"
      icon: COBBLESTONE
      description: ["<gray>Mine cobblestone or stone", "<gray>from your generators."]
      reward: {bank: 5000, gems: 2}
    ores:
      type: BREAK
      targets: [COAL_ORE, IRON_ORE, GOLD_ORE, LAPIS_ORE, DIAMOND_ORE, EMERALD_ORE, DEEPSLATE_COAL_ORE, DEEPSLATE_IRON_ORE, DEEPSLATE_GOLD_ORE, DEEPSLATE_DIAMOND_ORE]
      amount: 400
      name: "<aqua>Ore Rush"
      icon: IRON_ORE
      description: ["<gray>Mine any ores."]
      reward: {bank: 7500, gems: 3}
    builder:
      type: PLACE
      amount: 1000
      name: "<yellow>Builders"
      icon: BRICKS
      description: ["<gray>Place blocks on your island."]
      reward: {bank: 4000, gems: 2}
    hunters:
      type: KILL
      targets: [ZOMBIE, SKELETON, SPIDER, CREEPER]
      amount: 150
      name: "<red>Night Hunters"
      icon: IRON_SWORD
      description: ["<gray>Kill zombies, skeletons,", "<gray>spiders or creepers."]
      reward: {bank: 6000, gems: 3}
    fishers:
      type: FISH
      amount: 40
      name: "<blue>Gone Fishing"
      icon: FISHING_ROD
      description: ["<gray>Catch fish as a team."]
      reward: {bank: 5000, gems: 2}
    traders:
      type: SELL
      amount: 50000
      name: "<gold>Traders"
      icon: GOLD_INGOT
      description: ["<gray>Earn money by selling items."]
      reward: {bank: 5000, gems: 3}
    farmers:
      type: BREAK
      targets: [WHEAT, CARROTS, POTATOES, SUGAR_CANE, MELON, PUMPKIN]
      amount: 1500
      name: "<green>Harvest Day"
      icon: WHEAT
      description: ["<gray>Harvest crops."]
      reward: {bank: 5000, gems: 2}

weekly:
  count: 2
  pool:
    miners:
      type: BREAK
      amount: 50000
      name: "<gray><b>Deep Miners"
      icon: DIAMOND_PICKAXE
      description: ["<gray>Break any blocks on your island."]
      reward: {bank: 50000, gems: 15}
    challengers:
      type: CHALLENGE
      amount: 10
      name: "<light_purple><b>Challengers"
      icon: NETHER_STAR
      description: ["<gray>Complete challenges."]
      reward: {bank: 40000, gems: 20}
    merchants:
      type: SELL
      amount: 1000000
      name: "<gold><b>Merchant Guild"
      icon: EMERALD
      description: ["<gray>Earn money by selling items."]
      reward: {bank: 75000, gems: 15}
    slayers:
      type: KILL
      amount: 1500
      name: "<red><b>Slayers"
      icon: NETHERITE_SWORD
      description: ["<gray>Kill any mobs."]
      reward: {bank: 50000, gems: 15}
```
