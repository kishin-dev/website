# Tutorial

`plugins/Kishin/tutorial.yml` - The first-join tutorial steps.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `tutorial.yml` (76 lines)

```yaml
# ============================================================================
# First-join tutorial
# New players walk through these steps in order; each step pays its reward
# the moment it's done, and finishing everything pays finish.reward.
# Players see progress on a boss bar and can check it with /tutorial.
#
# Step types:
#   HAS_ISLAND                     - owns or joined an island
#   ISLAND_LEVEL   amount          - island level reaches <amount>
#   BREAK          material amount - breaks <amount> blocks (material optional = any block)
#   PLACE          material amount - places <amount> blocks
#   COMMAND        commands        - runs one of these commands (labels, without /)
#   SELL           amount          - earns <amount> money from /shop or /sell
#   CHALLENGE      amount          - completes <amount> challenges
# title: MiniMessage, <progress> and <amount> are replaced.
# reward: money, gems, bank (island bank), commands (console, {player} {island})
# ============================================================================
enabled: true
# Only accounts younger than this take the tutorial (older players are never bothered).
new-player-minutes: 30

bossbar:
  enabled: true
  color: GREEN            # PINK BLUE RED GREEN YELLOW PURPLE WHITE

steps:
  create-island:
    type: HAS_ISLAND
    title: "Create your island with <white>/is"
    message:
      - "<gray>Type <white>/is</white> and pick an island type to start your adventure."
    reward:
      money: 250
  mine-cobble:
    type: BREAK
    material: COBBLESTONE
    amount: 32
    title: "Mine cobblestone from your generator <white><progress>/<amount>"
    message:
      - "<gray>Your island has a cobblestone generator next to the spawn - mine it!"
      - "<gray>Upgrade it later in <white>/is upgrades</white> to get ores."
    reward:
      money: 250
      gems: 2
  open-shop:
    type: COMMAND
    commands: [shop, market, store]
    title: "Open the shop with <white>/shop"
    message:
      - "<gray>The shop buys and sells almost everything. Try <white>/shop</white>."
    reward:
      money: 250
  sell:
    type: SELL
    amount: 100
    title: "Earn money by selling items <white>$<progress>/$<amount>"
    message:
      - "<gray>Sell your cobblestone and other drops in <white>/shop</white> or with <white>/sell</white>."
    reward:
      money: 500
      gems: 3
  challenge:
    type: CHALLENGE
    amount: 1
    title: "Complete your first challenge <white>/challenges"
    message:
      - "<gray>Challenges give great rewards. Open <white>/challenges</white> and finish one."
    reward:
      money: 500
      gems: 5

finish:
  reward:
    money: 1000
    gems: 15
    commands: []
```
