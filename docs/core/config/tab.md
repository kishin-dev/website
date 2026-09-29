# Tab list

`plugins/Kishin/tab.yml` - Header, footer, the 4x20 info grid and animations.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `tab.yml` (117 lines)

```yaml
# ============================================================================
#  鬼  KISHIN TAB LIST  (tab.yml)              /kishin reload applies changes
# ============================================================================
#  Same MiniMessage placeholders, [conditions] and ANIMATIONS as scoreboard.yml
#  (see the top of that file): <pulse> <flash> <blink> <wave> <flow> <shine>
#  <typewriter> <scroll> <glitch> and {anim:name} frames from "animations:".
# ============================================================================

enabled: true

# Animation frame rate in ticks (1 = smoothest, 2 = smooth and cheap).
update-interval-ticks: 2
# How often the values are re-read, in ticks. Only changed cells are sent.
data-refresh-ticks: 20

# Main colour: #D62839 (crimson) with white/gray. ✦ is the house star.
animations:
  tips:
    interval: 120
    frames:
      - "<#D62839>✦ <gray>Pet eggs drop from <white>/crates</white>, every rank adds a pet slot"
      - "<#D62839>✦ <gray>Top 3 on the world boss win crate keys: <white>/boss"
      - "<#D62839>✦ <gray>Island events give bonus drops, keep an eye on chat"
      - "<#D62839>✦ <gray>Upgrade your island with <white>/is upgrades"
      - "<#D62839>✦ <gray>Claim free rewards every day: <white>/daily"

# A single line or a list of lines.
header:
  - ""
  - "<bold><pulsegradient:#D62839:#FF5A6A:60:40>✦ Kishin SkyBlock ✦</pulsegradient></bold>"
  - ""
  - "<gray>Online <white><online><gray>/<max_players>  <#D62839>✦  <gray>Ping <white><ping>ms"
  - ""
footer:
  - ""
  - "{anim:tips}"
  - ""
  - "<gray>Store <white>store.kishin.gg  <#D62839>✦  <gray>Discord <white>discord.gg/kishin  <#D62839>✦  <gray>Web <white>kishin.gg"
  - ""

# Used when grid.enabled is false: how each player appears in the normal player list.
player-list-name: "<rank><white><player>"

grid:
  # true  = fixed 4 x 20 info grid below (real players are not listed)
  # false = the normal player list with player-list-name
  enabled: true

  # Head shown next to every grid cell (a signed texture from mineskin.org).
  # Delete both to show the default Steve/Alex heads.
  # skin:
  #   value: "..."
  #   signature: "..."

  # 4 columns of up to 20 rows each; "" leaves a cell empty. [conditions] that
  # don't hold also leave the cell empty, so the rest of the column never shifts.
  columns:
    - # column 1 - you
      - ""
      - "<#D62839><bold>✦ PROFILE"
      - " <gray>Name: <white><player>"
      - " <gray>Rank: <rank>"
      - " <gray>Balance: <white>$<balance>"
      - " <gray>Gems: <white><gems> <#D62839>✦"
      - " <gray>Credits: <white><credits>"
      - " <gray>Crate Keys: <white><keys>"
      - "[prestiged] <gray>Prestige: <white><prestige_stars>"
      - ""
      - "<#D62839><bold>✦ PET"
      - "[flag:has-pet] <pet> <gray>[Lv <pet_level>]"
      - "[!flag:has-pet] <gray>No pet summoned"
      - " <gray>Slots: <white><pets><gray>/<white><pet_slots>"
    - # column 2 - island
      - ""
      - "<#D62839><bold>✦ ISLAND"
      - "[has-island] <gray>Name: <white><island_name>"
      - "[has-island] <gray>Role: <white><island_role>"
      - "[has-island] <gray>Members: <white><island_members><gray>/<white><island_member_limit>"
      - "[has-island] <gray>Level: <white><island_level>"
      - "[has-island] <gray>Worth: <white><island_worth>"
      - "[has-island] <gray>Bank: <white>$<island_bank>"
      - "[no-island] <gray>You don't have an island."
      - "[no-island] <gray>Use <white>/island create"
      - ""
      - "<#D62839><bold>✦ EVENTS"
      - "[flag:event-active] <pulse:#D62839:#FF5A6A:30><bold><event></bold></pulse>"
      - "[flag:event-active] <gray>Ends in: <white><event_time>"
      - "[!flag:event-active] <gray>No event right now"
      - "[flag:boss-alive] <pulse:#D62839:#FF5A6A:20><bold>Boss awake!</bold></pulse> <white>/boss tp"
      - "[!flag:boss-alive] <gray>Next boss: <white><boss_next>m"
    - # column 3 - combat & server
      - ""
      - "<#D62839><bold>✦ COMBAT"
      - " <gray>Kills: <white><kills>"
      - " <gray>Deaths: <white><deaths>"
      - " <gray>K/D: <white><kd>"
      - " <gray>Streak: <white><killstreak>"
      - " <gray>Best Streak: <white><best_killstreak>"
      - ""
      - "<#D62839><bold>✦ SERVER"
      - " <gray>Online: <white><online><gray>/<white><max_players>"
      - " <gray>Staff: <white><staff_online>"
      - " <gray>Ping: <white><ping>ms"
      - " <gray>Time: <white><time>"
    - # column 4 - links
      - ""
      - "<#D62839><bold>✦ STORE"
      - " <white>store.kishin.gg"
      - ""
      - "<#D62839><bold>✦ DISCORD"
      - " <white>discord.gg/kishin"
      - ""
      - "<#D62839><bold>✦ WEBSITE"
      - " <white>kishin.gg"
      - ""
      - "<#D62839><bold>✦ RULES"
      - " <white>kishin.gg/rules"
```
