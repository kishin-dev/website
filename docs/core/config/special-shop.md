# Gem shop

`plugins/Kishin/special-shop.yml` - Minions, generators and spawners for gems, money or credits.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `special-shop.yml` (72 lines)

```yaml
# ============================================================================
# Kishin gem shop - extra categories in /shop
# ============================================================================
# Each category becomes a button on the /shop front page (slot = where it sits;
# 11, 13 and 15 are on the gold accent row). Clicking an item asks to confirm,
# then buys one. Right-clicking a minion gives a free demo (see minions.yml demo).
#
# Items:
#   - minion: <type from minions.yml>
#   - generator: <type from generators.yml>
#   - spawner: <mob, e.g. ZOMBIE>          (amount: optional, default 1)
#   price: any mix of {money: X, gems: Y, credits: Z}
#
# /kishin reload applies changes.
# ============================================================================

enabled: true

categories:
  minions:
    name: "<gradient:#7cd6ff:#b388ff><bold>Minions</bold></gradient>"
    icon: ARMOR_STAND
    slot: 11
    description:
      - "<gray>Helpers that mine, collect, sell,"
      - "<gray>feed, blow things up and deposit."
      - "<aqua>Paid with Gems. <gray>Right-click one for a demo."
    items:
      - {minion: miner,      price: {gems: 2000}}
      - {minion: collector,  price: {gems: 1500}}
      - {minion: seller,     price: {gems: 3000}}
      - {minion: feeder,     price: {gems: 1000}}
      - {minion: demolition, price: {gems: 2500}}
      - {minion: deposit,    price: {gems: 3500}}

  spawners:
    name: "<gradient:#ff8a65:#d62839><bold>Spawners</bold></gradient>"
    icon: SPAWNER
    slot: 13
    description:
      - "<gray>Mob spawners for your island."
      - "<gray>Place them next to each other to stack."
      - "<aqua>Paid with Gems."
    items:
      - {spawner: PIG,        price: {gems: 300}}
      - {spawner: COW,        price: {gems: 350}}
      - {spawner: CHICKEN,    price: {gems: 300}}
      - {spawner: SHEEP,      price: {gems: 300}}
      - {spawner: ZOMBIE,     price: {gems: 600}}
      - {spawner: SKELETON,   price: {gems: 700}}
      - {spawner: SPIDER,     price: {gems: 650}}
      - {spawner: CREEPER,    price: {gems: 900}}
      - {spawner: WITCH,      price: {gems: 3000}}
      - {spawner: BLAZE,      price: {gems: 2500}}
      - {spawner: ENDERMAN,   price: {gems: 3500}}
      - {spawner: IRON_GOLEM, price: {gems: 6000}}

  generators:
    name: "<gradient:#ffd166:#ff6b4a><bold>Generators</bold></gradient>"
    icon: LODESTONE
    slot: 15
    description:
      - "<gray>Special blocks that burn fuel and"
      - "<gray>produce valuable blocks and ingots."
      - "<gold>Expensive - but they pay for themselves."
      - "<aqua>Paid with Gems and Credits."
    items:
      - {generator: iron,      price: {gems: 2500,  credits: 25}}
      - {generator: gold,      price: {gems: 5000,  credits: 50}}
      - {generator: diamond,   price: {gems: 9000,  credits: 100}}
      - {generator: emerald,   price: {gems: 12000, credits: 150}}
      - {generator: netherite, price: {gems: 20000, credits: 250}}
```
