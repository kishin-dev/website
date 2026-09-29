# Economy & trading

Kishin has three currencies:

| Currency | Used for | Commands |
|---|---|---|
| **Money** | shop, auction house, upgrades, most things | `/balance`, `/pay`, `/baltop`; staff `/eco` |
| **Gems** | the gem shop, enchants, pet merging | `/gems`; staff `/gems give\|take\|set\|check` |
| **Credits** | premium currency from the webstore, spent in [/buy](?p=core&page=store) | `/credits`; staff `/credits give\|take\|set\|check` |

`gems` and `credits` staff commands work on offline players and from the console.

## Shop

`/shop` - pick a category, left-click to buy, right-click to sell, shift-right-click to sell all of an item. `/sell hand|all` sells from your inventory. Prices are in [shop.yml](?p=core&page=config-shop); apply changes with `/shop reload`.

The shop enforces safety rules no matter the config: sell prices are capped at buy prices, and renamed, enchanted, damaged or special items are never bought back.

The **gem shop** adds categories for minions, generators and spawners ([special-shop.yml](?p=core&page=config-special-shop)).

## Auction house

`/ah` - list items with `/ah sell <price>`, search with `/ah search <text>`, and collect unsold items and earnings with `/ah collect`. A tax is removed from every sale, listings expire after `duration-hours`, and anti-abuse rules stop alt-account money laundering (`config.yml` -> `market`).

## Buy orders

`/orders` - ask for items at your own price, or fill other players' orders for money.

## Trading

`/trade <player>` opens a safe trade screen: offered items leave your inventory at once, and money and gems only move when both players are ready and the countdown ends. Any change un-readies both sides; closing or leaving cancels and returns everything.

## Sell wands and auto-pickup

- `/sellwand give <player> [uses] [multiplier]` - a wand that sells a chest's contents on click (staff/console, good as a crate or store reward).
- `/autopickup` - mined blocks go straight into your inventory.

## Fishing

Every vanilla fish catch becomes a custom fish with a random weight and size. Drop fish into the `/fishing` menu and close it to sell them all.
