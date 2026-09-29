# Daily rewards

`plugins/Kishin/daily.yml` - The 7-day reward cycle and streak bonus.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `daily.yml` (64 lines)

```yaml
# ============================================================================
#  Daily rewards  -  /daily
# ============================================================================
#  One claim per day. Come back the next day and your streak grows; miss a day
#  and it starts over at 1. The 7 "days" below repeat forever, and every full
#  week of streak makes money, gems and XP bigger (see bonus-per-week).
#
#  Reward format (same as challenges.yml):
#    money: 1000
#    gems: 50
#    xp-levels: 5
#    lootboxes: ["MONEY:RARE:1"]      # TYPE:RARITY:AMOUNT  (types: MONEY, GEMS, LEVEL)
#    items: ["DIAMOND:3"]             # MATERIAL:AMOUNT
#
#  Changes apply with /daily reload - no restart needed.
# ============================================================================

# When a new day starts. Use your players' timezone.
timezone: "Europe/Zagreb"

# Extra days a player may miss without losing the streak (0 = must claim every day).
grace-days: 0

# +10% money/gems/XP for every full week of streak, up to +100%.
bonus-per-week: 0.10
max-bonus: 1.0

days:
  1:
    money: 500
  2:
    money: 750
    xp-levels: 1
  3:
    money: 1000
    gems: 25
  4:
    money: 1500
    xp-levels: 2
  5:
    money: 2000
    gems: 50
  6:
    money: 3000
    xp-levels: 3
  7:
    money: 5000
    gems: 150
    lootboxes: ["MONEY:RARE:1"]

# Extra rewards the day a streak reaches these numbers (on top of the normal day).
milestones:
  14:
    gems: 250
    lootboxes: ["GEMS:EPIC:1"]
  30:
    gems: 750
    lootboxes: ["MONEY:LEGENDARY:1"]
  60:
    gems: 1500
    lootboxes: ["LEVEL:EPIC:2"]
  100:
    gems: 3000
    lootboxes: ["LEVEL:LEGENDARY:1", "MONEY:LEGENDARY:1"]
```
