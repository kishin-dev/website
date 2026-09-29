# Server events

`plugins/Kishin/events.yml` - Gold rush, double XP, lucky drops, meteor shower, treasure hunt.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `events.yml` (129 lines)

```yaml
# ============================================================================
#  KISHIN SERVER EVENTS  (/events)
#  Every <interval-minutes> a random event starts (weighted), with a boss bar.
#  Staff (kishin.staff.events): /events start <id> | stop
#                               /events addspot <hint>  (treasure hunt spot here)
#  types: GOLD_RUSH (generators faster), DOUBLE_XP (skill XP bonus %),
#         LUCKY_DROPS (double drop/catch bonus %), METEOR_SHOWER, TREASURE_HUNT
# ============================================================================
enabled: true
interval-minutes: 45
min-players: 3

texts:
  bossbar: "{name} <gray>• <white>{time}"
  none: "<#A0AAB8>No event is running right now. <dark_gray>They start every 45 minutes!"
  running: "<#FFD166>✦ {name} <gray>is running for <white>{seconds}s</white> more!"
  already: "<#FF6B6B>An event is already running."
  unknown: "<#FF6B6B>Unknown event."
  no-spots: "<#FF6B6B>Treasure hunt has no free spots. Add some with /events addspot \\<hint>"
  list: "<#A0AAB8>Events: <white>{list}"
  spot-added: "<#43E97B>✔ Treasure spot added to {count} event(s)."
  no-permission: "<#FF6B6B>You don't have permission to do that."

design:
  start-sound: UI_TOAST_CHALLENGE_COMPLETE
  start:
    - ""
    - "{bar}"
    - "<center><gradient:{from}:{to}><bold>✦ SERVER EVENT ✦</bold></gradient>"
    - "<center><white><bold>{name}"
    - ""
    - "<center>{description}"
    - "<center>{hint}"
    - ""
    - "<center><dark_gray>Lasts {minutes} minutes • /events"
    - "{bar}"
    - ""
  end:
    - "<center><gradient:{from}:{to}><bold>✦ {name}</bold></gradient> <gray>has ended. Thanks for playing!"
  treasure-found:
    - ""
    - "{bar}"
    - "<center><gradient:{from}:{to}><bold>✦ TREASURE FOUND ✦</bold></gradient>"
    - "<center><white><bold>{player}</bold> <gray>found the treasure!"
    - "<center><gray>Reward <dark_gray>» {reward}"
    - "{bar}"
    - ""

events:
  gold-rush:
    type: GOLD_RUSH
    weight: 20
    minutes: 15
    name: "<#FFD166>Gold Rush"
    bossbar: "<#FFD166><bold>⚡ GOLD RUSH</bold> <gray>- generators x2"
    bossbar-color: YELLOW
    color-from: "#FFD700"
    color-to: "#FF8C00"
    generator-speed: 2.0          # 2 = twice as fast
    description:
      - "<gray>Every <white>generator</white> on the server"
      - "<gray>runs <#FFD166><bold>twice as fast</bold></#FFD166>!"
  double-xp:
    type: DOUBLE_XP
    weight: 20
    minutes: 20
    name: "<#43E97B>Double Skill XP"
    bossbar: "<#43E97B><bold>✦ DOUBLE XP</bold> <gray>- all skills"
    bossbar-color: GREEN
    color-from: "#43E97B"
    color-to: "#38F9D7"
    bonus: 100                    # +100% skill XP
    description:
      - "<gray>All <white>skills</white> earn"
      - "<#43E97B><bold>double XP</bold></#43E97B>! Level up now!"
  lucky-drops:
    type: LUCKY_DROPS
    weight: 15
    minutes: 15
    name: "<#B388FF>Lucky Drops"
    bossbar: "<#B388FF><bold>✦ LUCKY DROPS</bold> <gray>- +15% double drops"
    bossbar-color: PURPLE
    color-from: "#7B2CBF"
    color-to: "#FFA3E3"
    bonus: 15                     # +15% double drop and double catch chance
    description:
      - "<gray>Mining, farming, chopping and fishing"
      - "<gray>get <#B388FF><bold>+15% double drops</bold></#B388FF>!"
  meteor-shower:
    type: METEOR_SHOWER
    weight: 15
    minutes: 8
    name: "<#FF6B35>Meteor Shower"
    bossbar: "<#FF6B35><bold>☄ METEOR SHOWER</bold>"
    bossbar-color: RED
    color-from: "#FF0055"
    color-to: "#FF8C00"
    meteor-every-seconds: 20
    meteor-chance: 0.6            # chance per online island player each wave
    meteor-block: MAGMA_BLOCK
    loot-rolls: 3
    loot:
      - {item: IRON_INGOT, min: 2, max: 6, weight: 30}
      - {item: GOLD_INGOT, min: 2, max: 5, weight: 25}
      - {item: DIAMOND, min: 1, max: 3, weight: 12}
      - {item: EMERALD, min: 1, max: 3, weight: 10}
      - {item: NETHERITE_SCRAP, min: 1, max: 1, weight: 3}
      - {item: EXPERIENCE_BOTTLE, min: 3, max: 8, weight: 20}
    description:
      - "<gray>Meteors are crashing near players"
      - "<gray>on their islands. <#FF6B35>Grab the loot!"
  treasure-hunt:
    type: TREASURE_HUNT
    weight: 10
    minutes: 10
    name: "<#FFD700>Treasure Hunt"
    bossbar: "<#FFD700><bold>✦ TREASURE HUNT</bold> <gray>- find the chest!"
    bossbar-color: YELLOW
    color-from: "#FFD700"
    color-to: "#FF8C00"
    description:
      - "<gray>A treasure chest appeared at spawn."
      - "<gray>First to open it wins!"
    reward:
      money: 50000
      gems: 50
      commands: ["lootbox give {player} gems epic 1"]
    # Added with /events addspot <hint> while standing on the spot.
    spots: []
```
