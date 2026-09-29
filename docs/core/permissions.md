# Permissions

All 112 permission nodes of Kishin Core, generated from `plugin.yml`, `ranks.yml` and the plugin code.

- **Default** is what Bukkit gives without any rank: *everyone*, *op* or *nobody*.
- **Granted by rank** is the lowest rank in the default `ranks.yml` that has it - every rank above inherits it.
- Kishin has its own rank system (see [Ranks & permissions](?p=core&page=ranks)), so you don't need LuckPerms. Any of these nodes can also be given with another permissions plugin.
- The server console always has every Kishin permission, so webstores can run commands like `credits give`.

## Player permissions

| Permission | Default | Granted by rank | Used by |
|---|---|---|---|
| `kishin.afk.custom` | nobody | KITSUNE+ | `/afk` |
| `kishin.auction` | nobody | YUREI+ | Market |
| `kishin.autopickup` | everyone | - | Qol, `/autopickup` |
| `kishin.back` | nobody | KAPPA+ | `/back` |
| `kishin.balance` | nobody | YUREI+ | `/balance` |
| `kishin.battlepass` | nobody | YUREI+ | `/battlepass` |
| `kishin.challenges` | nobody | YUREI+ | `/challenges` |
| `kishin.chat.color` | nobody | KAPPA+ | Chat |
| `kishin.class` | nobody | YUREI+ | `/class`, `/classes` |
| `kishin.class.admin` | op | - | `/class` |
| `kishin.combat.bypass` | op | - | Combat |
| `kishin.cooldown.reduced` | nobody | KISHIN+ | Perks |
| `kishin.cosmetics.exclusive` | nobody | KISHIN+ | Perks |
| `kishin.craft` | nobody | KAPPA+ | `/craft` |
| `kishin.crates` | nobody | YUREI+ | `/crates` |
| `kishin.credits` | nobody | YUREI+ | `/credits` |
| `kishin.daily` | nobody | YUREI+ | Daily, `/daily` |
| `kishin.discord` | nobody | YUREI+ | `/discord` |
| `kishin.enderchest` | nobody | NAMAHAGE+ | `/enderchest` |
| `kishin.feed` | nobody | KITSUNE+ | `/feed` |
| `kishin.fishing` | everyone | - | `/fishing` |
| `kishin.fly.hub` | nobody | KISHIN+ | Perks, `/fly` |
| `kishin.friend` | nobody | YUREI+ | `/friend` |
| `kishin.generators` | everyone | - | - |
| `kishin.hat` | nobody | KAPPA+ | `/hat` |
| `kishin.heal` | nobody | KITSUNE+ | `/heal` |
| `kishin.home` | nobody | YUREI+ | `/delhome`, `/home`, `/homes` |
| `kishin.ignore` | nobody | YUREI+ | `/ignore`, `/unignore` |
| `kishin.island.admin` | nobody | ADMIN+ | Automation, Island, `/island` |
| `kishin.island.bypass` | nobody | - | Generator, Island, Minion |
| `kishin.island.chatspy` | op | TRAINEE+ | Island |
| `kishin.island.limits.bypass` | op | ADMIN+ | Generator, Island, Minion |
| `kishin.island.reset.bypass` | op | ADMIN+ | Island |
| `kishin.kit` | nobody | NAMAHAGE+ | `/kit` |
| `kishin.leaderboard` | nobody | YUREI+ | `/leaderboard` |
| `kishin.level` | nobody | YUREI+ | `/level` |
| `kishin.list` | nobody | YUREI+ | `/list` |
| `kishin.lootbox.admin` | op | - | `/lootbox` |
| `kishin.market.bypass` | op | - | Market |
| `kishin.minions` | everyone | - | - |
| `kishin.minions.skins.all` | op | - | Minion |
| `kishin.msg` | nobody | YUREI+ | `/msg` |
| `kishin.msg.reply` | nobody | YUREI+ | Messaging |
| `kishin.msg.toggle` | nobody | YUREI+ | `/msgtoggle` |
| `kishin.nick` | nobody | KITSUNE+ | `/nick` |
| `kishin.orders` | nobody | YUREI+ | `/orders` |
| `kishin.particles` | nobody | KITSUNE+ | Perks, `/particles` |
| `kishin.pay` | nobody | YUREI+ | `/pay` |
| `kishin.ping` | nobody | YUREI+ | `/ping` |
| `kishin.playervault` | nobody | NAMAHAGE+ | Perks |
| `kishin.playtime` | nobody | YUREI+ | `/playtime` |
| `kishin.prestige` | nobody | KISHIN+ | Perks, `/prestige` |
| `kishin.queue.priority` | nobody | KITSUNE+ | Perks |
| `kishin.rankup` | nobody | YUREI+ | `/rankup` |
| `kishin.repair` | nobody | NAMAHAGE+ | `/repair` |
| `kishin.report` | nobody | YUREI+ | `/report` |
| `kishin.rules` | nobody | YUREI+ | `/rules` |
| `kishin.seen` | nobody | YUREI+ | `/seen` |
| `kishin.sell` | nobody | YUREI+ | `/sell` |
| `kishin.sellwand.bypass` | op | - | Qol |
| `kishin.settings.fly` | nobody | NAMAHAGE+ | Settings |
| `kishin.settings.friends` | nobody | KAPPA+ | Settings |
| `kishin.settings.ignoring` | nobody | KAPPA+ | Settings |
| `kishin.shop` | nobody | YUREI+ | `/shop` |
| `kishin.spawn` | nobody | YUREI+ | `/spawn` |
| `kishin.stats` | nobody | YUREI+ | `/stats` |
| `kishin.tpa` | nobody | YUREI+ | `/tpa` |
| `kishin.tpa.accept` | nobody | YUREI+ | `/tpaccept` |
| `kishin.tpa.deny` | nobody | YUREI+ | `/tpdeny` |
| `kishin.tpa.here` | nobody | KAPPA+ | `/tpahere` |
| `kishin.tpa.toggle` | nobody | YUREI+ | `/tpatoggle` |
| `kishin.vault` | nobody | KISHIN+ | Kishin, `/vault` |
| `kishin.website` | nobody | YUREI+ | `/website` |
| `kishin.workbench` | nobody | NAMAHAGE+ | `/workbench` |

