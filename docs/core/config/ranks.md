# Ranks

`plugins/Kishin/ranks.yml` - The rank ladder, prefixes, permissions and /rankup prices.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `ranks.yml` (178 lines)

```yaml
# ============================================================================
# Ranks - Kishin's built-in permission system. No LuckPerms (or any other
# permissions plugin) is needed: every rank below can hold ANY permission node,
# Kishin's own and those of other plugins (e.g. "essentials.home",
# "worldedit.*").
#
# - Order = ladder, lowest first. Each rank inherits every permission of the
#   ranks above it in this file (set "inherit: false" to start fresh).
# - "-some.node" takes a node away that a lower rank gave.
# - "plugin.*" gives every registered node under "plugin."; "*" gives every
#   node on the server (like op, without being op).
# - Names: letters, digits and _ only. Players are stored by name, so renaming
#   a rank that players already have moves them to default-rank.
# - staff: true marks staff ranks (staff lists, staff chat counts, can't /rankup).
# - rankup: makes a rank buyable with /rankup (credits, 100 = $1) from the
#   player rank below it. duration-days > 0 makes it a subscription that drops
#   back to expires-to (default: the rank below) when it runs out.
#
# Change ranks in-game without editing this file:
#   /ranks list | info <rank> | reload
#   /ranks perm add|remove <rank> <node>
# ============================================================================

default-rank: YUREI

ranks:
  YUREI:
    display-name: "Yurei"
    prefix: "<shadow:#000000FF><#B8C4D6><b>YUREI</b></shadow> <white>"
    permissions:
      - "kishin.spawn"
      - "kishin.rules"
      - "kishin.discord"
      - "kishin.website"
      - "kishin.list"
      - "kishin.ping"
      - "kishin.msg"
      - "kishin.msg.reply"
      - "kishin.msg.toggle"
      - "kishin.ignore"
      - "kishin.tpa"
      - "kishin.tpa.accept"
      - "kishin.tpa.deny"
      - "kishin.tpa.toggle"
      - "kishin.balance"
      - "kishin.pay"
      - "kishin.credits"
      - "kishin.sell"
      - "kishin.shop"
      - "kishin.rankup"
      - "kishin.stats"
      - "kishin.level"
      - "kishin.playtime"
      - "kishin.seen"
      - "kishin.friend"
      - "kishin.home"
      - "kishin.class"
      - "kishin.report"
      - "kishin.auction"
      - "kishin.orders"
      - "kishin.daily"
      - "kishin.challenges"
      - "kishin.leaderboard"
      - "kishin.battlepass"
      - "kishin.crates"

  KAPPA:
    display-name: "Kappa"
    prefix: "<shadow:#000000FF><#2FBF9B><b>KAPPA</b></shadow> <white>"
    rankup:
      price: 1000
    permissions:
      - "kishin.tpa.here"
      - "kishin.back"
      - "kishin.hat"
      - "kishin.craft"
      - "kishin.chat.color"
      - "kishin.settings.friends"
      - "kishin.settings.ignoring"

  NAMAHAGE:
    display-name: "Namahage"
    prefix: "<shadow:#000000FF><#E8590C><b>NAMAHAGE</b></shadow> <white>"
    rankup:
      price: 2500
    permissions:
      - "kishin.workbench"
      - "kishin.enderchest"
      - "kishin.repair"
      - "kishin.kit"
      - "kishin.playervault"
      - "kishin.settings.fly"

  KITSUNE:
    display-name: "Kitsune"
    prefix: "<shadow:#000000FF><#FFA94D><b>KITSUNE</b></shadow> <white>"
    rankup:
      price: 4500
    permissions:
      - "kishin.nick"
      - "kishin.particles"
      - "kishin.afk.custom"
      - "kishin.feed"
      - "kishin.heal"
      - "kishin.queue.priority"

  KISHIN:
    display-name: "Kishin"
    prefix: "<shadow:#000000FF><#D62839><b>KISHIN</b></shadow> <white>"
    rankup:
      price: 2000
      duration-days: 30
      expires-to: KITSUNE
      warning-days: 3
    permissions:
      - "kishin.fly.hub"
      - "kishin.cooldown.reduced"
      - "kishin.prestige"
      - "kishin.cosmetics.exclusive"
      - "kishin.vault"

  TRAINEE:
    display-name: "Trainee"
    prefix: "<shadow:#000000FF><#74C0FC><b>TRAINEE</b></shadow> <white>"
    staff: true
    permissions:
      - "kishin.staff.vanish"
      - "kishin.staff.chat"
      - "kishin.staff.freeze"
      - "kishin.staff.report.list"
      - "kishin.staff.mute"
      - "kishin.staff.inspect"
      - "kishin.staff.mode"
      - "kishin.island.chatspy"

  MODERATOR:
    display-name: "Moderator"
    prefix: "<shadow:#000000FF><#9775FA><b>MODERATOR</b></shadow> <white>"
    staff: true
    permissions:
      - "kishin.staff.market"
      - "kishin.staff.kick"
      - "kishin.staff.ban"
      - "kishin.staff.warn"
      - "kishin.staff.history"
      - "kishin.staff.tp"
      - "kishin.staff.gamemode.survival"
      - "kishin.staff.gamemode.spectator"
      - "kishin.staff.broadcast"

  ADMIN:
    display-name: "Admin"
    prefix: "<shadow:#000000FF><#FF3B5C><b>ADMIN</b></shadow> <white>"
    staff: true
    permissions:
      - "kishin.staff.battlepass"
      - "kishin.staff.crates"
      - "kishin.staff.npc"
      - "kishin.staff.gamemode.creative"
      - "kishin.staff.give"
      - "kishin.staff.setrank"
      - "kishin.staff.economy.edit"
      - "kishin.island.admin"
      - "kishin.staff.maintenance"
      - "kishin.staff.reload"
      - "kishin.staff.hologram"
      - "kishin.island.reset.bypass"
      - "kishin.island.limits.bypass"
      - "kishin.staff.ranks"

  OWNER:
    display-name: "Owner"
    prefix: "<shadow:#000000FF><dark_red><b>OWNER</b></shadow> <white>"
    staff: true
    permissions:
      - "kishin.staff.economy.reset"
      - "kishin.staff.plugin.manage"
      - "kishin.staff.bypass.all"
```
