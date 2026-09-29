# Scoreboard

`plugins/Kishin/scoreboard.yml` - Sidebar lines, boards, pages and animations.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `scoreboard.yml` (105 lines)

```yaml
# ============================================================================
#  鬼  KISHIN SIDEBAR  (scoreboard.yml)          /kishin reload applies changes
# ============================================================================
#  Every line is MiniMessage (https://docs.advntr.dev/minimessage/format.html).
#  A sidebar shows at most 15 lines. Players can hide it in /settings.
#
#  RIGHT COLUMN
#    "Balance{right}<green>$<balance>"  -> the part after {right} sits on the
#    right edge of the board (like Hypixel). Leave {right} out for a normal line.
#
#  ANIMATIONS  (work in the title, every line, and in tab.yml too)
#    <pulsegradient:#A:#B[:speed[:strength]]>t</pulsegradient>
#                                                 gradient that brightens and dims
#    <pulse:#A:#B[:#C..][:speed]>text</pulse>     colour breathes between colours
#    <flash:#A:#B[:#C..][:interval]>text</flash>  colour snaps between colours
#    <blink[:on[:off]]>text</blink>               text blinks (ticks on/off)
#    <wave:#A:#B[:#C..][:speed[:spread]]>t</wave> moving gradient, letter by letter
#    <flow[:speed[:spread]]>text</flow>           moving rainbow
#    <shine:#base:#glow[:speed[:width]]>t</shine> a light sweeps across the text
#    <typewriter[:speed[:hold]]>text</typewriter> types itself out, holds, repeats
#    <scroll:width[:speed]>long text</scroll>     marquee, "width" letters wide
#    <glitch[:chance%[:interval]]>text</glitch>   letters flicker (obfuscated)
#    {anim:name}                                  a frame animation from "animations:"
#    speed = ticks for one full cycle (20 ticks = 1 second). pulse/flash/blink
#    keep formatting inside them; for the letter-by-letter ones put <bold> etc.
#    OUTSIDE:  <bold><wave:#D62839:#FFD166>KISHIN</wave></bold>
#
#  PLACEHOLDERS
#    <player> <displayname> <rank> <rank_name> <rank_display> <balance> <gems>
#    <credits> <keys> <level> <prestige> <prestige_stars> <kills> <deaths> <kd>
#    <killstreak> <best_killstreak> <ping> <ping_color>..</ping_color> <online>
#    <max_players> <staff_online> <world> <time> <date> <tps> <tps_color>..</tps_color>
#    <island_name> <island_level> <island_bank> <island_worth> <island_role>
#    <island_role_color>..</island_role_color> <island_members> <island_member_limit>
#    <pet> <pet_level> <pets> <pet_slots> <event> <event_time> <boss> <boss_next>
#    Any PlaceholderAPI placeholder (%server_tps_1%, ...) when it's installed.
#
#  CONDITIONS - start a line with one or more; "!" in front negates:
#    [has-island] [no-island] [staff] [not-staff] [prestiged] [permission:node]
#    [world:arenas] [rank:KISHIN] [min-rank:KITSUNE]
#    [flag:boss-alive] [flag:boss-nearby] [flag:event-active] [flag:has-pet] [flag:flying]
#
#  BOARDS - extra layouts under "boards:" are shown instead of the default one
#  when their conditions hold (highest priority wins). A board can also have
#  "pages:" (lists of lines) that rotate every page-seconds.
# ============================================================================

enabled: true

# Animation frame rate in ticks (1 = smoothest, 2 = smooth and cheap).
update-interval-ticks: 2
# How often the values (balance, island, ...) are re-read, in ticks.
data-refresh-ticks: 20

# For <time> and <date>.
time-zone: "Europe/Zagreb"
time-format: "HH:mm"
date-format: "dd.MM.yyyy"

# Worlds where the board is hidden.
disabled-worlds: []

# Frame animations used as {anim:name} (none needed for the default board).
animations: {}

# Main colour: #D62839 (crimson) with white/gray. ✦ is the house star.
title: "<bold><pulsegradient:#D62839:#FF5A6A:60:40>✦ Kishin SkyBlock ✦</pulsegradient></bold>"

lines:
  - "<gray><strikethrough>                                 "
  - "<#D62839><b><player>"
  - " <#D62839>✦ <white>Rank: <rank>"
  - " <#D62839>✦ <white>Balance: <gray>$<balance>"
  - " <#D62839>✦ <white>Gems: <gray><gems> <#D62839>✦"
  - " <#D62839>✦ <white>Credits: <gray><credits>"
  - ""
  - "[has-island]<#D62839><b><island_name>"
  - "[has-island] <#D62839>✦ <white>Level: <gray><island_level>"
  - "[has-island] <#D62839>✦ <white>Bank: <gray>$<island_bank>"
  - "[has-island] <#D62839>✦ <white>Worth: <gray><island_worth>"
  - "[no-island]<#D62839><b>No Island"
  - "[no-island] <#D62839>✦ <white>Use /island create"
  - ""
  - "<#D62839>kishin.gg"
  - "<gray><strikethrough>                                 "

boards:
  # Shown near the world boss while it's alive.
  boss:
    priority: 10
    conditions: "[flag:boss-nearby]"
    title: "<bold><pulsegradient:#D62839:#FF5A6A:30:50>✦ World Boss ✦</pulsegradient></bold>"
    lines:
      - "<gray><strikethrough>                                 "
      - "<#D62839><b>The boss is awake!"
      - " <#D62839>✦ <white>Fighters: <gray><online>"
      - " <#D62839>✦ <white>Pet: <pet>"
      - ""
      - "<#D62839><b>Rewards"
      - " <#D62839>✦ <white>#1 <gray>every crate key"
      - " <#D62839>✦ <white>#2 <gray>2 random keys"
      - " <#D62839>✦ <white>#3 <gray>1 random key"
      - ""
      - "<#D62839>kishin.gg"
      - "<gray><strikethrough>                                 "
```
