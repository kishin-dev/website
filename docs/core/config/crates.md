# Crates

`plugins/Kishin/crates.yml` - Crates and their weighted rewards.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `crates.yml` (77 lines)

```yaml
# ============================================================================
#  Crates  -  /crates, or right-click a crate block at spawn
# ============================================================================
#  Keys are stored on the player (/crates) and can be withdrawn as items to
#  trade, sell on /ah, or fill /orders with.
#
#  Each reward:
#    name:    shown in the menu and the spin
#    icon:    material shown
#    rarity:  COMMON, UNCOMMON, RARE, EPIC or LEGENDARY (colours; EPIC+ is announced)
#    weight:  chance relative to the others in the same crate
#    reward:  same format as daily.yml (money, gems, xp-levels, lootboxes, items,
#             credits, keys, cosmetics, pet-eggs)
#    Pet eggs: pet-eggs: ["RARE:1"] (rarities from pets.yml). Use icon: PLAYER_HEAD
#    and the menu shows the egg's own texture.
#  A cosmetic reward the player already owns is skipped when rolling.
#
#  Commands (kishin.staff.crates):
#    /crates give <player|*> <crate> [amount]   keys (works offline - for a webstore)
#    /crates block <crate>                       a placeable crate for spawn
#    /crates reload
# ============================================================================
crates:
  yokai:
    name: "Yokai Crate"
    color: "#9BE564"
    icon: ENDER_CHEST
    rewards:
      pocket_money:   {name: "$5,000",            icon: GOLD_NUGGET,     rarity: COMMON,    weight: 30, reward: {money: 5000}}
      stash:          {name: "$12,500",           icon: GOLD_INGOT,      rarity: UNCOMMON,  weight: 15, reward: {money: 12500}}
      gems_small:     {name: "50 Gems",           icon: AMETHYST_SHARD,  rarity: COMMON,    weight: 20, reward: {gems: 50}}
      iron_haul:      {name: "32 Iron Ingots",    icon: IRON_INGOT,      rarity: COMMON,    weight: 15, reward: {items: ["IRON_INGOT:32"]}}
      diamonds:       {name: "8 Diamonds",        icon: DIAMOND,         rarity: UNCOMMON,  weight: 10, reward: {items: ["DIAMOND:8"]}}
      xp_boost:       {name: "10 XP Levels",      icon: EXPERIENCE_BOTTLE, rarity: UNCOMMON, weight: 10, reward: {xp-levels: 10}}
      money_box:      {name: "Money Lootbox",     icon: CHEST,           rarity: RARE,      weight: 6,  reward: {lootboxes: ["MONEY:UNCOMMON:1"]}}
      wanderer_tag:   {name: "Wanderer Tag",      icon: NAME_TAG,        rarity: RARE,      weight: 4,  reward: {cosmetics: ["tag:wanderer"]}}
      tengu_key:      {name: "Tengu Key",         icon: TRIPWIRE_HOOK,   rarity: EPIC,      weight: 3,  reward: {keys: ["tengu:1"]}}
      jackpot:        {name: "$75,000 Jackpot",   icon: GOLD_BLOCK,      rarity: LEGENDARY, weight: 1,  reward: {money: 75000}}
      common_egg:     {name: "Common Pet Egg",    icon: PLAYER_HEAD,     rarity: UNCOMMON,  weight: 8,  reward: {pet-eggs: ["COMMON:1"]}}
      uncommon_egg:   {name: "Uncommon Pet Egg",  icon: PLAYER_HEAD,     rarity: RARE,      weight: 4,  reward: {pet-eggs: ["UNCOMMON:1"]}}
      rare_egg:       {name: "Rare Pet Egg",      icon: PLAYER_HEAD,     rarity: EPIC,      weight: 1,  reward: {pet-eggs: ["RARE:1"]}}
  tengu:
    name: "Tengu Crate"
    color: "#7CD6FF"
    icon: ENDER_CHEST
    rewards:
      purse:          {name: "$25,000",           icon: GOLD_INGOT,      rarity: COMMON,    weight: 28, reward: {money: 25000}}
      vault:          {name: "$60,000",           icon: GOLD_BLOCK,      rarity: UNCOMMON,  weight: 14, reward: {money: 60000}}
      gems:           {name: "200 Gems",          icon: AMETHYST_SHARD,  rarity: COMMON,    weight: 20, reward: {gems: 200}}
      diamond_pile:   {name: "32 Diamonds",       icon: DIAMOND,         rarity: UNCOMMON,  weight: 12, reward: {items: ["DIAMOND:32"]}}
      scrap:          {name: "4 Netherite Scrap", icon: NETHERITE_SCRAP, rarity: RARE,      weight: 7,  reward: {items: ["NETHERITE_SCRAP:4"]}}
      rare_box:       {name: "Rare Gems Lootbox", icon: CHEST,           rarity: RARE,      weight: 7,  reward: {lootboxes: ["GEMS:RARE:1"]}}
      tengu_tag:      {name: "Tengu Tag",         icon: NAME_TAG,        rarity: EPIC,      weight: 4,  reward: {cosmetics: ["tag:tengu"]}}
      sakura_trail:   {name: "Sakura Trail",      icon: CHERRY_SAPLING,  rarity: EPIC,      weight: 3,  reward: {cosmetics: ["trail:SAKURA"]}}
      fujin_key:      {name: "Fujin Key",         icon: TRIPWIRE_HOOK,   rarity: EPIC,      weight: 3,  reward: {keys: ["fujin:1"]}}
      credits:        {name: "25 Credits",        icon: EMERALD,         rarity: LEGENDARY, weight: 2,  reward: {credits: 25}}
      uncommon_egg:   {name: "Uncommon Pet Egg",  icon: PLAYER_HEAD,     rarity: UNCOMMON,  weight: 8,  reward: {pet-eggs: ["UNCOMMON:1"]}}
      rare_egg:       {name: "Rare Pet Egg",      icon: PLAYER_HEAD,     rarity: RARE,      weight: 5,  reward: {pet-eggs: ["RARE:1"]}}
      epic_egg:       {name: "Epic Pet Egg",      icon: PLAYER_HEAD,     rarity: EPIC,      weight: 2,  reward: {pet-eggs: ["EPIC:1"]}}
  fujin:
    name: "Fujin Crate"
    color: "#C77DFF"
    icon: ENDER_CHEST
    rewards:
      fortune:        {name: "$150,000",          icon: GOLD_BLOCK,      rarity: COMMON,    weight: 26, reward: {money: 150000}}
      treasury:       {name: "$400,000",          icon: GOLD_BLOCK,      rarity: UNCOMMON,  weight: 12, reward: {money: 400000}}
      gems:           {name: "750 Gems",          icon: AMETHYST_CLUSTER, rarity: COMMON,   weight: 20, reward: {gems: 750}}
      netherite:      {name: "2 Netherite Ingots", icon: NETHERITE_INGOT, rarity: RARE,     weight: 10, reward: {items: ["NETHERITE_INGOT:2"]}}
      legend_box:     {name: "Legendary Lootbox", icon: ENDER_CHEST,     rarity: EPIC,      weight: 8,  reward: {lootboxes: ["MONEY:LEGENDARY:1"]}}
      tengu_keys:     {name: "3 Tengu Keys",      icon: TRIPWIRE_HOOK,   rarity: RARE,      weight: 10, reward: {keys: ["tengu:3"]}}
      storm_trail:    {name: "Storm Trail",       icon: LIGHTNING_ROD,   rarity: EPIC,      weight: 4,  reward: {cosmetics: ["trail:STORM"]}}
      fujin_tag:      {name: "Fujin Tag",         icon: NAME_TAG,        rarity: EPIC,      weight: 4,  reward: {cosmetics: ["tag:fujin"]}}
      credits:        {name: "100 Credits",       icon: EMERALD_BLOCK,   rarity: LEGENDARY, weight: 3,  reward: {credits: 100}}
      god_roll:       {name: "$2,500,000",        icon: BEACON,          rarity: LEGENDARY, weight: 1,  reward: {money: 2500000, gems: 2500}}
      rare_egg:       {name: "Rare Pet Egg",      icon: PLAYER_HEAD,     rarity: UNCOMMON,  weight: 8,  reward: {pet-eggs: ["RARE:1"]}}
      epic_egg:       {name: "Epic Pet Egg",      icon: PLAYER_HEAD,     rarity: RARE,      weight: 4,  reward: {pet-eggs: ["EPIC:1"]}}
      legendary_egg:  {name: "Legendary Pet Egg", icon: PLAYER_HEAD,     rarity: LEGENDARY, weight: 1,  reward: {pet-eggs: ["LEGENDARY:1"]}}
```
