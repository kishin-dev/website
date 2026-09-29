# Skills, collections & enchants

## Skills

Five skills level up on their own while players play - **mining, farming, foraging, fishing and combat** (`/skills`). Each level makes the skill's perk stronger and pays money; milestone levels pay extra. Configured in [skills.yml](?p=core&page=config-skills).

```
XP for level L -> L+1 = xp-base * L ^ xp-exponent
```

- Blocks placed by players never give XP (remembered in the chunk, even across restarts and piston pushes).
- Crops only count when fully grown.
- Pets and server events can boost XP.

Perk types: `double-drop` (mining, farming, foraging), `double-catch` (fishing), `combat-damage` (combat).

## Collections

Gathering an item counts towards its collection (`/collections`, or click a skill in `/skills`). Reaching a tier pays that tier's reward - money, gems, island bank or console commands. See [collections.yml](?p=core&page=config-collections).

## Enchants

`/enchant` - hold an item and every enchant that fits it is listed with the price of its next level. Levels can go above the vanilla maximum, and prices can mix money, gems, credits and XP levels. See [enchants.yml](?p=core&page=config-enchants).

Kishin's own enchants include **autosmelt, explosive, timber, replant, haste, speed, lifesteal, lucky catch and experience**.

## Levels, prestige & classes

- **Player levels** come from playing; `config.yml` -> `leveling` and `level-rewards`.
- **Prestige** (`/prestige`) resets your level for a permanent buff.
- **Classes** (`/classes`) - pick one of Magician, Sonic, Healer or Assassin once, then level it with `/class`.

## Leaderboards

`/leaderboard` (alias `/top`) shows balance, level, island worth, kills, mob kills, blocks broken, playtime, fishing and daily streak rankings. They're rebuilt every few minutes, and staff can be excluded (`config.yml` -> `leaderboards`).
