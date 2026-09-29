# Minions & generators

## Minions

Six minions, each with one job ([minions.yml](?p=core&page=config-minions)):

| Minion | Job |
|---|---|
| **Miner** | mines the blocks in front of it into a linked chest |
| **Collector** | collects drops around it into a linked chest (with a filter) |
| **Seller** | sells the items in its chest and pays the owner |
| **Feeder** | feeds the minions around it from the food in its chest |
| **Demolition** | drops TNT at its location every few seconds |
| **Deposit** | turns items around it straight into island value |

Players buy them in `/shop` -> Minions (prices in [special-shop.yml](?p=core&page=config-special-shop)); right-clicking a minion in the shop gives a free demo. A minion is placed by right-clicking a block on your island and faces the way you look. Right-click it to link a chest, feed, upgrade, filter, change its skin or pick it up. `/minions` lists every minion you own.

Minions work while their chunk is loaded. Staff: `/minions give <player> <type> [demo]`.

## Generators

Generators are special blocks bought in the gem shop ([generators.yml](?p=core&page=config-generators)). Place one, right-click it and put fuel in; while it has fuel it produces its item every `interval` seconds into its output slot. Upgrades make it faster. A full output pauses it and stops burning fuel.

Generators can't be broken, pushed or blown up - pick them up from the menu. If an island is reset, its generators wait in `/generators` to be claimed back with their fuel and output. Staff: `/generators give <player> <type> [level]`.

## Stacking and automation

`config.yml` -> `stacking` merges blocks (iron, gold, diamond blocks...), spawners and mobs into stacks to keep islands lag-free. `automation` holds the chunk collectors and harvesters handed out with `/isadmin give`.
