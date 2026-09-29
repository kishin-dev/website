# Announcements

`plugins/Kishin/announcements.yml` - Automatic chat announcements.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `announcements.yml` (138 lines)

```yaml
# ============================================================================
#  KISHIN ANNOUNCEMENTS
#  Every <interval-seconds> the next message (or a random one) is posted in chat.
#  Players can hide them with /announcements toggle.
#  Staff (kishin.staff.announcements): /announcements send <id> | list
#
#  Lines are MiniMessage:
#    {bar}        full-width gradient rule (colours: bar.from/to, or per message)
#    <center>     at the start of a line = centered in chat
#    {player} {online} {max} and the links below: {store} {discord} {website}
#    <click:open_url:'{store}'> / <click:run_command:'/is'> / <hover:show_text:'...'>
#    PlaceholderAPI %placeholders% work per player
# ============================================================================
enabled: true
interval-seconds: 300       # every 5 minutes
min-players: 1
random-order: false         # false = in order, true = random

links:
  store: "https://store.kishin.net"
  discord: "https://discord.gg/kishin"
  website: "https://kishin.net"

bar:
  from: "#8B0000"
  to: "#FF4D6D"
  width: 64

sound:
  name: BLOCK_NOTE_BLOCK_CHIME
  volume: 0.6
  pitch: 1.4

messages:
  store:
    bar: {from: "#FFB703", to: "#FF4D6D"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#FFB703:#FF4D6D><bold>✦ KISHIN STORE ✦</bold></gradient>"
      - ""
      - "<center><white>Get <#FFB703>ranks<white>, <#FFB703>crate keys <white>and <#FF4D6D>credits"
      - "<center><#A0AAB8>Every purchase keeps the server alive ♥"
      - ""
      - "<center><click:open_url:'{store}'><hover:show_text:'<#FFB703>Click to open the store'><gradient:#FFB703:#FF4D6D><bold>[ OPEN THE STORE ]</bold></gradient></hover></click>"
      - "{bar}"
      - ""

  discord:
    bar: {from: "#5865F2", to: "#B388FF"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#5865F2:#B388FF><bold>✦ JOIN OUR DISCORD ✦</bold></gradient>"
      - ""
      - "<center><white>Giveaways, <#B388FF>sneak peeks<white>, events and support"
      - "<center><#A0AAB8>Meet the community and never miss an update"
      - ""
      - "<center><click:open_url:'{discord}'><hover:show_text:'<#5865F2>Click to join the Discord'><gradient:#5865F2:#B388FF><bold>[ JOIN DISCORD ]</bold></gradient></hover></click>"
      - "{bar}"
      - ""

  minions:
    bar: {from: "#00E5FF", to: "#B388FF"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#00E5FF:#B388FF><bold>✦ LET YOUR ISLAND WORK FOR YOU ✦</bold></gradient>"
      - ""
      - "<center><white>Buy <#B388FF>minions <white>and <#B388FF>generators <white>with <aqua>gems"
      - "<center><#A0AAB8>They mine, collect, sell and feed while you're away"
      - ""
      - "<center><click:run_command:'/shop'><hover:show_text:'<aqua>Click to open the shop'><gradient:#00E5FF:#B388FF><bold>[ OPEN THE GEM SHOP ]</bold></gradient></hover></click>"
      - "{bar}"
      - ""

  missions:
    bar: {from: "#43E97B", to: "#38F9D7"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#43E97B:#38F9D7><bold>✦ ISLAND MISSIONS ✦</bold></gradient>"
      - ""
      - "<center><white>New <#43E97B>daily <white>and <#38F9D7>weekly <white>team goals are waiting"
      - "<center><#A0AAB8>Complete them together for gems and island money"
      - ""
      - "<center><click:run_command:'/is missions'><hover:show_text:'<#43E97B>Click to see your missions'><gradient:#43E97B:#38F9D7><bold>[ VIEW MISSIONS ]</bold></gradient></hover></click>"
      - "{bar}"
      - ""

  daily:
    bar: {from: "#7000FF", to: "#FF7AC8"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#7000FF:#FF7AC8><bold>✦ DAILY REWARD ✦</bold></gradient>"
      - ""
      - "<center><white>Claim your <#FF7AC8>free daily reward <white>and grow your streak"
      - "<center><#A0AAB8>The longer your streak, the bigger the prize"
      - ""
      - "<center><click:run_command:'/daily'><hover:show_text:'<#FF7AC8>Click to claim'><gradient:#7000FF:#FF7AC8><bold>[ CLAIM NOW ]</bold></gradient></hover></click>"
      - "{bar}"
      - ""

  top:
    bar: {from: "#FFD700", to: "#FF8C00"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#FFD700:#FF8C00><bold>✦ WEEKLY ISLAND REWARDS ✦</bold></gradient>"
      - ""
      - "<center><white>The <#FFD700>top 10 islands <white>win gems every Sunday"
      - "<center><#A0AAB8>Grow your island worth and climb the leaderboard"
      - ""
      - "<center><click:run_command:'/is top'><hover:show_text:'<#FFD700>Click to see the leaderboard'><gradient:#FFD700:#FF8C00><bold>[ VIEW LEADERBOARD ]</bold></gradient></hover></click>"
      - "{bar}"
      - ""

  vote:
    enabled: false          # turn on when you have a vote plugin
    bar: {from: "#43E97B", to: "#00C6FF"}
    lines:
      - ""
      - "{bar}"
      - "<center><gradient:#43E97B:#00C6FF><bold>✦ VOTE FOR KISHIN ✦</bold></gradient>"
      - ""
      - "<center><white>Vote daily for <#43E97B>free keys <white>and <aqua>gems"
      - ""
      - "<center><click:run_command:'/vote'><gradient:#43E97B:#00C6FF><bold>[ VOTE NOW ]</bold></gradient></click>"
      - "{bar}"
      - ""

texts:
  shown: "<#43E97B>✔ Announcements are visible again."
  hidden: "<#A0AAB8>Announcements hidden. <dark_gray>/announcements toggle to show them again."
  unknown: "<#FF6B6B>Unknown announcement. <dark_gray>/announcements list"
  list: "<#A0AAB8>Announcements: <white>{list}"
  usage: "<#FF6B6B>Usage: /announcements [toggle]"
```
