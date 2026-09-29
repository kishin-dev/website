# Pets

`plugins/Kishin/pets.yml` - Pet types, rarities, summon slots, upgrades, merging, disposal, eggs and the hatching animation.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `pets.yml` (500 lines)

```yaml
# ============================================================================
#  KISHIN PETS  (/pets)
# ============================================================================
#  SLOTS    Pets in your slots are SUMMONED - they float next to you and their
#           perks work. Several pets can be out at once; your rank decides how
#           many (slots: below). Everything else waits in your STORAGE.
#  STORAGE  Every pet you own (/pets -> Pet Storage), filter by rarity, sort.
#  UPGRADE  Pets level up with in-game XP LEVELS + MONEY (per rarity below).
#           Perks grow with the level:  value = base + per-level * (level - 1)
#           Rarer pets start weaker than you'd think but grow much further.
#  MERGE    2 pets of the same rarity -> 1 random pet of the next rarity
#           (merge-into), picked by the pets' merge-weight.
#  DISPOSE  Turn pets into in-game XP points, one by one or a whole rarity at
#           once (locked and summoned pets are skipped).
#  EGGS     /pets egg <player> <rarity> [amount] - crates: pet-eggs: ["RARE:1"]
#           /pets give <player> <type> [level]    - a tradeable pet item
#  Perk keys:  double-drop:mining / farming / foraging    double-catch
#              skill-xp:<skill> / skill-xp:all            combat-damage
#  Heads: texture = a textures.minecraft.net hash, URL or base64 "Value".
# ============================================================================

# Summon slots by rank (ranks.yml names). Staff ranks without their own line
# use "staff", unknown ranks "default". A permission kishin.pets.slots.<n> gives
# <n> slots if that's more (max 7).
slots:
  default: 1
  YUREI: 1
  KAPPA: 2
  NAMAHAGE: 3
  KITSUNE: 4
  KISHIN: 5
  staff: 5

storage-limit: 250       # pets a player can own in storage
merge-level: 1           # level of the pet you get from merging
show-pet: true           # summoned pets float next to their owner
size: 0.5
spacing: 0.9             # distance between summoned pets
# Optional: pets also level up from skill XP (0 = off, only upgrading).
xp-share: 0
xp-base: 200
xp-exponent: 1.4

# Rarities, weakest first.
#  upgrade: XP levels = levels + levels-per-level * (level - 1)
#           money     = money * money-growth ^ (level - 1)
#  dispose-xp (+ dispose-xp-per-level * (level - 1)) = XP points when disposed
#  merge-into / merge-cost: merging 2 pets of this rarity
rarities:
  common:
    name: "<#B8C4D6>✦ COMMON"
    color: "#B8C4D6"
    max-level: 20
    upgrade: {levels: 1, levels-per-level: 0.25, money: 2500, money-growth: 1.10}
    dispose-xp: 25
    dispose-xp-per-level: 5
    merge-into: uncommon
    merge-cost: 5000
  uncommon:
    name: "<#43E97B>✦ UNCOMMON"
    color: "#43E97B"
    max-level: 30
    upgrade: {levels: 2, levels-per-level: 0.3, money: 10000, money-growth: 1.09}
    dispose-xp: 70
    dispose-xp-per-level: 10
    merge-into: rare
    merge-cost: 25000
  rare:
    name: "<#4FACFE>✦ RARE"
    color: "#4FACFE"
    max-level: 40
    upgrade: {levels: 3, levels-per-level: 0.35, money: 40000, money-growth: 1.08}
    dispose-xp: 180
    dispose-xp-per-level: 18
    merge-into: epic
    merge-cost: 100000
  epic:
    name: "<#C77DFF>✦ EPIC"
    color: "#C77DFF"
    max-level: 50
    upgrade: {levels: 4, levels-per-level: 0.4, money: 150000, money-growth: 1.07}
    dispose-xp: 450
    dispose-xp-per-level: 35
    merge-into: legendary
    merge-cost: 500000
  legendary:
    name: "<#FFB547>✦ LEGENDARY"
    color: "#FFB547"
    max-level: 60
    upgrade: {levels: 5, levels-per-level: 0.5, money: 500000, money-growth: 1.06}
    dispose-xp: 1200
    dispose-xp-per-level: 70
    merge-into: ""

# Pets. merge-weight = chance to come out of a merge into this rarity.
pets:
  # ---------------------------------------------------------------- COMMON
  miner:
    name: "<#B8C4D6>Diamond Golem"
    rarity: common
    texture: "122cc6ea387fad5f25cef257a831ea8d97e0dfa2c34541fd8c78302038ad1fb3"
    skill: mining
    description: ["<gray>A little golem made of ore."]
    perks:
      - {key: "double-drop:mining", base: 2, per-level: 0.25, text: "+{value}% double ore drops"}
      - {key: "skill-xp:mining", base: 3, per-level: 0.25, text: "+{value}% Mining XP"}
  farmer:
    name: "<#B8C4D6>Scarecrow"
    rarity: common
    texture: "cac8fd4e230968fe3c1a873bae61491230bf56d44b05ff771a1e9c93ad34fa98"
    skill: farming
    description: ["<gray>Keeps the crows off your crops."]
    perks:
      - {key: "double-drop:farming", base: 2, per-level: 0.25, text: "+{value}% double crops"}
      - {key: "skill-xp:farming", base: 3, per-level: 0.25, text: "+{value}% Farming XP"}
  lumberjack:
    name: "<#B8C4D6>Kodama"
    rarity: common
    texture: "b0d5ab21d67eead163317c9a5dc51d409d85df2527667a424a2aff6738b6fc97"
    skill: foraging
    description: ["<gray>A tiny tree spirit."]
    perks:
      - {key: "double-drop:foraging", base: 2, per-level: 0.25, text: "+{value}% double logs"}
      - {key: "skill-xp:foraging", base: 3, per-level: 0.25, text: "+{value}% Foraging XP"}
  fisher:
    name: "<#B8C4D6>Puffer"
    rarity: common
    texture: "2dd4b96726cfd36015af3778336c5226ae12fe80ca8afeee763f4542a883c282"
    skill: fishing
    description: ["<gray>Puffs up when a fish bites."]
    perks:
      - {key: "double-catch", base: 2, per-level: 0.25, text: "+{value}% double catches"}
      - {key: "skill-xp:fishing", base: 3, per-level: 0.25, text: "+{value}% Fishing XP"}
  warrior:
    name: "<#B8C4D6>Iron Knight"
    rarity: common
    texture: "4fd85a968334ffa874d63e8068c4d1835e29b8da17cf58d8de0a71338ecbf60"
    skill: combat
    description: ["<gray>A small but loyal guard."]
    perks:
      - {key: "combat-damage", base: 2, per-level: 0.25, text: "+{value}% damage to mobs"}
      - {key: "skill-xp:combat", base: 3, per-level: 0.25, text: "+{value}% Combat XP"}
  sage:
    name: "<#B8C4D6>Old Sage"
    rarity: common
    texture: "54bc274a63b0e0461b1abaebdd72c303ad22d179fd77698454787342f1ff2f6d"
    skill: all
    description: ["<gray>Knows a little about everything."]
    perks:
      - {key: "skill-xp:all", base: 1, per-level: 0.2, text: "+{value}% XP in every skill"}

  # ---------------------------------------------------------------- UNCOMMON
  kappa:
    name: "<#43E97B>Kappa"
    rarity: uncommon
    texture: "4c63d5fef8e0e4cc10b4a6c08ba19ce9637539b2843b0d9baa68d0ceb4709633"
    skill: fishing
    description: ["<gray>A river imp. Loves cucumbers", "<gray>and dragging fish out of rivers."]
    perks:
      - {key: "double-catch", base: 2, per-level: 0.35, text: "+{value}% double catches"}
      - {key: "skill-xp:fishing", base: 3, per-level: 0.4, text: "+{value}% Fishing XP"}
      - {key: "double-drop:farming", base: 1, per-level: 0.15, text: "+{value}% double crops"}
  tanuki:
    name: "<#43E97B>Tanuki"
    rarity: uncommon
    texture: "8d1b10ff04ec12b9e578dbb6113b5fcf67275fb49c36762148ea0dd370567b5b"
    skill: farming
    description: ["<gray>A cheeky shapeshifter that", "<gray>always finds a bit extra."]
    perks:
      - {key: "double-drop:farming", base: 2, per-level: 0.35, text: "+{value}% double crops"}
      - {key: "double-drop:foraging", base: 2, per-level: 0.35, text: "+{value}% double logs"}
  yurei:
    name: "<#43E97B>Yurei"
    rarity: uncommon
    texture: "a7f80aa0e29e398a521e1aecac1f9b651e3cecb5f004dce85f4ca2e8279074bd"
    skill: all
    description: ["<gray>A restless ghost that", "<gray>whispers old knowledge."]
    perks:
      - {key: "skill-xp:all", base: 1, per-level: 0.3, text: "+{value}% XP in every skill"}
      - {key: "combat-damage", base: 1, per-level: 0.2, text: "+{value}% damage to mobs"}

  # ---------------------------------------------------------------- RARE
  komainu:
    name: "<#4FACFE>Komainu"
    rarity: rare
    texture: "43703adac82e3582f171c85110ac94bf8732b8a6bf4bc819eaa7f25c0316b54d"
    skill: combat
    description: ["<gray>A lion-dog that guards shrines."]
    perks:
      - {key: "combat-damage", base: 2, per-level: 0.45, text: "+{value}% damage to mobs"}
      - {key: "skill-xp:combat", base: 2, per-level: 0.45, text: "+{value}% Combat XP"}
      - {key: "double-drop:mining", base: 1, per-level: 0.25, text: "+{value}% double ore drops"}
  kitsune:
    name: "<#4FACFE>Kitsune"
    rarity: rare
    texture: "4e8067b78c005894d76020d369a014e57ed1f0de0cd612bf3f0e5e98434d272b"
    skill: all
    description: ["<gray>A clever fox spirit.", "<gray>Grows a new tail every century."]
    perks:
      - {key: "skill-xp:all", base: 1, per-level: 0.4, text: "+{value}% XP in every skill"}
      - {key: "double-drop:farming", base: 1, per-level: 0.3, text: "+{value}% double crops"}
      - {key: "double-catch", base: 1, per-level: 0.3, text: "+{value}% double catches"}
  tengu:
    name: "<#4FACFE>Tengu"
    rarity: rare
    texture: "3260fea94645d1b63e40e5f4eadfe52c6b213ac6d0a2336c61b54ed7c6a7"
    skill: foraging
    description: ["<gray>A mountain crow-demon", "<gray>that rules the forests."]
    perks:
      - {key: "double-drop:foraging", base: 2, per-level: 0.45, text: "+{value}% double logs"}
      - {key: "skill-xp:foraging", base: 2, per-level: 0.45, text: "+{value}% Foraging XP"}
      - {key: "combat-damage", base: 1, per-level: 0.25, text: "+{value}% damage to mobs"}

  # ---------------------------------------------------------------- EPIC
  oni:
    name: "<#C77DFF>Oni"
    rarity: epic
    texture: "266e570a648e19db58f5e0e7a7667f599b1871f286b36572c4b7737491c9b060"
    skill: combat
    description: ["<gray>A red ogre with an iron club.", "<gray>Hits hard, digs harder."]
    perks:
      - {key: "combat-damage", base: 2, per-level: 0.6, text: "+{value}% damage to mobs"}
      - {key: "double-drop:mining", base: 1, per-level: 0.45, text: "+{value}% double ore drops"}
      - {key: "skill-xp:combat", base: 2, per-level: 0.5, text: "+{value}% Combat XP"}
  raijin:
    name: "<#C77DFF>Raijin"
    rarity: epic
    texture: "7d9c7851679b53db79c29f9512115063f765518cb702b876affed63943bda829"
    skill: mining
    description: ["<gray>The thunder god's drum", "<gray>shakes ore loose."]
    perks:
      - {key: "double-drop:mining", base: 2, per-level: 0.6, text: "+{value}% double ore drops"}
      - {key: "skill-xp:mining", base: 2, per-level: 0.6, text: "+{value}% Mining XP"}
      - {key: "skill-xp:all", base: 1, per-level: 0.2, text: "+{value}% XP in every skill"}

  # ---------------------------------------------------------------- LEGENDARY
  ryujin:
    name: "<gradient:#FFB547:#4FACFE>Ryujin</gradient>"
    rarity: legendary
    texture: "d8da68d4d692ce36e9d2a151f6d3fa9c8a2a533169647a818d8c643d7030ed"
    skill: all
    description: ["<gray>The dragon king of the sea.", "<gray>Tides and harvests obey him."]
    perks:
      - {key: "double-catch", base: 2, per-level: 0.7, text: "+{value}% double catches"}
      - {key: "double-drop:farming", base: 2, per-level: 0.7, text: "+{value}% double crops"}
      - {key: "skill-xp:all", base: 1, per-level: 0.5, text: "+{value}% XP in every skill"}
  kishin:
    name: "<gradient:#FFB547:#D62839>Kishin</gradient>"
    rarity: legendary
    texture: "e6ff8158f218f7683262443db5ad438d19d9bbc5d45d6c45ce543c8a473aadff"
    skill: all
    description: ["<gray>The demon god this realm is named after."]
    perks:
      - {key: "combat-damage", base: 2, per-level: 0.7, text: "+{value}% damage to mobs"}
      - {key: "skill-xp:all", base: 1, per-level: 0.5, text: "+{value}% XP in every skill"}
      - {key: "double-drop:mining", base: 1, per-level: 0.4, text: "+{value}% double ore drops"}
      - {key: "double-drop:foraging", base: 1, per-level: 0.4, text: "+{value}% double logs"}

texts:
  added: "<#43E97B>✔ {name} <gray>joined your pets! Open <white>/pets</white> to summon it."
  detail-dispose-confirm-name: "<#FF6B6B><bold>Click again to confirm!"
  detail-dispose-lore: "<gray>Destroys the pet for <#7CFF7C>{xp} XP<gray>."
  detail-dispose-name: "<#D62839><bold>Dispose"
  detail-gone: "<#FF6B6B>This pet is gone."
  detail-lock-lore: "<gray>Locked pets can't be merged,\n<gray>disposed or taken out.\n\n<#D62839>▶ <gray>Click to toggle"
  detail-lock-name: "<#D62839><bold>Lock"
  detail-locked-deny: "Unlock this pet first."
  detail-putaway-lore: "<gray>Frees up the summon slot."
  detail-putaway-name: "<#D62839><bold>Put Away"
  detail-summon-lore: "<gray>Slots used: <white>{used}<gray>/{slots}"
  detail-summon-name: "<#43E97B><bold>Summon"
  detail-take-lore: "<gray>Turns the pet into an item you can\n<gray>trade or sell. Right-click it to add it back."
  detail-take-name: "<#D62839><bold>Take Out"
  detail-title: "<dark_gray>✦ Pet"
  detail-unlock-name: "<#FFD166><bold>🔒 Locked"
  detail-upgrade-click: "<#D62839>▶ <gray>Click to upgrade\n<#D62839>▶ <gray>Shift-click to upgrade as much as you can"
  detail-upgrade-cost: "<gray>Cost:"
  detail-upgrade-cost-money: " {mark} <#FFD166>${money}"
  detail-upgrade-cost-xp: " {mark} <#7CFF7C>{levels} XP levels <dark_gray>(you have {have})"
  detail-upgrade-levels: "<gray>Level <white>{level} <dark_gray>» <white>{next}"
  detail-upgrade-max-lore: "<gray>This pet can't grow any further."
  detail-upgrade-max-name: "<gold><bold>✦ MAX LEVEL ✦"
  detail-upgrade-name: "<#D62839><bold>✦ Upgrade"
  detail-upgrade-perk: "<gray>• <white>{now} <dark_gray>» <#43E97B>{next}"
  dispose-info-lore: "<gray>Disposed pets turn into <#7CFF7C>XP<gray>.\n<gray>Rarer and higher level pets give more.\n\n<dark_gray>Bulk disposal skips locked and summoned pets."
  dispose-info-name: "<#D62839><bold>✦ Disposal"
  dispose-rarity-confirm: "<#FF6B6B><bold>Click again to dispose {count} pets!"
  dispose-rarity-lore: "<gray>Can be disposed: <white>{count}\n<gray>You'd get: <#7CFF7C>{xp} XP\n\n<#D62839>▶ <gray>Click to dispose them all"
  dispose-rarity-name: "{rarity} <gray>pets"
  dispose-single-lore: "<gray>Opens your storage - click a pet\n<gray>twice to dispose it."
  dispose-single-name: "<#D62839><bold>✦ Pick pets one by one"
  dispose-title: "<dark_gray>✦ Dispose Pets"
  disposed: "<#43E97B>✔ Disposed {name} <gray>for <#7CFF7C>{xp} XP<gray>."
  disposed-bulk: "<#43E97B>✔ Disposed {count} {rarity} <#43E97B>pets for <#7CFF7C>{xp} XP<#43E97B>."
  egg-busy: "<#FF6B6B>You're already hatching an egg!"
  egg-given: "<#43E97B>✔ Gave {player} {amount}x {egg}<#43E97B>."
  egg-level: "<gray>Hatches at level <white>{level}"
  egg-pool-header: "<gray>Could hatch into:"
  egg-pool-line: " <dark_gray>• {pet} <dark_gray>- <white>{chance}%"
  egg-unknown: "<#FF6B6B>This egg no longer exists."
  egg-use: "<#43E97B>▶ Right-click to hatch it!"
  filter-all: "<white>All rarities"
  filter-click: "<gray>Click to change"
  filter-name: "<#D62839><bold>✦ Filter"
  given: "<#43E97B>✔ Gave {player} a pet."
  gone: "<#FF6B6B>That pet is gone."
  hatch-label: "{egg}\n<gray>Hatching... {bar}"
  hatch-reveal-label: "{rarity}\n{pet} <gray>[Lv {level}]"
  hatch-subtitle: "{pet} <gray>[Lv {level}]"
  hatch-title: "<{color}><bold>✦ HATCHED! ✦"
  hatched: "<#43E97B>✔ {pet} <gray>[Lv {level}] hatched from your {egg}<gray>! Open <white>/pets</white> to summon it."
  item-name: "{name} <gray>[Lv {level}]"
  item-use: "<#43E97B>▶ Right-click to add it to /pets"
  level-up: "<#43E97B>✦ {name} <gray>reached level <white>{level}</white>!"
  menu-bonus-name: "<#D62839><bold>✦ Active Bonuses"
  menu-bonus-none: "<gray>No pets summoned yet."
  menu-bonus-pet: "{name} <gray>[Lv {level}]"
  menu-click-manage: "<#D62839>▶ <gray>Click to manage"
  menu-dispose-lore: "<gray>Turn pets you don't need into <#7CFF7C>XP<gray>,\n<gray>one by one or a whole rarity at once.\n\n<#D62839>▶ <gray>Click to open"
  menu-dispose-name: "<#D62839><bold>✦ Dispose Pets"
  menu-free-lore: "<gray>Click to summon a pet\n<gray>from your storage."
  menu-free-name: "<#43E97B><bold>Empty Slot"
  menu-info-lore: "<gray>Summoned: <white>{active}<gray>/{slots}\n<gray>Storage: <white>{owned}<gray>/{max}\n\n<gray>Pets in the slots below are summoned\n<gray>and their perks are active.\n<gray>Every rank unlocks one more slot."
  menu-info-name: "<#D62839><bold>✦ Your Pets"
  menu-level: "<gray>Level <white>{level}<gray>/{max}"
  menu-locked: "<#FFD166>🔒 Locked <dark_gray>(can't be merged or disposed)"
  menu-locked-lore: "<gray>Unlocks with {rank}<gray>rank.\n<dark_gray>/store"
  menu-locked-lore-perm: "<gray>Unlock more slots with a higher rank."
  menu-locked-name: "<#FF6B6B><bold>🔒 Locked Slot"
  menu-merge-lore: "<gray>Merge <white>2 pets</white> of the same rarity\n<gray>into <white>1 random pet</white> of the next rarity.\n\n<#D62839>▶ <gray>Click to open"
  menu-merge-name: "<#D62839><bold>✦ Merge Pets"
  menu-name: "{name} <gray>[Lv {level}]"
  menu-shift-putaway: "<#D62839>▶ <gray>Shift-click to put away"
  menu-storage-lore: "<gray>Every pet you own: <white>{owned}<gray>/{max}\n<gray>Filter by rarity, summon, upgrade.\n\n<#D62839>▶ <gray>Click to open"
  menu-storage-name: "<#D62839><bold>✦ Pet Storage"
  menu-summoned: "<#43E97B>✔ Summoned"
  menu-title: "<dark_gray>✦ Pets"
  merge-change: "<#D62839>▶ <gray>Click to change\n<#D62839>▶ <gray>Right-click to remove"
  merge-confirm-lore: "<gray>Both pets will be <#FF6B6B>destroyed<gray>.\n<#D62839>▶ <gray>Click to merge"
  merge-confirm-name: "<#43E97B><bold>✔ MERGE"
  merge-confirm-off: "<gray><bold>MERGE"
  merge-confirm-off-lore: "<gray>Choose two pets of the same rarity."
  merge-cost: "<gray>Cost: <#FFD166>${money}"
  merge-info-lore: "<gray>Pick <white>2 pets</white> of the same rarity.\n<gray>They fuse into <white>1 random pet</white>\n<gray>of the next rarity, starting at level 1.\n\n<dark_gray>Locked pets can't be merged."
  merge-info-name: "<#D62839><bold>✦ How merging works"
  merge-label: "{egg}\n<gray>Merging... {bar}"
  merge-locked: "<#FF6B6B>Unlock both pets first."
  merge-max: "<#FF6B6B>This rarity can't be merged any higher."
  merge-no-money: "<#FF6B6B>Merging costs <white>${money}</white><#FF6B6B>."
  merge-pick: "<#FF6B6B>Pick two different pets first."
  merge-pick-lore: "<gray>Click to pick from your storage."
  merge-pick-name: "<#D62839><bold>Choose a pet"
  merge-rarity: "<#FF6B6B>Both pets must be the same rarity."
  merge-result-empty: "<gray>Choose two pets first."
  merge-result-into: "<gray>Result: a random {rarity} <gray>pet"
  merge-result-line: " <dark_gray>• {pet} <dark_gray>- <white>{chance}%"
  merge-result-max: "<#FF6B6B>{rarity} <#FF6B6B>pets can't be merged higher."
  merge-result-name: "<#D62839><bold>✦ Result"
  merge-title: "<dark_gray>✦ Merge Pets"
  merged: "<#43E97B>✔ Merged into {pet}<#43E97B>!"
  name-tag: "<gray>[Lv {level}] {name}"
  no-room: "<#FF6B6B>Make room in your inventory first."
  offline: "<#FF6B6B>That player isn't online."
  perk-line: "<gray>• <white>{perk}"
  slots-reduced: "<#FF6B6B>You have fewer pet slots now, so some pets were put away."
  slots-full: "<#FF6B6B>All your pet slots are in use <gray>({used}/{slots})<#FF6B6B>. Put a pet away first or rank up for more slots."
  sort-level: "<white>Level"
  sort-name: "<#D62839><bold>✦ Sort"
  sort-rarity: "<white>Rarity"
  storage-click-pick: "<#D62839>▶ <gray>Click to choose"
  storage-click-summon: "<#D62839>▶ <gray>Click to summon"
  storage-click-view: "<#D62839>▶ <gray>Click to manage"
  storage-dispose-click: "<#D62839>▶ <gray>Click to dispose for <#7CFF7C>{xp} XP"
  storage-dispose-confirm: "<#FF6B6B><bold>Click again to dispose for {xp} XP"
  storage-dispose-locked: "<#FF6B6B>Locked - unlock it first"
  storage-empty-lore: "<gray>Hatch <white>pet eggs</white> from <white>/crates</white>\n<gray>to fill your storage."
  storage-empty-name: "<gray><bold>No pets here"
  storage-full: "<#FF6B6B>Your pet storage is full <gray>({owned}/{max})<#FF6B6B>. Merge or dispose some pets in <white>/pets</white>."
  storage-info-lore: "<gray>Summoned: <white>{active}<gray>/{slots}"
  storage-info-name: "<#D62839><bold>✦ Storage <gray>{owned}/{max}"
  storage-shift-putaway: "<#D62839>▶ <gray>Shift-click to put away"
  storage-shift-summon: "<#D62839>▶ <gray>Shift-click to summon"
  storage-title-dispose: "<dark_gray>✦ Dispose pets"
  storage-title-pick: "<dark_gray>✦ Pick a pet"
  storage-title-summon: "<dark_gray>✦ Pick a pet to summon"
  storage-title-view: "<dark_gray>✦ Pet Storage"
  unknown: "<#FF6B6B>Unknown pet. Pets: {list}"
  unknown-egg: "<#FF6B6B>Unknown egg. Eggs: {list}"
  upgrade-max: "<#FF6B6B>This pet is already max level."
  upgrade-no-money: "<#FF6B6B>You need <white>${money}</white><#FF6B6B>."
  upgrade-no-xp: "<#FF6B6B>You need <white>{levels} XP levels</white> <#FF6B6B>(you have {have})."
  upgraded: "<#43E97B>✔ {name} <gray>is now level <white>{level}</white>!"

# ============================================================================
#  PET EGGS
#  texture: a textures.minecraft.net hash, a full texture URL or a base64 head
#           "Value" (minecraft-heads.com -> "Value"). material: PLAYER_HEAD.
#  level / max-level: the pet hatches at a random level in that range (pets
#  are upgraded in /pets, so eggs hatch at level 1 by default).
#  pool: pet id -> weight (chance = weight / total).
#  broadcast: announce the hatch to the whole server.
#  tier: 0 = common ... 4 = legendary (controls fanfare/totem effects, see hatching).
# ============================================================================
eggs:
  common:
    name: "<#E4E8EE><bold>Common Pet Egg"
    color: "#E4E8EE"
    rarity: "<#E4E8EE>✦ COMMON"
    texture: "264430e493feb5eaa145582e54e761a8603fb16cc0ff1268a5d1e864e6f479f6"
    tier: 0
    level: 1
    broadcast: false
    description: ["<gray>Warm to the touch...", "<gray>something small moves inside."]
    pool: {miner: 18, farmer: 18, lumberjack: 18, fisher: 18, warrior: 14, sage: 10, kappa: 2, tanuki: 2}
  uncommon:
    name: "<#43E97B><bold>Uncommon Pet Egg"
    color: "#43E97B"
    rarity: "<#43E97B>✦ UNCOMMON"
    texture: "b2cd5df9d7f1fa8341fcce2f3c118e2f517e4d2d99df2c51d61d93ed7f83e13"
    tier: 1
    level: 1
    broadcast: false
    description: ["<gray>Covered in soft green moss."]
    pool: {miner: 10, farmer: 10, lumberjack: 10, fisher: 10, warrior: 10, sage: 10, kappa: 12, tanuki: 12, yurei: 12, komainu: 2, kitsune: 1, tengu: 1}
  rare:
    name: "<#4FACFE><bold>Rare Pet Egg"
    color: "#4FACFE"
    rarity: "<#4FACFE>✦ RARE"
    texture: "eeb335182db5f3be80fccf6eabe599f4107d4ff0e9f44f34174cefa6e2b5768"
    tier: 2
    level: 1
    broadcast: false
    description: ["<gray>It hums like the ocean."]
    pool: {kappa: 15, tanuki: 15, yurei: 15, komainu: 15, kitsune: 15, tengu: 15, oni: 5, raijin: 5}
  epic:
    name: "<#C77DFF><bold>Epic Pet Egg"
    color: "#C77DFF"
    rarity: "<#C77DFF>✦ EPIC"
    texture: "9889f11c8838c09e1ecf2f83439ebcb9f324e567b0e9dc4b7c25d93e50ff2b"
    tier: 3
    level: 1
    broadcast: true
    description: ["<gray>Arcane runes glow on its shell."]
    pool: {komainu: 20, kitsune: 20, tengu: 20, oni: 17, raijin: 17, ryujin: 3, kishin: 3}
  legendary:
    name: "<gradient:#FFD166:#FF6B35><bold>Legendary Pet Egg</bold></gradient>"
    color: "#FFB547"
    rarity: "<#FFD166>✦ LEGENDARY"
    texture: "819611e7bee7abbbe9a46a8a99caa421dfeaf5dcbe7ce589b53ffd796a188d38"
    tier: 4
    level: 1
    broadcast: true
    description: ["<gray>A god once slept in this egg."]
    pool: {oni: 25, raijin: 25, ryujin: 25, kishin: 25}

# The hatching animation (all times in ticks, 20 = 1 second).
hatching:
  private: false            # true = only the hatching player sees the egg and effects
  distance: 2.2             # blocks in front of the player
  height: -0.35             # relative to eye height
  egg-size: 1.0
  pet-size: 0.8
  wobble-ticks: 70          # how long the egg rocks before it bursts
  reveal-ticks: 60          # how long the pet floats and spins after
  cracks: 3                 # crack moments while wobbling
  wobble-min: 4             # degrees at the start
  wobble-max: 38            # degrees right before it bursts
  glow-from: 0.55           # egg starts glowing at 55% of the wobble
  crack-block: SNIFFER_EGG  # shell shard particles
  fanfare-from-tier: 3      # epic+ plays the challenge fanfare
  roar-from-tier: 4         # legendary: dragon roar
  totem-from-tier: 4        # legendary: totem particles
  pull-camera: false        # turn the player to face the egg
  broadcast-to-color: "#FFFFFF"
  sounds:
    appear: BLOCK_AMETHYST_BLOCK_CHIME
    appear-2: BLOCK_BEACON_ACTIVATE
    heartbeat: BLOCK_NOTE_BLOCK_BASEDRUM
    crack: BLOCK_SNIFFER_EGG_CRACK
    crack-2: ENTITY_TURTLE_EGG_CRACK
    hatch: BLOCK_SNIFFER_EGG_HATCH
    burst: ENTITY_GENERIC_EXPLODE
    reveal: ENTITY_PLAYER_LEVELUP
    fanfare: UI_TOAST_CHALLENGE_COMPLETE
    roar: ENTITY_ENDER_DRAGON_GROWL
    sparkle: BLOCK_AMETHYST_BLOCK_RESONATE
    finish: ENTITY_ALLAY_ITEM_GIVEN
    broadcast: ENTITY_PLAYER_LEVELUP

design:
  # Chat card for eggs with broadcast: true. {player} {pet} {egg} {rarity} {level},
  # {from} = the egg colour, {bar} = a gradient rule, <center> centers a line.
  hatch-broadcast:
    - "{bar}"
    - "<center><{from}><bold>✦ PET HATCHED ✦</bold>"
    - ""
    - "<center><white>{player} <gray>hatched a {rarity}"
    - "<center>{pet} <gray>[Lv {level}] <gray>from a {egg}<gray>!"
    - ""
    - "{bar}"
```
