# Crates & rewards

Kishin uses **one reward format** everywhere: crates, daily rewards, challenges, the battlepass and boss placements.

```yaml
reward:
  money: 1000
  gems: 50
  xp-levels: 5
  credits: 25
  lootboxes: ["MONEY:RARE:1"]        # TYPE:RARITY:AMOUNT  (MONEY, GEMS, LEVEL)
  items: ["DIAMOND:3"]               # MATERIAL:AMOUNT
  keys: ["tengu:1"]                  # CRATE:AMOUNT (virtual keys)
  cosmetics: ["tag:oni", "trail:SAKURA"]
  pet-eggs: ["RARE:1"]               # RARITY:AMOUNT (eggs from pets.yml)
```

Items that don't fit in the inventory drop at the player's feet, so a reward is never lost.

## Crates

Crates are defined in [crates.yml](?p=core&page=config-crates). Each reward has a `name`, `icon`, `rarity` (COMMON to LEGENDARY - EPIC and up are announced), a `weight` and the `reward` itself.

- Keys are **virtual**: they live in `/crates`, and players can withdraw them as items to trade or sell.
- Crate blocks for spawn: `/crates block <crate>`.
- Give keys (works for offline players, good for webstores): `/crates give <player|*> <crate> [amount]`.
- For a pet egg reward, use `icon: PLAYER_HEAD` - the menu shows the egg's own texture.

## Lootboxes

Money, gem and level lootboxes in five rarities:

```
/lootbox give <player> <type> <rarity> [amount]
```

## Daily rewards

`/daily` - one claim a day on a 7-day cycle that repeats. Every full week of streak makes money, gems and XP bigger (`bonus-per-week`). See [daily.yml](?p=core&page=config-daily).

## Challenges

`/challenges` - goals for the whole island, in tiers that unlock in order. Types include handing in items, island level/worth/members, balance, kills, playtime and more. Item challenges can be repeatable. See [challenges.yml](?p=core&page=config-challenges).

## Battlepass

`/battlepass` - 100 tasks done in order, each finished task is one level and one reward. Players buy the pass with credits (or you grant it with `/battlepass give <player>`). Changing `season.id` starts a new season. See [battlepass.yml](?p=core&page=config-battlepass).

## Tutorial

New players walk through the steps in [tutorial.yml](?p=core&page=config-tutorial), each with its own reward. `/tutorial` shows the current step, `/tutorial skip` leaves it.
