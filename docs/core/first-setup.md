# First setup

A fresh install works out of the box, but a few things need a location in your world. Work through this list once.

## 1. Spawn

Stand where new players should appear and set the spawn in `config.yml`:

```yaml
hub:
  world: "world"
  spawn: "world;137.5;194;104.5;0;0"   # world;x;y;z;yaw;pitch
```

## 2. Island schematics

New islands are pasted from the schematics in `plugins/Kishin/schematics/`. Three are included (`natural6`, `desert2`, `messa`). Add your own `.schematic` files there to offer more.

## 3. Ranks

Kishin has its own rank system - no permissions plugin needed. Open `ranks.yml` to rename ranks, change prefixes and permissions, or set their `/rankup` price. Give yourself a staff rank from the console:

```
setrank <yourname> OWNER
```

See [Ranks & permissions](?p=core&page=ranks).

## 4. World boss arena

Bosses spawn in one arena. Stand in its centre and run:

```
/boss setarena
```

The arena is a circle (`arena-radius` in `bosses.yml`, 30 blocks by default). A separate arena world with `keepInventory` works best:

```
/world create arenas void
/world arenas
/world arenarules      # applies the arena game rules to this world
```

## 5. Crates

Get a placeable crate block for each crate and put them at spawn:

```
/crates block yokai
/crates block tengu
/crates block fujin
```

Players open crates with virtual keys (`/crates`). Keys come from the store, boss rewards, the battlepass or `/crates give <player|*> <crate> [amount]`.

## 6. Treasure hunt spots

The *treasure hunt* event hides chests in spots you choose. Stand at each spot and run:

```
/events addspot near the big tree
```

## 7. Holograms & NPCs

```
/hologram create welcome
/hologram addline welcome <gradient:#D62839:#FF5A6A><bold>Welcome!
/npc create shop
/npc command shop shop
```

Holograms are saved in `holograms.txt`, NPCs in the database. See [Holograms & NPCs](?p=core&page=holograms-npcs).

## 8. Reload

After editing config files:

```
/kishin reload
```

That's it - create an island with `/is create` and play.
