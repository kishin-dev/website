# Trading

`plugins/Kishin/trade.yml` - The /trade screen.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `trade.yml` (48 lines)

```yaml
# ============================================================================
#  KISHIN TRADING  (/trade <player>)
#  A safe trade screen: offered items leave your inventory straight away,
#  money and gems only move when BOTH players are ready and the countdown ends.
#  Any change un-readies both sides. Closing the screen or leaving cancels
#  the trade and gives everything back. Every trade is logged to the console.
# ============================================================================
enabled: true
request-seconds: 60        # how long a request stays valid
max-distance: 0            # blocks; 0 = trade from anywhere
countdown-seconds: 3
money-enabled: true
gems-enabled: true

texts:
  title: "<dark_gray>Trade with <white>{player}"
  info: "<gradient:#43E97B:#38F9D7><bold>✦ TRADE ✦</bold></gradient>\n\n<gray>Click items in <white>your inventory</white>\n<gray>to add them to your offer.\n<gray>Click your offered items\n<gray>to take them back.\n\n<gray>Both press <#43E97B>READY</#43E97B> to trade."
  my-money: "<#FFD166><bold>Your money</bold> <dark_gray>» <white>${amount}\n\n<gray>Click to change"
  their-money: "<#FFD166><bold>{player}'s money</bold> <dark_gray>» <white>${amount}"
  my-gems: "<aqua><bold>Your gems</bold> <dark_gray>» <white>{amount}\n\n<gray>Click to change"
  their-gems: "<aqua><bold>{player}'s gems</bold> <dark_gray>» <white>{amount}"
  you-ready: "<#43E97B><bold>✔ YOU ARE READY</bold>{countdown}\n\n<gray>Click to take it back"
  you-not-ready: "<#FF6B6B><bold>✖ NOT READY</bold>\n\n<gray>Click when you're happy\n<gray>with the trade"
  they-ready: "<#43E97B><bold>✔ {player} IS READY"
  they-not-ready: "<#A0AAB8><bold>{player} is not ready"
  countdown: "\n<#FFD166>Trading in {seconds}..."
  ask-money: "How much money do you want to offer?"
  ask-gems: "How many gems do you want to offer?"
  sent: "<#43E97B>✔ <gray>Trade request sent to <white>{player}</white>."
  received: "<gradient:#43E97B:#38F9D7><bold>✦ TRADE</bold></gradient> <white>{player}</white> <gray>wants to trade with you!\n<click:run_command:'/trade accept {player}'><hover:show_text:'<#43E97B>Open the trade'><#43E97B><bold>[ ACCEPT ]</bold></hover></click>  <click:run_command:'/trade deny {player}'><hover:show_text:'<#FF6B6B>Deny'><#FF6B6B><bold>[ DENY ]</bold></hover></click>"
  completed: "<#43E97B>✔ <gray>Trade with <white>{player}</white> completed!"
  cancelled-by: "<#FF6B6B>✖ <gray>{player} cancelled the trade. Everything was given back."
  left: "<#FF6B6B>✖ <gray>Trade cancelled - {player} left."
  failed: "<#FF6B6B>✖ <gray>Trade failed - everything was given back."
  not-enough: "<#FF6B6B>✖ <gray>Trade cancelled - {player} no longer has what they offered."
  too-far: "<#FF6B6B>You must be within {max} blocks of {player}."
  too-far-cancel: "<#FF6B6B>✖ <gray>Trade cancelled - you moved too far apart."
  busy: "<#FF6B6B>One of you is already trading."
  self: "<#FF6B6B>You can't trade with yourself."
  disabled: "<#FF6B6B>Trading is turned off."
  no-request: "<#FF6B6B>{player} hasn't sent you a trade request (or it expired)."
  denied: "<#A0AAB8>Trade request denied."
  denied-by: "<#FF6B6B>{player} denied your trade request."
  full: "<#FF6B6B>Your side of the trade is full."
  no-room: "<#FF6B6B>Make room in your inventory first."
  bad-amount: "<#FF6B6B>You don't have that much."
  offline: "<#FF6B6B>That player isn't online."
  usage: "<#FF6B6B>Usage: /trade \\<player>"
```
