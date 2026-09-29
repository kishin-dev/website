# Holograms & NPCs

## Holograms

```
/hologram create <name>
/hologram addline <name> <text>
/hologram setline <name> <line> <text>
/hologram removeline <name> <line>
/hologram move <name>
/hologram list | tp <name> | remove <name> | reload
```

Holograms are saved in `plugins/Kishin/holograms.txt`. Lines are MiniMessage and can use:

| Extra | |
|---|---|
| `{item:NETHER_STAR}` or `{item:DIAMOND_BLOCK:0.9}` | a spinning, glowing item as its own line |
| `<gradient:#FF0055:#FFD1DC:#FF0055:{phase}>TEXT</gradient>` | a gradient that slides |
| `{online}` `{max}` | players online / slots |
| `%placeholders%` | PlaceholderAPI, refreshed live |

Styles (`config.yml` -> `holograms.style`): `nametags` (default - looks like classic hologram plugins, water and portals behind stay visible), `lines` or `box`.

## NPCs

NPCs run a command when clicked - perfect next to a hologram at spawn.

```
/npc create <id> [name]         # at your position, wearing your skin
/npc name <id> <name|none>      # MiniMessage, <newline> for two lines
/npc skin <id> <player|self>
/npc command <id> <command|none>   # {player} = who clicked
/npc runas <id> <player|console>
/npc look <id> <on|off>         # turn to face nearby players
/npc move <id> | tp <id> | info <id> | list | remove <id>
```

A common pattern is an NPC with a hologram above it: *"Talk to the NPC or type » /shop"*.
