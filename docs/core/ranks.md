# Ranks & permissions

Kishin has a built-in permission system - **no LuckPerms or other permissions plugin is needed**. Ranks live in [ranks.yml](?p=core&page=config-ranks) and can hold any permission node, Kishin's own and other plugins' (for example `essentials.home` or `worldedit.*`).

## The ladder

- The order in `ranks.yml` is the ladder, lowest first.
- Every rank **inherits** the permissions of the ranks below it (set `inherit: false` to start fresh).
- `-some.node` removes a node a lower rank gave.
- `plugin.*` gives every registered node under `plugin.`; `*` gives every node (like op, without being op).
- `staff: true` marks staff ranks (staff lists, staff chat, they can't `/rankup`).

The default ladder is **Yurei → Kappa → Namahage → Kitsune → Kishin**, then the staff ranks **Trainee → Moderator → Admin → Owner**.

## Buying ranks

A rank with a `rankup` section can be bought with credits - one step at a time with `/rankup`, or skipping ahead in [/buy](?p=core&page=store).

```yaml
KISHIN:
  display-name: "Kishin"
  prefix: "<#D62839><b>KISHIN</b> <white>"
  rankup:
    price: 2000
    duration-days: 30        # a monthly subscription
    expires-to: KITSUNE
    warning-days: 3
  permissions:
    - "kishin.fly.hub"
```

## Commands

| Command | |
|---|---|
| `/ranks list` | every rank |
| `/ranks info <rank>` | a rank's permissions |
| `/ranks perm add\|remove <rank> <node>` | edit permissions in game |
| `/ranks check <rank> <node>` | does a rank grant a node? |
| `/ranks reload` | re-read ranks.yml |
| `/setrank <player> <rank> [days]` | set a player's rank |

See [Permissions](?p=core&page=permissions) for every Kishin node and which rank gets it.
