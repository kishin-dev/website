# Battlepass

`plugins/Kishin/battlepass.yml` - Season, tasks and the 100 levels of rewards.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `battlepass.yml` (326 lines)

```yaml
# ============================================================================
#  Battlepass  -  /battlepass
# ============================================================================
#  Players buy the pass for 'price-credits' (or you grant it with
#  /battlepass give <player>, e.g. from a webstore). Then they work through
#  100 tasks IN ORDER: finishing a task = +1 level = that level's reward.
#
#  Changing 'season.id' starts a new season: everyone's progress and pass reset.
#
#  Task types (targets = optional list of blocks/items/mobs; empty = anything):
#    BREAK_BLOCK  PLACE_BLOCK  KILL_MOB  CATCH_FISH  CRAFT  SMELT  EAT  ENCHANT
#    BREED  PLAYTIME_MINUTES (not while AFK)  SHOP_SELL (money earned)
#    AUCTION_SELL  ORDER_DELIVER (items)  CHALLENGE_COMPLETE  DAILY_CLAIM  CRATE_OPEN
#  Crops only count when fully grown; blocks a player placed don't count when broken.
#
#  Rewards use the same format as daily.yml. Every 10th level gives 50 credits,
#  so the full pass pays back 500 of the 1,000 credits it costs.
#  Apply edits with /battlepass reload.
# ============================================================================
season:
  id: "s1"
  name: "Season 1: Awakening"
  price-credits: 1000
  ends: ""                    # optional, e.g. "2026-12-31" - progress stops after this date

levels:
  1:
    task: {type: BREAK_BLOCK, targets: [COBBLESTONE], amount: 64, description: "Mine 64 Cobblestone", icon: COBBLESTONE}
    reward: {money: 1250, items: ["OAK_SAPLING:4", "BONE_MEAL:16"]}
  2:
    task: {type: PLACE_BLOCK, amount: 64, description: "Place 64 blocks", icon: BRICKS}
    reward: {money: 1500, gems: 11}
  3:
    task: {type: BREAK_BLOCK, targets: [OAK_LOG, SPRUCE_LOG, BIRCH_LOG, JUNGLE_LOG, ACACIA_LOG, DARK_OAK_LOG, CHERRY_LOG, MANGROVE_LOG], amount: 32, description: "Chop 32 logs", icon: OAK_LOG}
    reward: {money: 1750, xp-levels: 3}
  4:
    task: {type: DAILY_CLAIM, amount: 1, description: "Claim your /daily reward", icon: SUNFLOWER}
    reward: {money: 2000, gems: 12}
  5:
    task: {type: BREAK_BLOCK, targets: [WHEAT], amount: 32, description: "Harvest 32 grown wheat", icon: WHEAT}
    reward: {money: 2250, keys: ["yokai:1"]}
  6:
    task: {type: KILL_MOB, targets: [ZOMBIE], amount: 10, description: "Slay 10 Zombies", icon: ZOMBIE_HEAD}
    reward: {money: 2500, gems: 13, xp-levels: 3}
  7:
    task: {type: CATCH_FISH, amount: 5, description: "Catch 5 fish", icon: FISHING_ROD}
    reward: {money: 2750}
  8:
    task: {type: CRAFT, amount: 32, description: "Craft 32 items", icon: CRAFTING_TABLE}
    reward: {money: 3000, gems: 14}
  9:
    task: {type: SHOP_SELL, amount: 5000, description: "Earn $5,000 selling in /shop", icon: GOLD_INGOT}
    reward: {money: 3250, xp-levels: 3}
  10:
    task: {type: CHALLENGE_COMPLETE, amount: 1, description: "Complete a /challenges goal", icon: WRITABLE_BOOK}
    reward: {money: 3500, gems: 15, credits: 50, keys: ["tengu:1"], lootboxes: ["GEMS:COMMON:1"]}
  11:
    task: {type: BREAK_BLOCK, targets: [SUGAR_CANE], amount: 64, description: "Harvest 64 Sugar Cane", icon: SUGAR_CANE}
    reward: {money: 3750}
  12:
    task: {type: SMELT, amount: 32, description: "Smelt 32 items", icon: FURNACE}
    reward: {money: 4000, gems: 16, xp-levels: 3, cosmetics: ["tag:kitsune"]}
  13:
    task: {type: KILL_MOB, targets: [SKELETON], amount: 15, description: "Slay 15 Skeletons", icon: SKELETON_SKULL}
    reward: {money: 4250}
  14:
    task: {type: EAT, amount: 10, description: "Eat 10 meals", icon: BREAD}
    reward: {money: 4500, gems: 17}
  15:
    task: {type: PLAYTIME_MINUTES, amount: 60, description: "Play for 1 hour", icon: CLOCK}
    reward: {money: 4750, xp-levels: 3, keys: ["yokai:1"]}
  16:
    task: {type: BREAK_BLOCK, targets: [COAL_ORE, DEEPSLATE_COAL_ORE], amount: 32, description: "Mine 32 Coal Ore", icon: COAL_ORE}
    reward: {money: 5000, gems: 18}
  17:
    task: {type: PLACE_BLOCK, amount: 256, description: "Place 256 blocks", icon: STONE_BRICKS}
    reward: {money: 5250}
  18:
    task: {type: BREED, amount: 5, description: "Breed 5 animals", icon: WHEAT}
    reward: {money: 5500, gems: 19, xp-levels: 3}
  19:
    task: {type: CATCH_FISH, amount: 15, description: "Catch 15 fish", icon: COD}
    reward: {money: 5750}
  20:
    task: {type: CRATE_OPEN, amount: 1, description: "Open a crate", icon: ENDER_CHEST}
    reward: {money: 6000, gems: 20, credits: 50, keys: ["tengu:1"], lootboxes: ["LEVEL:COMMON:1"]}
  21:
    task: {type: BREAK_BLOCK, targets: [CARROTS, POTATOES], amount: 64, description: "Harvest 64 carrots or potatoes", icon: CARROT}
    reward: {money: 6250, xp-levels: 3}
  22:
    task: {type: KILL_MOB, targets: [SPIDER, CAVE_SPIDER], amount: 15, description: "Slay 15 Spiders", icon: SPIDER_EYE}
    reward: {money: 6500, gems: 21}
  23:
    task: {type: SHOP_SELL, amount: 15000, description: "Earn $15,000 selling in /shop", icon: GOLD_BLOCK}
    reward: {money: 6750}
  24:
    task: {type: ENCHANT, amount: 1, description: "Enchant an item", icon: ENCHANTING_TABLE}
    reward: {money: 7000, gems: 22, xp-levels: 3}
  25:
    task: {type: BREAK_BLOCK, targets: [COBBLESTONE, STONE], amount: 500, description: "Mine 500 stone", icon: STONE}
    reward: {money: 7250, keys: ["yokai:1"], cosmetics: ["tag:oni"]}
  26:
    task: {type: ORDER_DELIVER, amount: 64, description: "Deliver 64 items to /orders", icon: HOPPER}
    reward: {money: 7500, gems: 23}
  27:
    task: {type: KILL_MOB, targets: [CREEPER], amount: 10, description: "Slay 10 Creepers", icon: CREEPER_HEAD}
    reward: {money: 7750, xp-levels: 3}
  28:
    task: {type: SMELT, targets: [IRON_INGOT], amount: 32, description: "Smelt 32 Iron Ingots", icon: IRON_INGOT}
    reward: {money: 8000, gems: 24}
  29:
    task: {type: DAILY_CLAIM, amount: 3, description: "Claim /daily on 3 days", icon: SUNFLOWER}
    reward: {money: 8250}
  30:
    task: {type: AUCTION_SELL, amount: 1, description: "Sell an item on /ah", icon: GOLD_NUGGET}
    reward: {money: 8500, gems: 25, xp-levels: 3, credits: 50, keys: ["tengu:1"], lootboxes: ["MONEY:UNCOMMON:1"]}
  31:
    task: {type: BREAK_BLOCK, targets: [MELON, PUMPKIN], amount: 64, description: "Harvest 64 melons or pumpkins", icon: MELON}
    reward: {money: 8750}
  32:
    task: {type: CRAFT, targets: [BREAD], amount: 32, description: "Bake 32 Bread", icon: BREAD}
    reward: {money: 9000, gems: 26}
  33:
    task: {type: KILL_MOB, amount: 100, description: "Slay 100 mobs", icon: IRON_SWORD}
    reward: {money: 9250, xp-levels: 3}
  34:
    task: {type: CATCH_FISH, amount: 25, description: "Catch 25 fish", icon: SALMON}
    reward: {money: 9500, gems: 27}
  35:
    task: {type: PLAYTIME_MINUTES, amount: 120, description: "Play for 2 hours", icon: CLOCK}
    reward: {money: 9750, keys: ["yokai:1"]}
  36:
    task: {type: BREAK_BLOCK, targets: [IRON_ORE, DEEPSLATE_IRON_ORE], amount: 32, description: "Mine 32 Iron Ore", icon: IRON_ORE}
    reward: {money: 10000, gems: 28, xp-levels: 3}
  37:
    task: {type: CHALLENGE_COMPLETE, amount: 3, description: "Complete 3 challenges", icon: WRITABLE_BOOK}
    reward: {money: 10250}
  38:
    task: {type: EAT, amount: 25, description: "Eat 25 meals", icon: COOKED_BEEF}
    reward: {money: 10500, gems: 29, cosmetics: ["tag:yurei"]}
  39:
    task: {type: BREED, amount: 15, description: "Breed 15 animals", icon: EGG}
    reward: {money: 10750, xp-levels: 3}
  40:
    task: {type: SHOP_SELL, amount: 40000, description: "Earn $40,000 selling in /shop", icon: GOLD_BLOCK}
    reward: {money: 11000, gems: 30, credits: 50, keys: ["tengu:1"], lootboxes: ["GEMS:UNCOMMON:1"]}
  41:
    task: {type: BREAK_BLOCK, targets: [CACTUS], amount: 64, description: "Harvest 64 Cactus", icon: CACTUS}
    reward: {money: 11250}
  42:
    task: {type: KILL_MOB, targets: [ENDERMAN], amount: 10, description: "Slay 10 Endermen", icon: ENDER_PEARL}
    reward: {money: 11500, gems: 31, xp-levels: 3}
  43:
    task: {type: SMELT, amount: 128, description: "Smelt 128 items", icon: BLAST_FURNACE}
    reward: {money: 11750}
  44:
    task: {type: PLACE_BLOCK, amount: 1000, description: "Place 1,000 blocks", icon: BRICKS}
    reward: {money: 12000, gems: 32}
  45:
    task: {type: ENCHANT, amount: 3, description: "Enchant 3 items", icon: ENCHANTED_BOOK}
    reward: {money: 12250, xp-levels: 3, keys: ["yokai:1"]}
  46:
    task: {type: BREAK_BLOCK, targets: [NETHER_WART], amount: 64, description: "Harvest 64 Nether Wart", icon: NETHER_WART}
    reward: {money: 12500, gems: 33}
  47:
    task: {type: ORDER_DELIVER, amount: 256, description: "Deliver 256 items to /orders", icon: HOPPER}
    reward: {money: 12750}
  48:
    task: {type: CATCH_FISH, amount: 40, description: "Catch 40 fish", icon: FISHING_ROD}
    reward: {money: 13000, gems: 34, xp-levels: 3}
  49:
    task: {type: CRATE_OPEN, amount: 3, description: "Open 3 crates", icon: ENDER_CHEST}
    reward: {money: 13250}
  50:
    task: {type: BREAK_BLOCK, targets: [DIAMOND_ORE, DEEPSLATE_DIAMOND_ORE], amount: 16, description: "Mine 16 Diamond Ore", icon: DIAMOND_ORE}
    reward: {money: 13500, gems: 35, credits: 50, keys: ["tengu:1", "tengu:1", "fujin:1"], lootboxes: ["LEVEL:RARE:1"], cosmetics: ["trail:SAKURA"]}
  51:
    task: {type: DAILY_CLAIM, amount: 3, description: "Claim /daily on 3 days", icon: SUNFLOWER}
    reward: {money: 13750, xp-levels: 3}
  52:
    task: {type: BREAK_BLOCK, targets: [COBBLESTONE, STONE], amount: 1500, description: "Mine 1,500 stone", icon: STONE}
    reward: {money: 14000, gems: 36}
  53:
    task: {type: CRAFT, amount: 256, description: "Craft 256 items", icon: CRAFTING_TABLE}
    reward: {money: 14250}
  54:
    task: {type: KILL_MOB, targets: [ZOMBIE, HUSK, DROWNED], amount: 50, description: "Slay 50 undead", icon: ROTTEN_FLESH}
    reward: {money: 14500, gems: 37, xp-levels: 3}
  55:
    task: {type: PLAYTIME_MINUTES, amount: 180, description: "Play for 3 hours", icon: CLOCK}
    reward: {money: 14750, keys: ["yokai:1"]}
  56:
    task: {type: SHOP_SELL, amount: 75000, description: "Earn $75,000 selling in /shop", icon: GOLD_BLOCK}
    reward: {money: 15000, gems: 38}
  57:
    task: {type: BREAK_BLOCK, targets: [GOLD_ORE, DEEPSLATE_GOLD_ORE], amount: 32, description: "Mine 32 Gold Ore", icon: GOLD_ORE}
    reward: {money: 15250, xp-levels: 3}
  58:
    task: {type: CATCH_FISH, amount: 60, description: "Catch 60 fish", icon: COD}
    reward: {money: 15500, gems: 39}
  59:
    task: {type: AUCTION_SELL, amount: 3, description: "Sell 3 items on /ah", icon: GOLD_INGOT}
    reward: {money: 15750}
  60:
    task: {type: CHALLENGE_COMPLETE, amount: 5, description: "Complete 5 challenges", icon: WRITABLE_BOOK}
    reward: {money: 16000, gems: 40, xp-levels: 3, credits: 50, keys: ["tengu:1"], lootboxes: ["MONEY:RARE:1"]}
  61:
    task: {type: BREAK_BLOCK, targets: [OAK_LOG, SPRUCE_LOG, BIRCH_LOG, JUNGLE_LOG, ACACIA_LOG, DARK_OAK_LOG, CHERRY_LOG, MANGROVE_LOG], amount: 256, description: "Chop 256 logs", icon: OAK_LOG}
    reward: {money: 16250}
  62:
    task: {type: BREED, amount: 30, description: "Breed 30 animals", icon: HAY_BLOCK}
    reward: {money: 16500, gems: 41}
  63:
    task: {type: SMELT, amount: 256, description: "Smelt 256 items", icon: FURNACE}
    reward: {money: 16750, xp-levels: 3, cosmetics: ["tag:ronin"]}
  64:
    task: {type: KILL_MOB, amount: 300, description: "Slay 300 mobs", icon: DIAMOND_SWORD}
    reward: {money: 17000, gems: 42}
  65:
    task: {type: ENCHANT, amount: 5, description: "Enchant 5 items", icon: ENCHANTED_BOOK}
    reward: {money: 17250, keys: ["yokai:1"]}
  66:
    task: {type: BREAK_BLOCK, targets: [WHEAT, CARROTS, POTATOES, BEETROOTS], amount: 500, description: "Harvest 500 crops", icon: HAY_BLOCK}
    reward: {money: 17500, gems: 43, xp-levels: 3}
  67:
    task: {type: ORDER_DELIVER, amount: 640, description: "Deliver 640 items to /orders", icon: CHEST}
    reward: {money: 17750}
  68:
    task: {type: EAT, amount: 50, description: "Eat 50 meals", icon: GOLDEN_CARROT}
    reward: {money: 18000, gems: 44}
  69:
    task: {type: CRATE_OPEN, amount: 5, description: "Open 5 crates", icon: ENDER_CHEST}
    reward: {money: 18250, xp-levels: 3}
  70:
    task: {type: DAILY_CLAIM, amount: 4, description: "Claim /daily on 4 days", icon: SUNFLOWER}
    reward: {money: 18500, gems: 45, credits: 50, keys: ["tengu:1"], lootboxes: ["GEMS:EPIC:1"]}
  71:
    task: {type: BREAK_BLOCK, targets: [REDSTONE_ORE, DEEPSLATE_REDSTONE_ORE, LAPIS_ORE, DEEPSLATE_LAPIS_ORE], amount: 64, description: "Mine 64 Redstone or Lapis Ore", icon: REDSTONE_ORE}
    reward: {money: 18750}
  72:
    task: {type: PLACE_BLOCK, amount: 2500, description: "Place 2,500 blocks", icon: QUARTZ_BLOCK}
    reward: {money: 19000, gems: 46, xp-levels: 3}
  73:
    task: {type: CATCH_FISH, amount: 100, description: "Catch 100 fish", icon: TROPICAL_FISH}
    reward: {money: 19250}
  74:
    task: {type: SHOP_SELL, amount: 150000, description: "Earn $150,000 selling in /shop", icon: GOLD_BLOCK}
    reward: {money: 19500, gems: 47}
  75:
    task: {type: PLAYTIME_MINUTES, amount: 300, description: "Play for 5 hours", icon: CLOCK}
    reward: {money: 19750, xp-levels: 3, keys: ["yokai:1", "yokai:1", "fujin:1"], cosmetics: ["trail:SOUL_FLAME"]}
  76:
    task: {type: KILL_MOB, targets: [SKELETON], amount: 100, description: "Slay 100 Skeletons", icon: BONE}
    reward: {money: 20000, gems: 48}
  77:
    task: {type: BREAK_BLOCK, targets: [SUGAR_CANE, CACTUS, BAMBOO], amount: 1000, description: "Harvest 1,000 cane, cactus or bamboo", icon: SUGAR_CANE}
    reward: {money: 20250}
  78:
    task: {type: CRAFT, amount: 640, description: "Craft 640 items", icon: CRAFTING_TABLE}
    reward: {money: 20500, gems: 49, xp-levels: 3}
  79:
    task: {type: CHALLENGE_COMPLETE, amount: 5, description: "Complete 5 challenges", icon: WRITABLE_BOOK}
    reward: {money: 20750}
  80:
    task: {type: AUCTION_SELL, amount: 5, description: "Sell 5 items on /ah", icon: GOLD_BLOCK}
    reward: {money: 21000, gems: 50, credits: 50, keys: ["tengu:1"], lootboxes: ["LEVEL:EPIC:1"]}
  81:
    task: {type: BREAK_BLOCK, targets: [COBBLESTONE, STONE], amount: 3000, description: "Mine 3,000 stone", icon: STONE}
    reward: {money: 21250, xp-levels: 3}
  82:
    task: {type: SMELT, amount: 512, description: "Smelt 512 items", icon: BLAST_FURNACE}
    reward: {money: 21500, gems: 51}
  83:
    task: {type: BREED, amount: 50, description: "Breed 50 animals", icon: HAY_BLOCK}
    reward: {money: 21750}
  84:
    task: {type: KILL_MOB, targets: [CREEPER], amount: 50, description: "Slay 50 Creepers", icon: TNT}
    reward: {money: 22000, gems: 52, xp-levels: 3}
  85:
    task: {type: ENCHANT, amount: 10, description: "Enchant 10 items", icon: ENCHANTING_TABLE}
    reward: {money: 22250, keys: ["yokai:1"]}
  86:
    task: {type: ORDER_DELIVER, amount: 1280, description: "Deliver 1,280 items to /orders", icon: CHEST}
    reward: {money: 22500, gems: 53}
  87:
    task: {type: BREAK_BLOCK, targets: [DIAMOND_ORE, DEEPSLATE_DIAMOND_ORE], amount: 32, description: "Mine 32 Diamond Ore", icon: DIAMOND}
    reward: {money: 22750, xp-levels: 3}
  88:
    task: {type: CATCH_FISH, amount: 150, description: "Catch 150 fish", icon: FISHING_ROD}
    reward: {money: 23000, gems: 54, cosmetics: ["tag:tengu"]}
  89:
    task: {type: DAILY_CLAIM, amount: 5, description: "Claim /daily on 5 days", icon: SUNFLOWER}
    reward: {money: 23250}
  90:
    task: {type: SHOP_SELL, amount: 300000, description: "Earn $300,000 selling in /shop", icon: GOLD_BLOCK}
    reward: {money: 23500, gems: 55, xp-levels: 3, credits: 50, keys: ["tengu:1"], lootboxes: ["MONEY:EPIC:1"]}
  91:
    task: {type: KILL_MOB, amount: 750, description: "Slay 750 mobs", icon: NETHERITE_SWORD}
    reward: {money: 23750}
  92:
    task: {type: PLAYTIME_MINUTES, amount: 420, description: "Play for 7 hours", icon: CLOCK}
    reward: {money: 24000, gems: 56}
  93:
    task: {type: BREAK_BLOCK, targets: [EMERALD_ORE, DEEPSLATE_EMERALD_ORE], amount: 16, description: "Mine 16 Emerald Ore", icon: EMERALD_ORE}
    reward: {money: 24250, xp-levels: 3}
  94:
    task: {type: CRATE_OPEN, amount: 10, description: "Open 10 crates", icon: ENDER_CHEST}
    reward: {money: 24500, gems: 57}
  95:
    task: {type: PLACE_BLOCK, amount: 5000, description: "Place 5,000 blocks", icon: BEACON}
    reward: {money: 24750, keys: ["yokai:1"]}
  96:
    task: {type: CHALLENGE_COMPLETE, amount: 8, description: "Complete 8 challenges", icon: WRITABLE_BOOK}
    reward: {money: 25000, gems: 58, xp-levels: 3}
  97:
    task: {type: BREAK_BLOCK, amount: 10000, description: "Break 10,000 blocks", icon: DIAMOND_PICKAXE}
    reward: {money: 25250}
  98:
    task: {type: CATCH_FISH, amount: 250, description: "Catch 250 fish", icon: HEART_OF_THE_SEA}
    reward: {money: 25500, gems: 59}
  99:
    task: {type: SHOP_SELL, amount: 500000, description: "Earn $500,000 selling in /shop", icon: GOLD_BLOCK}
    reward: {money: 25750, xp-levels: 3}
  100:
    task: {type: KILL_MOB, amount: 1500, description: "The Final Trial: slay 1,500 mobs", icon: DRAGON_HEAD}
    reward: {money: 100000, gems: 1000, credits: 50, keys: ["tengu:1", "tengu:1", "fujin:3"], lootboxes: ["GEMS:LEGENDARY:1"], cosmetics: ["tag:shogun", "trail:GLOW"]}
```
