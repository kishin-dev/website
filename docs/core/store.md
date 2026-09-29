# Store (/buy)

`/buy` (aliases `/store`, `/donate`) is an in-game store with animated menus. Configured in [store.yml](?p=core&page=config-store).

## How it works

- **Credits** are the premium currency (100 credits = 1 unit of your store currency). They're bought on your webstore - the credits tab only links there.
- **Everything else is bought in game with credits**: ranks, the monthly rank, crate keys and the battlepass. If a player can't afford something, the purchase is blocked and they're shown how many credits they still need, with a shortcut to the credit packs.
- Every purchase goes through a confirm screen, ends with a title, sounds and particles, and is logged in the console as `[Store] ...`.

Open a tab directly with `/buy credits`, `/buy ranks`, `/buy monthly`, `/buy keys` or `/buy battlepass`.

## Credit packs

```yaml
store-url: "https://your-store.example"
credits:
  packages:
    p500: {amount: 500, price: "€5.00", icon: GOLD_NUGGET, url: "https://your-store.example/?buy=123&u={player}", bonus: ""}
```

Clicking a pack opens a book with a big "open the store" button and sends a clickable link in chat. `{player}` in a `url` is replaced by the player's name.

## Delivering credits from a webstore

Make each webstore package run this command from the console:

```
credits give {username} 500
```

It works for offline players too. The console always has every Kishin permission, so webstore commands are never refused.

## Ranks and the monthly rank

Ranks and their prices come from `ranks.yml` (`rankup.price`). Buying a rank above your next one pays for **every rank on the way**, so it costs the same as ranking up one step at a time.

A rank with `duration-days` is a **subscription** (the monthly rank): renewing adds days on top of the time left, and when it runs out the player drops to its `expires-to` rank. Its perks and look in the store come from `store.yml` -> `ranks.<RANK>`.

## Crate keys

```yaml
keys:
  crates:
    yokai: {price: 100}      # credits per key
    tengu: {price: 250}
    fujin: {price: 600}
  bundles:                   # amount: discount %
    1: 0
    3: 5
    5: 10
    10: 20
```

## Sales

A store-wide sale lowers every credit price and shows the old price crossed out:

```yaml
sale:
  enabled: true
  name: "Autumn Sale"
  percent: 20
  ends: "2026-10-05 20:00"
```
