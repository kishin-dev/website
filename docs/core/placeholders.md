# Placeholders

Used in the scoreboard, tab list and holograms. They're MiniMessage tags - write `<balance>`, not `%balance%`.

## Player

| Tag | Value |
|---|---|
| `<player>` / `<displayname>` | name / display name |
| `<rank>` | rank prefix (coloured) |
| `<rank_name>` / `<rank_display>` | rank id / rank display name |
| `<balance>` `<gems>` `<credits>` | currencies |
| `<keys>` | total crate keys |
| `<level>` `<prestige>` `<prestige_stars>` | level and prestige |
| `<kills>` `<deaths>` `<kd>` `<killstreak>` `<best_killstreak>` | combat stats |
| `<ping>` + `<ping_color>..</ping_color>` | ping, and a colour by ping |

## Island

| Tag | Value |
|---|---|
| `<island_name>` `<island_level>` `<island_worth>` `<island_bank>` | island stats |
| `<island_role>` + `<island_role_color>..</island_role_color>` | your role |
| `<island_members>` `<island_member_limit>` | members |

## Server & features

| Tag | Value |
|---|---|
| `<online>` `<max_players>` `<staff_online>` `<world>` | server |
| `<time>` `<date>` | clock (`time-zone`, `time-format`, `date-format` in scoreboard.yml) |
| `<tps>` + `<tps_color>..</tps_color>` | server TPS |
| `<pet>` `<pet_level>` `<pets>` `<pet_slots>` | first summoned pet, its level, pets owned, summon slots |
| `<event>` `<event_time>` | running server event and time left |
| `<boss>` `<boss_next>` | boss status, minutes to the next boss |

## PlaceholderAPI

With PlaceholderAPI installed, any `%placeholder%` works too, for example `%server_tps_1%`. Kishin also provides leaderboard placeholders for holograms, such as `%kishin_top_island_worth_1_name%` and `%kishin_top_island_worth_1_value%`.
