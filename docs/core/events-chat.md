# Events, chat games & announcements

## Server events

Every `interval-minutes` a random event starts (weighted), with a boss bar. Configured in [events.yml](?p=core&page=config-events).

| Event | Effect |
|---|---|
| `GOLD_RUSH` | generators work faster |
| `DOUBLE_XP` | bonus skill XP |
| `LUCKY_DROPS` | double drop and double catch chance |
| `METEOR_SHOWER` | meteors crash onto islands with loot |
| `TREASURE_HUNT` | find the hidden chest from a hint |

Staff: `/events start <id>`, `/events stop`, and `/events addspot <hint>` to add a treasure hunt spot where you stand.

## Chat games

Every `interval-seconds` a random game pops up in chat; the first correct answer wins money, gems or a lootbox for harder games. Winning rounds in a row builds a **win streak**. There are ten games, each can be turned off. See [chatgames.yml](?p=core&page=config-chatgames).

| Command | |
|---|---|
| `/chatgames stats [player]` | wins, best streak, fastest answer |
| `/chatgames top [wins\|streak\|fastest]` | leaderboards |
| `/chatgames toggle` | hide the games |
| `/chatgames start [game]`, `/chatgames stop` | staff |

> **Tip:** games only start with at least `min-players` online. Use `/chatgames start` to test on an empty server.

## Announcements

Every `interval-seconds` the next message (or a random one) is posted in chat, designed with full-width gradient bars and centred lines. Players hide them with `/announcements toggle`; staff can post one now with `/announcements send <id>`. See [announcements.yml](?p=core&page=config-announcements).

Chat designs in these files understand:

| Token | |
|---|---|
| `{bar}` | a full-width gradient line |
| `<center>` | at the start of a line: centre it in chat |
| `{from}` `{to}` | the design's two colours |
