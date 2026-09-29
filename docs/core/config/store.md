# Store (/buy)

`plugins/Kishin/store.yml` - The in-game store: credit packs, ranks, monthly rank, crate keys, battlepass and sales.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `store.yml` (141 lines)

```yaml
# ============================================================================
#  KISHIN STORE  (/buy, /store)                 /kishin reload applies changes
# ============================================================================
#  CREDITS are bought with real money on the store website (100 credits = €1).
#  The credits tab only links there - make each Tebex package run on purchase:
#      credits give {username} 500
#  Everything else is bought IN GAME with credits (blocked if you can't afford
#  it, with a shortcut to the credit packs):
#    - ranks from ranks.yml (rankup.price). Skipping ranks pays for every rank
#      on the way, so it costs the same as ranking up one by one.
#    - the monthly rank (a ranks.yml rank with duration-days) - renewing adds
#      days on top of the time left.
#    - crate keys, in bundles with discounts
#    - the battlepass (price from battlepass.yml, or battlepass.price below)
#  Every purchase is logged in the console as "[Store] ...".
# ============================================================================

store-url: "https://kishin-store.vercel.app"   # <- your store website (Vercel)
accent: "#D62839"
accent-2: "#FF5A6A"
animate: true                           # running lights around the menu border
time-zone: "Europe/Zagreb"

# A store-wide sale on everything bought with CREDITS (not the Tebex packs).
sale:
  enabled: false
  name: "Autumn Sale"
  percent: 20
  ends: "2026-10-05 20:00"               # yyyy-MM-dd HH:mm, empty = no end

# Server-wide announcement after a purchase.
broadcast:
  ranks: true
  monthly: true
  keys: false

credits:
  packages:
    # url: {player} = the player's name. The website starts the checkout for that pack
    # with their name filled in (?buy=<Tebex package id>&u=<name>).
    p500:  {amount: 500,  price: "€5.00",  icon: GOLD_NUGGET, url: "https://kishin-store.vercel.app/?buy=7702113&u={player}", bonus: ""}
    p1000: {amount: 1000, price: "€10.00", icon: GOLD_INGOT,  url: "https://kishin-store.vercel.app/?buy=7702114&u={player}", bonus: ""}
    p1500: {amount: 1500, price: "€15.00", icon: RAW_GOLD,    url: "https://kishin-store.vercel.app/?buy=7702116&u={player}", bonus: ""}
    p2000: {amount: 2000, price: "€20.00", icon: GOLD_BLOCK,  url: "https://kishin-store.vercel.app/?buy=7702117&u={player}", bonus: "Most popular", featured: true}
    p5000: {amount: 5000, price: "€50.00", icon: BEACON,      url: "https://kishin-store.vercel.app/?buy=7702118&u={player}", bonus: "Best value"}

# How ranks look in the store (the head texture or an icon) and their perks.
ranks:
  YUREI:
    texture: "a7f80aa0e29e398a521e1aecac1f9b651e3cecb5f004dce85f4ca2e8279074bd"
    perks: ["Where everyone starts", "1 pet slot"]
  KAPPA:
    texture: "4c63d5fef8e0e4cc10b4a6c08ba19ce9637539b2843b0d9baa68d0ceb4709633"
    perks: ["2 pet slots", "/tpahere and /back", "/hat and /craft", "Chat colours"]
  NAMAHAGE:
    texture: "266e570a648e19db58f5e0e7a7667f599b1871f286b36572c4b7737491c9b060"
    perks: ["3 pet slots", "/workbench and /enderchest", "/repair and rank kit", "Player vaults", "Hub flight setting"]
  KITSUNE:
    texture: "4e8067b78c005894d76020d369a014e57ed1f0de0cd612bf3f0e5e98434d272b"
    perks: ["4 pet slots", "/nick and particles", "/feed and /heal", "Custom AFK message", "Join queue priority"]
  KISHIN:
    texture: "e6ff8158f218f7683262443db5ad438d19d9bbc5d45d6c45ce543c8a473aadff"
    perks: ["5 pet slots", "Fly in the hub", "Reduced cooldowns", "Prestige unlocked", "Exclusive cosmetics", "Everything from Kitsune"]

monthly:
  rank: KISHIN

keys:
  crates:                                # credits per single key
    yokai: {price: 100}
    tengu: {price: 250}
    fujin: {price: 600}
  bundles:                               # keys: discount %
    1: 0
    3: 5
    5: 10
    10: 20

battlepass:
  price: -1                              # -1 = the price from battlepass.yml
  perks: ["100 levels of premium rewards", "Exclusive tags and trails", "Crate keys and lootboxes", "Lasts the whole season"]

sounds:
  buy: UI_TOAST_CHALLENGE_COMPLETE
  buy-2: ENTITY_PLAYER_LEVELUP

# The book that opens when a credit pack is clicked. {button} is the clickable
# "open the store" line, {amount} {price} {bonus} {url} {player}.
book-page:
  - ""
  - "<#D62839><bold>  ✦ KISHIN STORE ✦"
  - ""
  - "<black><bold>{amount} Credits"
  - "<dark_gray>{price}"
  - ""
  - "{button}"
  - ""
  - "<dark_gray>Credits arrive in game"
  - "<dark_gray>about a minute after"
  - "<dark_gray>your purchase."

design:
  broadcast:
    - "{bar}"
    - "<center><#D62839><bold>✦ KISHIN STORE ✦"
    - "<center><white>{player} <gray>just got {item}<gray>!"
    - "<center><gray>Support the server: <#D62839>/buy"
    - "{bar}"

texts:
  menu-title: "<dark_gray>✦ Kishin Store"
  credits-title: "<dark_gray>✦ Credits"
  ranks-title: "<dark_gray>✦ Ranks"
  monthly-title: "<dark_gray>✦ Kishin Monthly"
  keys-title: "<dark_gray>✦ Crate Keys"
  bp-title: "<dark_gray>✦ Battlepass"
  confirm-title: "<dark_gray>✦ Confirm purchase"
  title: "<#D62839><bold>✦ PURCHASED ✦"
  bought: "<#D62839>✦ <gray>Thank you! {item} <dark_gray>- {sub}"
  book-button: "<#D62839><bold>[ OPEN THE STORE ]"
  book-hover: "<gray>Opens {url}"
  chat-link: "<#D62839>✦ <gray>Buy <white>{amount} credits</white> <gray>({price}): <#D62839><u>click here to open the store</u>"
  price: "<white>{now} credits"
  price-sale: "<dark_gray><st>{full}</st> <white>{now} credits <#43E97B>(-{percent}%)"
  price-line: "<gray>Price: {price}"
  can-afford: "<#43E97B>✔ <gray>You can afford this"
  need-more: "<#FF6B6B>✘ <gray>You need <white>{need}</white> more credits"
  click-topup: "<#D62839>▶ <gray>Click to get credits"
  not-enough: "You need <white>{need}</white> more credits <gray>(you have {have})."
  topup-link: "<#D62839>✦ <gray>Top up: <#D62839><u>click to see credit packs</u>"
  perk-line: "<#D62839>✦ <white>{perk}"
  wallet-name: "<#D62839><bold>✦ Your Wallet"
  cat-click: "<#D62839>▶ <gray>Click to browse"
  cat-monthly: "<bold><shine:#D62839:#FFFFFF:40:3>✦ KISHIN MONTHLY ✦</shine></bold>"
  confirm-yes: "<#43E97B><bold>✔ CONFIRM"
  confirm-no: "<#FF6B6B><bold>✘ CANCEL"
  rank-current: "<#43E97B>✔ Your current rank"
  rank-owned-line: "<#43E97B>✔ Unlocked"
  rank-click-buy: "<#D62839>▶ <gray>Click to buy"
  rank-click-renew: "<#D62839>▶ <gray>Click to renew"
  keys-save: "<#43E97B>✦ Save {percent}%"
```
