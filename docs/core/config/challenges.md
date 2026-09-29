# Challenges

`plugins/Kishin/challenges.yml` - Island challenge tiers and rewards.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `challenges.yml` (431 lines)

```yaml
# ============================================================================
#  Island challenges  -  /challenges
# ============================================================================
#  Goals for the whole island: everyone on the island shares the same progress.
#  Tiers unlock in order - "unlock" is how many challenges of the PREVIOUS tier
#  must be done first. Finishing every challenge in a tier (once) also pays the
#  tier's "completion-reward".
#
#  Challenge types:
#    ITEMS           hand in items (they are taken):   items: ["COBBLESTONE:64", "DIRT:32"]
#    ISLAND_LEVEL    island level reaches "amount"
#    ISLAND_WORTH    island worth reaches "amount"
#    ISLAND_MEMBERS  island has "amount" members (owner included)
#    ISLAND_UPGRADE  upgrade "upgrade" (e.g. GENERATOR) reaches level "amount"
#    PLAYER_LEVEL    your level          CLASS_LEVEL    your class level
#    BALANCE         you have this much money (it is NOT taken)
#    KILLS, MOB_KILLS, BLOCKS_BROKEN, BLOCKS_PLACED, FISH_SOLD
#    PLAYTIME_HOURS  hours played        DAILY_STREAK   best /daily streak
#
#  Only ITEMS challenges can be repeatable:
#    repeatable: true
#    max-completions: 20        # 0 = unlimited
#    repeat-multiplier: 0.5     # money/gems/XP on repeats (items & lootboxes aren't scaled)
#
#  Reward format is the same as daily.yml. Apply changes with /challenges reload.
# ============================================================================

tiers:
  castaway:
    name: "Castaway"
    icon: OAK_SAPLING
    color: "#9BE564"
    unlock: 0
    completion-reward:
      money: 2500
      lootboxes: ["MONEY:COMMON:1"]
    challenges:
      stone_age:
        name: "Stone Age"
        icon: COBBLESTONE
        description: ["Build a cobblestone generator", "and bring back 64 cobblestone."]
        type: ITEMS
        items: ["COBBLESTONE:64"]
        reward: {money: 500, xp-levels: 2}
        repeatable: true
        max-completions: 20
        repeat-multiplier: 0.5
      lumberjack:
        name: "Lumberjack"
        icon: OAK_LOG
        description: ["Grow a tree and chop it down."]
        type: ITEMS
        items: ["OAK_LOG:32"]
        reward: {money: 400, items: ["OAK_SAPLING:4"]}
        repeatable: true
        max-completions: 20
        repeat-multiplier: 0.5
      first_harvest:
        name: "First Harvest"
        icon: WHEAT
        description: ["Start a farm and harvest", "your first wheat."]
        type: ITEMS
        items: ["WHEAT:32"]
        reward: {money: 400, items: ["BONE_MEAL:16"]}
        repeatable: true
        max-completions: 20
        repeat-multiplier: 0.5
      sweet_tooth:
        name: "Sweet Tooth"
        icon: SUGAR_CANE
        description: ["Grow sugar cane by the water."]
        type: ITEMS
        items: ["SUGAR_CANE:32"]
        reward: {money: 400}
        repeatable: true
        max-completions: 20
        repeat-multiplier: 0.5
      first_steps:
        name: "First Steps"
        icon: EXPERIENCE_BOTTLE
        description: ["Reach level 5."]
        type: PLAYER_LEVEL
        amount: 5
        reward: {money: 750, gems: 10}
      chosen_path:
        name: "Chosen Path"
        icon: NETHER_STAR
        description: ["Pick a class with /classes."]
        type: CLASS_LEVEL
        amount: 1
        reward: {money: 500}
      homemaker:
        name: "Homemaker"
        icon: GRASS_BLOCK
        description: ["Grow your island to level 2."]
        type: ISLAND_LEVEL
        amount: 2
        reward: {money: 1000}
      piggy_bank:
        name: "Piggy Bank"
        icon: GOLD_NUGGET
        description: ["Save up $5,000."]
        type: BALANCE
        amount: 5000
        reward: {gems: 25}

  farmer:
    name: "Farmer"
    icon: GOLDEN_HOE
    color: "#F4D35E"
    unlock: 5
    completion-reward:
      gems: 100
      lootboxes: ["GEMS:UNCOMMON:1"]
    challenges:
      pumpkin_patch:
        name: "Pumpkin Patch"
        icon: PUMPKIN
        description: ["Grow a field of pumpkins."]
        type: ITEMS
        items: ["PUMPKIN:32"]
        reward: {money: 1200}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      melon_mania:
        name: "Melon Mania"
        icon: MELON
        description: ["Bring back whole melons."]
        type: ITEMS
        items: ["MELON:16"]
        reward: {money: 1200}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      root_vegetables:
        name: "Root Vegetables"
        icon: CARROT
        description: ["Harvest carrots and potatoes."]
        type: ITEMS
        items: ["CARROT:64", "POTATO:64"]
        reward: {money: 1500, xp-levels: 3}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      chocolatier:
        name: "Chocolatier"
        icon: COCOA_BEANS
        description: ["Grow cocoa on jungle logs."]
        type: ITEMS
        items: ["COCOA_BEANS:32"]
        reward: {money: 1200}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      prickly:
        name: "Prickly Business"
        icon: CACTUS
        description: ["Build a cactus farm."]
        type: ITEMS
        items: ["CACTUS:64"]
        reward: {money: 1000}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      egg_hunt:
        name: "Egg Hunt"
        icon: EGG
        description: ["Keep some chickens."]
        type: ITEMS
        items: ["EGG:16"]
        reward: {money: 800, items: ["WHEAT_SEEDS:32"]}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      fungi:
        name: "Fun Guy"
        icon: RED_MUSHROOM
        description: ["Grow both kinds of mushroom."]
        type: ITEMS
        items: ["BROWN_MUSHROOM:16", "RED_MUSHROOM:16"]
        reward: {money: 1200}
        repeatable: true
        max-completions: 15
        repeat-multiplier: 0.5
      regular:
        name: "Regular"
        icon: SUNFLOWER
        description: ["Reach a 3 day /daily streak."]
        type: DAILY_STREAK
        amount: 3
        reward: {gems: 50}

  miner:
    name: "Miner"
    icon: IRON_PICKAXE
    color: "#8ECAE6"
    unlock: 6
    completion-reward:
      money: 25000
      lootboxes: ["MONEY:RARE:1"]
    challenges:
      coal_miner:
        name: "Coal Miner"
        icon: COAL
        description: ["Mine coal from your generator."]
        type: ITEMS
        items: ["COAL:64"]
        reward: {money: 2000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      iron_will:
        name: "Iron Will"
        icon: IRON_INGOT
        description: ["Smelt iron ingots."]
        type: ITEMS
        items: ["IRON_INGOT:32"]
        reward: {money: 3000, xp-levels: 5}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      gold_rush:
        name: "Gold Rush"
        icon: GOLD_INGOT
        description: ["Strike gold."]
        type: ITEMS
        items: ["GOLD_INGOT:16"]
        reward: {money: 3000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      electrician:
        name: "Electrician"
        icon: REDSTONE
        description: ["Collect redstone dust."]
        type: ITEMS
        items: ["REDSTONE:64"]
        reward: {money: 2000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      true_blue:
        name: "True Blue"
        icon: LAPIS_LAZULI
        description: ["Collect lapis lazuli."]
        type: ITEMS
        items: ["LAPIS_LAZULI:64"]
        reward: {money: 2000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      diamonds:
        name: "Diamonds!"
        icon: DIAMOND
        description: ["Find diamonds."]
        type: ITEMS
        items: ["DIAMOND:8"]
        reward: {money: 5000, gems: 50}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      deep_digger:
        name: "Deep Digger"
        icon: DIAMOND_PICKAXE
        description: ["Break 10,000 blocks."]
        type: BLOCKS_BROKEN
        amount: 10000
        reward: {money: 7500, xp-levels: 10}
      power_generator:
        name: "Power Generator"
        icon: FURNACE
        description: ["Upgrade your ore generator", "to level 2 in /island upgrades."]
        type: ISLAND_UPGRADE
        upgrade: GENERATOR
        amount: 2
        reward: {money: 5000}

  hunter:
    name: "Hunter"
    icon: BOW
    color: "#EF8354"
    unlock: 6
    completion-reward:
      gems: 300
      lootboxes: ["LEVEL:RARE:1"]
    challenges:
      bone_collector:
        name: "Bone Collector"
        icon: BONE
        description: ["Defeat skeletons."]
        type: ITEMS
        items: ["BONE:64"]
        reward: {money: 3000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      web_weaver:
        name: "Web Weaver"
        icon: STRING
        description: ["Defeat spiders."]
        type: ITEMS
        items: ["STRING:64"]
        reward: {money: 3000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      demolition:
        name: "Demolition"
        icon: GUNPOWDER
        description: ["Defeat creepers."]
        type: ITEMS
        items: ["GUNPOWDER:32"]
        reward: {money: 4000}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      void_walker:
        name: "Void Walker"
        icon: ENDER_PEARL
        description: ["Defeat endermen."]
        type: ITEMS
        items: ["ENDER_PEARL:16"]
        reward: {money: 6000, gems: 50}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      fire_starter:
        name: "Fire Starter"
        icon: BLAZE_ROD
        description: ["Defeat blazes."]
        type: ITEMS
        items: ["BLAZE_ROD:16"]
        reward: {money: 6000, gems: 50}
        repeatable: true
        max-completions: 10
        repeat-multiplier: 0.5
      mob_slayer:
        name: "Mob Slayer"
        icon: IRON_SWORD
        description: ["Kill 500 mobs."]
        type: MOB_KILLS
        amount: 500
        reward: {money: 10000, xp-levels: 10}
      angler:
        name: "Angler"
        icon: FISHING_ROD
        description: ["Sell 100 fish in /fishing."]
        type: FISH_SOLD
        amount: 100
        reward: {money: 10000, gems: 75}
      specialist:
        name: "Specialist"
        icon: ENCHANTED_BOOK
        description: ["Reach class level 5."]
        type: CLASS_LEVEL
        amount: 5
        reward: {gems: 150}

  legend:
    name: "Legend"
    icon: DRAGON_HEAD
    color: "#C77DFF"
    unlock: 6
    completion-reward:
      gems: 1500
      lootboxes: ["MONEY:LEGENDARY:1", "LEVEL:LEGENDARY:1"]
    challenges:
      kingdom:
        name: "Kingdom"
        icon: BEACON
        description: ["Grow your island to level 25."]
        type: ISLAND_LEVEL
        amount: 25
        reward: {money: 50000, gems: 250}
      priceless:
        name: "Priceless"
        icon: DIAMOND_BLOCK
        description: ["Reach $1,000,000 island worth."]
        type: ISLAND_WORTH
        amount: 1000000
        reward: {money: 75000, gems: 300}
      crew:
        name: "The Crew"
        icon: PLAYER_HEAD
        description: ["Have 3 people on your island."]
        type: ISLAND_MEMBERS
        amount: 3
        reward: {money: 20000}
      tycoon:
        name: "Tycoon"
        icon: GOLD_BLOCK
        description: ["Have $1,000,000 in the bank."]
        type: BALANCE
        amount: 1000000
        reward: {gems: 500}
      veteran:
        name: "Veteran"
        icon: CLOCK
        description: ["Play for 50 hours."]
        type: PLAYTIME_HOURS
        amount: 50
        reward: {gems: 300, lootboxes: ["GEMS:RARE:1"]}
      dedicated:
        name: "Dedicated"
        icon: SUNFLOWER
        description: ["Reach a 30 day /daily streak."]
        type: DAILY_STREAK
        amount: 30
        reward: {gems: 500}
      mastery:
        name: "Mastery"
        icon: TOTEM_OF_UNDYING
        description: ["Max out your class (level 10)."]
        type: CLASS_LEVEL
        amount: 10
        reward: {gems: 750}
      netherite:
        name: "Ancient Power"
        icon: NETHERITE_INGOT
        description: ["Forge netherite ingots."]
        type: ITEMS
        items: ["NETHERITE_INGOT:4"]
        reward: {money: 50000, gems: 200}
      emerald_city:
        name: "Emerald City"
        icon: EMERALD_BLOCK
        description: ["Collect emerald blocks."]
        type: ITEMS
        items: ["EMERALD_BLOCK:16"]
        reward: {money: 60000, gems: 200}
```