## Staff permissions

| Permission | Default | Granted by rank | Used by |
|---|---|---|---|
| `kishin.staff.announcements` | op | - | `/announcements` |
| `kishin.staff.ban` | nobody | MODERATOR+ | Moderation |
| `kishin.staff.battlepass` | op | ADMIN+ | `/battlepass` |
| `kishin.staff.broadcast` | nobody | MODERATOR+ | `/broadcast` |
| `kishin.staff.bypass.all` | nobody | OWNER+ | Chat, Moderation, Player |
| `kishin.staff.chat` | nobody | TRAINEE+ | Moderation |
| `kishin.staff.chatgames` | op | - | `/chatgames` |
| `kishin.staff.crates` | op | ADMIN+ | Crate, `/crates` |
| `kishin.staff.economy.edit` | nobody | ADMIN+ | `/credits`, `/eco`, `/gems` |
| `kishin.staff.economy.reset` | nobody | OWNER+ | `/eco` |
| `kishin.staff.events` | op | - | `/events` |
| `kishin.staff.freeze` | nobody | TRAINEE+ | Moderation, `/freeze` |
| `kishin.staff.gamemode.creative` | nobody | ADMIN+ | `/gamemode` |
| `kishin.staff.gamemode.spectator` | nobody | MODERATOR+ | `/gamemode` |
| `kishin.staff.gamemode.survival` | nobody | MODERATOR+ | `/gamemode` |
| `kishin.staff.generators` | op | - | `/generators` |
| `kishin.staff.give` | nobody | ADMIN+ | Moderation |
| `kishin.staff.history` | nobody | MODERATOR+ | Moderation |
| `kishin.staff.hologram` | nobody | ADMIN+ | `/hologram` |
| `kishin.staff.inspect` | nobody | TRAINEE+ | Moderation, `/invsee` |
| `kishin.staff.kick` | nobody | MODERATOR+ | Moderation |
| `kishin.staff.maintenance` | nobody | ADMIN+ | `/maintenance` |
| `kishin.staff.market` | nobody | MODERATOR+ | Market |
| `kishin.staff.minions` | op | - | `/minions` |
| `kishin.staff.mode` | nobody | TRAINEE+ | Moderation |
| `kishin.staff.mute` | nobody | TRAINEE+ | Moderation |
| `kishin.staff.npc` | op | ADMIN+ | `/npc` |
| `kishin.staff.pets` | op | - | `/pets` |
| `kishin.staff.plugin.manage` | nobody | OWNER+ | - |
| `kishin.staff.ranks` | op | ADMIN+ | `/ranks` |
| `kishin.staff.reload` | nobody | ADMIN+ | `/challenges`, `/daily`, `/kishin` |
| `kishin.staff.report.list` | nobody | TRAINEE+ | Moderation, `/report` |
| `kishin.staff.sellwand` | op | - | `/sellwand` |
| `kishin.staff.setrank` | nobody | ADMIN+ | `/setrank` |
| `kishin.staff.tp` | nobody | MODERATOR+ | Moderation |
| `kishin.staff.vanish` | nobody | TRAINEE+ | Util, `/vanish` |
| `kishin.staff.warn` | nobody | MODERATOR+ | Moderation |
| `kishin.staff.world` | op | - | `/world` |

