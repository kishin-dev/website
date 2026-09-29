# Commands

Every command Kishin Core registers (111 in total), generated from `plugin.yml`.
Arguments in `<angle brackets>` are required, `[square brackets]` are optional.

> **Tip:** some groups of commands can be switched off in `config.yml` -> `modules` (moderation, homes, teleport requests, messaging, essentials, economy commands), so they don't clash with another plugin that owns the same command.

| Command | Aliases | What it does | Usage |
|---|---|---|---|
| `/afk` |  | Toggles AFK, optionally with a custom message | `/afk [message]` |
| `/ah` | `/auction`, `/auctionhouse`, `/auctions` | The auction house - buy and sell items with other players | `/ah [sell &lt;price&gt;\|search &lt;text&gt;\|mine\|collect]` |
| `/announcements` | `/announce` | Hide or show chat announcements; staff can send one now | `/announcements [toggle\|send &lt;id&gt;\|list]` |
| `/autopickup` | `/ap` | Toggles auto-pickup of mined blocks | `/autopickup` |
| `/back` |  | Returns to your last location (death, teleport, or warp) | `/back` |
| `/balance` | `/bal`, `/money` | Shows your balance, or someone else's | `/balance [player]` |
| `/baltop` | `/balancetop`, `/moneytop` | The richest players | `/baltop [page]` |
| `/ban` | `/tempban` | Bans a player (permanent or temporary) | `/ban &lt;player&gt; [duration] [reason] [-s]` |
| `/battlepass` | `/bp`, `/pass`, `/season` | The seasonal battlepass - 100 levels of rewards | `/battlepass` |
| `/boss` | `/worldboss`, `/wb` | World boss info and teleport; staff can spawn/kill/set the arena | `/boss [tp\|spawn [id]\|kill\|setarena]` |
| `/broadcast` | `/bc`, `/announce` | Server-wide announcement | `/broadcast &lt;message&gt;` |
| `/buy` | `/store`, `/donate` | The Kishin store - credits, ranks, the monthly rank, crate keys and the battlepass | `/buy [credits\|ranks\|monthly\|keys\|battlepass]` |
| `/challenges` | `/challenge`, `/quests` | Island challenges - goals for your whole island | `/challenges` |
| `/chatgames` | `/cg`, `/chatgame` | Chat game stats, leaderboards and toggle; staff can start/stop rounds | `/chatgames [stats\|top\|toggle\|start\|stop]` |
| `/class` |  | Opens your class menu to see perks per level and level up with EXP | `/class` |
| `/classes` |  | Choose your class (Magician, Sonic, Healer or Assassin) - only once! | `/classes` |
| `/collections` | `/collection`, `/col` | Your item collections | `/collections [skill]` |
| `/craft` |  | Opens a portable crafting table | `/craft` |
| `/crates` | `/crate`, `/keys` | Open crates, preview prizes, withdraw or store keys | `/crates [withdraw &lt;crate&gt; [amount]\|deposit]` |
| `/credits` | `/credit` | Shows your credits (premium currency); staff can give, take, set and check | `/credits [give\|take\|set\|check] [player] [amount]` |
| `/daily` | `/dailyreward`, `/streak` | Claim your daily reward and keep your streak going | `/daily` |
| `/delhome` |  | Deletes one of your homes | `/delhome &lt;name&gt;` |
| `/discord` |  | Shows a link to the Discord | `/discord` |
| `/eco` | `/economy` | Edits a player's balance | `/eco &lt;give\|take\|set\|reset&gt; &lt;player&gt; [amount]` |
| `/enchant` | `/enchants`, `/ench` | Enchant the item in your hand (vanilla and Kishin enchants) | `/enchant` |
| `/enderchest` |  | Opens your ender chest from anywhere | `/enderchest` |
| `/endersee` | `/ecsee` | Looks inside a player's ender chest | `/endersee &lt;player&gt;` |
| `/events` | `/event` | The running server event; staff can start/stop events | `/events [start &lt;id&gt;\|stop\|addspot &lt;hint&gt;]` |
| `/feed` |  | Refills your hunger | `/feed` |
| `/fishing` |  | Opens the fishing menu (sell fish, leaderboard, how it works) | `/fishing` |
| `/fly` |  | Toggles flight in the hub | `/fly` |
| `/freeze` | `/ss` | Freezes or unfreezes a player | `/freeze &lt;player&gt;` |
| `/friend` | `/f` | Manage your friends list | `/friend &lt;add\|remove\|list&gt; [player]` |
| `/gamemode` | `/gm` | Changes gamemode | `/gamemode &lt;mode&gt; [player]` |
| `/gems` | `/gem` | Shows your gems; staff and the console can give, take, set and check (works offline) | `/gems [give\|take\|set\|check] [player] [amount]` |
| `/generators` | `/gens` | Your generators - claim back ones whose island was reset | `/generators [give &lt;player&gt; &lt;type&gt; [level]\|reload]` |
| `/gma` |  | Adventure mode | `/gma` |
| `/gmc` |  | Creative mode | `/gmc` |
| `/gms` |  | Survival mode | `/gms` |
| `/gmsp` |  | Spectator mode | `/gmsp` |
| `/hat` |  | Wears the item in your hand as a hat | `/hat` |
| `/heal` |  | Restores your health | `/heal` |
| `/history` | `/hist`, `/checkban` | Shows a player's punishment history | `/history &lt;player&gt;` |
| `/hologram` | `/holo`, `/holograms` | Manage holograms (holograms.txt) | `/hologram &lt;create\|remove\|move\|addline\|setline\|removeline\|scale\|list\|tp\|reload&gt;` |
| `/home` |  | Teleports to one of your homes | `/home [name]` |
| `/homes` |  | Lists your homes and your home limit | `/homes` |
| `/ignore` |  | Ignores a player's messages, tpa requests and chat | `/ignore &lt;player&gt;` |
| `/invsee` |  | Looks inside a player's inventory | `/invsee &lt;player&gt;` |
| `/isadmin` | `/islandadmin` | Staff island tools (info, tp, delete, reset, setowner, upgrades, bank, purge, give...) | `/isadmin &lt;subcommand&gt; [player] ...` |
| `/island` | `/is`, `/isle` | Opens island creation or management menu | `/island [help\|home\|invite\|bank\|upgrades\|settings\|warp\|visit\|top\|chat\|coop\|nether\|end\|limits\|...]` |
| `/kick` |  | Kicks a player from the server | `/kick &lt;player&gt; [reason] [-s]` |
| `/kishin` |  | Kishin admin - /kishin reload re-reads messages, ranks, scoreboard and tab | `/kishin reload` |
| `/kit` |  | Claims your rank's starter kit | `/kit` |
| `/leaderboard` | `/leaderboards`, `/lb`, `/top` | Server leaderboards | `/leaderboard [balance\|level\|island_worth\|kills\|mob_kills\|blocks_broken\|playtime\|fishing\|daily_streak]` |
| `/level` | `/levels`, `/lvl` | Opens the level menu with your XP progress and milestone rewards | `/level` |
| `/list` |  | Lists online players | `/list` |
| `/lootbox` |  | Gives a lootbox item (Money/Gems/Level, in 5 rarities) to a player | `/lootbox give &lt;player&gt; &lt;type&gt; &lt;rarity&gt; [amount]` |
| `/maintenance` |  | Turns maintenance mode on or off | `/maintenance [on\|off]` |
| `/minions` | `/minion` | Your minions - claim back ones whose island was reset | `/minions [give &lt;player&gt; &lt;type&gt; [demo]\|reload]` |
| `/msg` | `/w`, `/tell`, `/message` | Sends a private message | `/msg &lt;player&gt; &lt;message&gt;` |
| `/msgtoggle` |  | Toggles whether you can receive private messages | `/msgtoggle` |
| `/mute` | `/tempmute` | Mutes a player (permanent or temporary) | `/mute &lt;player&gt; [duration] [reason] [-s]` |
| `/nick` |  | Sets or clears a custom nickname | `/nick &lt;name\|off&gt;` |
| `/npc` | `/npcs` | Place and edit NPCs that run a command when clicked | `/npc &lt;create\|name\|skin\|command\|runas\|look\|move\|tp\|info\|list\|remove&gt;` |
| `/orders` | `/order`, `/buyorders` | Buy orders - ask for items at your price, or fill other players' orders | `/orders [create\|mine]` |
| `/particles` |  | Toggles a cosmetic particle trail | `/particles &lt;trail\|off\|list&gt;` |
| `/pay` |  | Pays another online player | `/pay &lt;player&gt; &lt;amount&gt;` |
| `/pets` | `/pet` | Your pets; staff can give pets | `/pets [give &lt;player&gt; &lt;type&gt; [level]\|egg &lt;player&gt; &lt;rarity&gt; [amount]]` |
| `/ping` |  | Shows your ping, or someone else's | `/ping [player]` |
| `/playtime` |  | Shows total time played | `/playtime [player]` |
| `/prestige` |  | Shows your prestige buffs, or resets your level for a bigger buff | `/prestige [confirm]` |
| `/punish` |  | Opens the punish menu with ready-made offenses | `/punish &lt;player&gt;` |
| `/pv` | `/playervault` | Opens your portable vault | `/pv` |
| `/r` | `/reply` | Replies to the last person who messaged you | `/r &lt;message&gt;` |
| `/ranks` | `/rank` | Lists ranks and edits their permissions (ranks.yml) | `/ranks &lt;list\|info\|perm\|check\|reload&gt;` |
| `/rankup` |  | Spends credits to buy the next rank (or renew monthly KISHIN) | `/rankup [confirm]` |
| `/repair` |  | Repairs the item in your hand | `/repair` |
| `/report` |  | Reports a player to staff | `/report &lt;player&gt; &lt;reason&gt;` |
| `/reports` |  | Opens the report queue | `/reports` |
| `/rules` |  | Shows a link to the server rules | `/rules` |
| `/seen` |  | Shows when a player was last online | `/seen &lt;player&gt;` |
| `/sell` |  | Sells the item in your hand, or every sellable item you carry | `/sell &lt;hand\|all&gt;` |
| `/sellwand` |  | Gives sell wands (staff/console) | `/sellwand give &lt;player&gt; [uses] [multiplier]` |
| `/sethome` |  | Sets a home at your current location | `/sethome [name]` |
| `/setrank` |  | Sets a player's rank | `/setrank &lt;player&gt; &lt;rank&gt; [days]` |
| `/settings` |  | Opens player settings menu | `/settings` |
| `/shop` |  | Opens the shop - pick a category, left-click to buy, right-click to sell | `/shop [reload]` |
| `/skills` | `/skill`, `/sk` | Your skills, levels and perks | `/skills` |
| `/spawn` |  | Teleports you to spawn | `/spawn` |
| `/staff` | `/staffmode`, `/mod` | Toggles staff mode | `/staff` |
| `/staffchat` | `/sc`, `/a` | Talk in staff chat, or toggle it | `/sc [message]` |
| `/stats` |  | Shows combat/progression stats | `/stats [player]` |
| `/tags` | `/tag`, `/chattags` | Pick the chat tag you show off | `/tags` |
| `/tp` | `/teleport` | Staff teleport | `/tp &lt;player&gt; [player]` |
| `/tpa` |  | Requests to teleport to a player | `/tpa &lt;player&gt;` |
| `/tpaccept` | `/tpyes` | Accepts a pending teleport request | `/tpaccept` |
| `/tpahere` |  | Requests that a player teleport to you | `/tpahere &lt;player&gt;` |
| `/tpatoggle` |  | Toggles whether you can receive teleport requests | `/tpatoggle` |
| `/tpdeny` | `/tpno` | Denies a pending teleport request | `/tpdeny` |
| `/tphere` | `/s` | Brings a player to you | `/tphere &lt;player&gt;` |
| `/trade` |  | Trade safely with another player | `/trade &lt;player&gt;` |
| `/tutorial` |  | Shows your tutorial step; /tutorial skip leaves it | `/tutorial [skip]` |
| `/unban` | `/pardon` | Lifts a ban | `/unban &lt;player&gt; [reason]` |
| `/unignore` |  | Reverses /ignore | `/unignore &lt;player&gt;` |
| `/unmute` |  | Lifts a mute | `/unmute &lt;player&gt; [reason]` |
| `/vanish` | `/invis` | Hides you from players | `/vanish` |
| `/vault` |  | Opens your bigger portable vault | `/vault` |
| `/warn` |  | Warns a player (logged to their history) | `/warn &lt;player&gt; &lt;reason&gt; [-s]` |
| `/website` |  | Shows a link to the website | `/website` |
| `/workbench` |  | Opens a crafting table from anywhere | `/workbench` |
| `/world` | `/worlds`, `/kworld` | Staff world tool - list, create, load and teleport between worlds | `/world [name\|create\|load\|setspawn\|arenarules\|forget]` |
