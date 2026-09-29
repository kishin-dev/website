# Cosmetics

`plugins/Kishin/cosmetics.yml` - Chat tags players can earn.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `cosmetics.yml` (36 lines)

```yaml
# ============================================================================
#  Cosmetics  -  chat tags players can earn (battlepass, crates, events)
# ============================================================================
#  A tag shows after the player's name in chat once they equip it with /tags.
#  Give one as a reward with:  cosmetics: ["tag:<id>"]
#  Leaderboard tags (#1 fisher etc.) still win over these while a player holds them.
#
#  Particle trails are rewards too - cosmetics: ["trail:SAKURA"] - see /particles.
#  Reward-only trails: SAKURA, SOUL_FLAME, STORM, GLOW
#  Apply changes with /tags reload.
# ============================================================================
tags:
  wanderer:
    display: "<gray>[<white>Wanderer</white>]</gray>"
    description: "Walked the first steps of the path."
  oni:
    display: "<dark_gray>[</dark_gray><gradient:#FF4D4D:#B30000><b>ONI</b></gradient><dark_gray>]</dark_gray>"
    description: "Fearsome as a mountain demon."
  kitsune:
    display: "<dark_gray>[</dark_gray><gradient:#FFB347:#FF7B00>Kitsune</gradient><dark_gray>]</dark_gray>"
    description: "Clever, quick and a little bit wild."
  yurei:
    display: "<dark_gray>[</dark_gray><gradient:#E0F7FF:#8FD3FE>Yurei</gradient><dark_gray>]</dark_gray>"
    description: "Seen only in the corner of your eye."
  tengu:
    display: "<dark_gray>[</dark_gray><gradient:#9BE564:#2E8B57><b>TENGU</b></gradient><dark_gray>]</dark_gray>"
    description: "Master of the mountain winds."
  ronin:
    display: "<dark_gray>[</dark_gray><gradient:#C0C0C0:#6E6E6E>Ronin</gradient><dark_gray>]</dark_gray>"
    description: "Serves no master but the grind."
  fujin:
    display: "<dark_gray>[</dark_gray><gradient:#7CD6FF:#C77DFF><b>FUJIN</b></gradient><dark_gray>]</dark_gray>"
    description: "Carries the storm on their back."
  shogun:
    display: "<dark_gray>[</dark_gray><gradient:#FFD700:#FF6B4A><b>SHOGUN</b></gradient><dark_gray>]</dark_gray>"
    description: "Finished the whole battlepass. Legend."
```
