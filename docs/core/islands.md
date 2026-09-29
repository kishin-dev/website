# Islands

Every player starts with `/is create` and picks one of the island schematics. Islands are pasted into the `islands` world on a grid of plots.

## Player commands

The main command is `/island` (aliases `/is`, `/isle`). Running it alone opens the island menu.

| Group | Subcommands |
|---|---|
| Basics | `create`, `home`, `spawn`, `setspawn`, `info`, `level`, `top`, `help`, `rename`, `reset` |
| Team | `invite`, `accept`, `deny`, `kick`, `leave`, `promote`, `demote`, `transfer`, `members` |
| Coops | `coop`, `uncoop`, `coops` - temporary build access for players outside the team |
| Bank | `bank`, `deposit`, `withdraw` - a shared island balance |
| Warps & visits | `warp`, `setwarp`, `delwarp`, `warps`, `visit` |
| Protection | `ban`, `unban`, `bans`, `settings` |
| Growth | `upgrades`, `limits`, `nether`, `end` |
| Extras | `missions`, `rate`, `featured`, `fly`, `chat` |

## Level and worth

Island **worth** is the value of the blocks on the island, **level** grows with it. A scan is run in two phases - chunk snapshots on the main thread a few per tick, then counting off-thread - so even huge islands never lag the server. Tune it in `config.yml` -> `islands.level`.

## Upgrades

`/is upgrades` opens the upgrade menu, where the team spends money to raise the island's limits and boosts (for example its size and generator speed). Upgrades are configured in `config.yml` -> `islands`.

## Missions

Daily and weekly missions shared by the whole team (`/is missions`), configured in [missions.yml](?p=core&page=config-missions). Blocks placed less than a few minutes ago don't count, so place-and-break farming doesn't work.

## Weekly top rewards

The best islands by worth are paid every week (`config.yml` -> `island-top-rewards`). Staff can check or pay out early with `/kishin toprewards`.

## Visiting and ratings

Open islands can be visited with `/is visit <player>`. Visitors rate islands with `/is rate`, and the best-rated open islands appear in `/is featured`.

## Staff

`/isadmin` (alias `/islandadmin`) has the staff tools: `info`, `tp`, `delete`, `reset`, `setowner`, `setlevel`, `setworth`, `upgrade`, `bank`, `give` and more.
