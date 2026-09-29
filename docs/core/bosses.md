# World bosses

Every `interval-minutes` a boss spawns in the arena, with a warning `warn-minutes` before. Players see its health bar near it, it uses special attacks, and it can't be dragged out of the arena. Configured in [bosses.yml](?p=core&page=config-bosses).

## Commands

| Command | |
|---|---|
| `/boss` | When the next boss spawns |
| `/boss tp` | Teleport to the arena |
| `/boss spawn [id]` | Staff: spawn a boss now |
| `/boss kill` | Staff: remove the boss without rewards |
| `/boss setarena` | Staff: set the arena centre where you stand |

## How a boss looks and fights

Each boss has:

- **Looks** - `size` (1.0 = normal mob, up to 16), a big floating `title`, a particle `aura`, a `halo`, glowing items in `orbit`, equipment and glowing.
- **Entrance** - it rises with lightning, a shockwave and a title.
- **Phases** - at set health percentages it gets enraged: new title, potion effects, faster attacks and a new boss bar colour.
- **Abilities** - picked at random every `ability-every-seconds`:

| Ability | What happens |
|---|---|
| `shockwave` | knockback blast |
| `fireballs` | aimed at players |
| `summon` | minions |
| `leap` | jumps at the farthest player |
| `potion` | debuff aura |
| `spikes` | red circles, then spikes erupt - move! |
| `ring` | an expanding ground wave - jump over it |
| `meteors` | warning circles, then fireballs from the sky |
| `vortex` | pulls everyone towards the boss |

Health above the server's max-health cap (1024 by default in `spigot.yml`) is handled automatically: the boss takes proportionally less damage instead.

## Rewards

The top 3 damage dealers get their placement reward, everyone else who did at least `min-damage-percent` gets `participation`. Rewards use the [reward format](?p=core&page=crates-rewards) plus crate keys:

```yaml
key-crates: [yokai, tengu, fujin]
random-keys-unique: false

rewards:
  "1": {money: 300000, gems: 200, lootboxes: ["GEMS:LEGENDARY:1"], all-keys: 1}
  "2": {money: 175000, gems: 125, lootboxes: ["GEMS:EPIC:1"], random-keys: 2}
  "3": {money: 100000, gems: 75, lootboxes: ["GEMS:RARE:1"], random-keys: 1}
  participation: {money: 25000, gems: 20}
```

- `all-keys: N` - N keys of **every** crate in `key-crates`
- `random-keys: N` - N keys, each from a random crate
