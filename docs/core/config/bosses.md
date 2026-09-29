# World bosses

`plugins/Kishin/bosses.yml` - Boss schedule, arena, looks, phases, abilities and placement rewards.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `bosses.yml` (263 lines)

```yaml
# ============================================================================
#  KISHIN WORLD BOSSES  (/boss)
#  Every <interval-minutes> a boss spawns in the arena (set it with
#  /boss setarena), with a warning <warn-minutes> before. Players see its
#  health bar near it, it uses special attacks and can't be dragged out of
#  the arena. Top 3 damage dealers get the best rewards, everyone else who
#  did at least <min-damage-percent>% gets the participation reward.
#  Staff (kishin.staff.events): /boss spawn [id] | kill | setarena
#  Players: /boss (next spawn), /boss tp
#
#  LOOK:     size (1.0 = normal mob, max 16), title (big floating name), aura
#            (particle ring + rising particles), halo (ring above the head),
#            orbit (glowing items circling the boss), equipment, glowing
#  ENTRANCE: the boss rises with lightning, a shockwave and a title
#  PHASES:   at X% health the boss gets enraged - new title, potion effects,
#            faster attacks, stronger visuals, boss bar colour
#  ABILITIES (picked at random every ability-every-seconds):
#     shockwave - knockback blast          summon   - minions
#     fireballs - aimed at players         leap     - jumps at the farthest player
#     potion    - debuff aura              spikes   - red circles, then spikes erupt (move!)
#     ring      - expanding ground wave (jump over it!)
#     meteors   - warning circles, then fireballs from the sky
#     vortex    - pulls everyone towards the boss
#  particles: FLAME, SOUL_FIRE_FLAME, SNOWFLAKE, END_ROD, CHERRY_LEAVES, SPORE_BLOSSOM_AIR,
#     WITCH, PORTAL, TOTEM_OF_UNDYING, ELECTRIC_SPARK, DRIPPING_LAVA, CLOUD, DUST (with color)
# ============================================================================
enabled: true
first-spawn-minutes: 60
interval-minutes: 180
warn-minutes: 5
min-players: 3
arena: ""
arena-radius: 30
despawn-minutes: 15
bar-range: 64
tp-offset: 8

# REWARDS (per boss, under rewards: "1" / "2" / "3" / participation) accept
# everything a crate reward does - money, gems, xp-levels, lootboxes
# ["TYPE:RARITY:AMOUNT"], items, keys ["crate:amount"], pet-eggs ["RARE:1"],
# credits - plus console commands: [...] ({player}) and crate keys:
#   all-keys: 1      -> 1 key of EVERY crate in key-crates
#   random-keys: 2   -> 2 keys, each from a random crate in key-crates
key-crates: [yokai, tengu, fujin]
random-keys-unique: false   # true = random keys are always different crates

texts:
  bar: "{name} <gray>• <white>{health} ❤"
  top-line: "<{color}><bold>#{place}</bold> <white>{player} <dark_gray>» <gray>{damage} damage ({percent}%)"
  your-reward: "<gray>Your boss reward <dark_gray>» {reward}"
  escaped: "<center><#A0AAB8>{name} <gray>got bored and left... <dark_gray>Nobody defeated it in time."
  removed: "<center><#A0AAB8>The boss was removed by staff."
  info-alive: "<#FF6B6B>✦ A world boss is alive! <white>/boss tp</white> to join the fight."
  info-next: "<#A0AAB8>Next world boss in about <white>{minutes}</white> minutes."
  none-alive: "<#A0AAB8>No boss is alive."
  arena-set: "<#43E97B>✔ Boss arena set to your position."
  already: "<#FF6B6B>A boss is already alive."
  unknown: "<#FF6B6B>Unknown boss."
  no-arena: "<#FF6B6B>Set the arena first: /boss setarena"

design:
  spawn-sound: ENTITY_WITHER_SPAWN
  warning:
    - ""
    - "<center><gradient:#FF0055:#B388FF><bold>⚠ A WORLD BOSS AWAKENS IN {minutes} MINUTES ⚠</bold></gradient>"
    - "<center><gray>Get your best gear ready!"
    - ""
  spawn:
    - ""
    - "{bar}"
    - "<center><gradient:{from}:{to}><bold>⚔ WORLD BOSS ⚔</bold></gradient>"
    - "<center>{name} <gray>has appeared!"
    - "<center><gray>Health <dark_gray>» <#FF6B6B>{health} ❤"
    - ""
    - "<center><click:run_command:'/boss tp'><hover:show_text:'<#FF6B6B>Teleport to the arena'><gradient:{from}:{to}><bold>[ JOIN THE FIGHT ]</bold></gradient></hover></click>"
    - "{bar}"
    - ""
  killed:
    - ""
    - "{bar}"
    - "<center><gradient:#FFD700:#FF8C00><bold>✦ {name} <gradient:#FFD700:#FF8C00>HAS FALLEN ✦</bold></gradient>"
    - "<center><gray>{fighters} brave fighters took part"
    - ""
    - "<center>{top1}"
    - "<center>{top2}"
    - "<center>{top3}"
    - "{bar}"
    - ""

bosses:
  forest-titan:
    weight: 10
    name: "<gradient:#43E97B:#1B5E20><bold>Forest Titan</bold></gradient>"
    title: "<gradient:#B6FF9C:#43E97B:#1B5E20><bold>☘ FOREST TITAN ☘</bold></gradient>"
    title-size: 2.2
    entity: RAVAGER
    size: 2.2
    health: 3000
    damage-multiplier: 1.5
    bar-color: GREEN
    color-from: "#43E97B"
    color-to: "#1B5E20"
    entrance:
      title: "<gradient:#B6FF9C:#1B5E20><bold>THE FOREST TITAN</bold></gradient>"
      subtitle: "<gray>The ancient woods have awakened..."
    aura: {particle: SPORE_BLOSSOM_AIR, particle2: CHERRY_LEAVES, radius: 1.8, points: 12}
    halo: {particle: DUST, color: "#7CFF6B", radius: 0.8}
    orbit: {item: MOSS_BLOCK, count: 5, radius: 3.2, speed: 6, size: 0.7, glow: true, glow-color: "#43E97B", trail: HAPPY_VILLAGER}
    phases:
      - at: 60
        announce: "<gradient:#B6FF9C:#43E97B><bold>THE TITAN IS ENRAGED!</bold></gradient>"
        announce-sub: "<gray>The ground trembles beneath you"
        title: "<gradient:#FFD166:#43E97B><bold>☘ ENRAGED TITAN ☘</bold></gradient>"
        effects: ["speed:1", "strength:1"]
        ability-speed: 1.4
        intensity: 1.7
        bar-color: YELLOW
      - at: 25
        announce: "<gradient:#FF6B6B:#1B5E20><bold>FINAL STAND!</bold></gradient>"
        announce-sub: "<gray>The Titan fights for its life"
        title: "<gradient:#FF6B6B:#1B5E20><bold>☠ WRATH OF THE FOREST ☠</bold></gradient>"
        effects: ["speed:2", "strength:2", "resistance:1"]
        ability-speed: 1.9
        intensity: 2.4
        bar-color: RED
    ability-every-seconds: 7
    abilities: [shockwave, leap, summon, spikes, ring, vortex]
    ability-names:
      shockwave: "<#43E97B><bold>⚠ GROUND SLAM!"
      leap: "<#43E97B><bold>⚠ THE TITAN CHARGES!"
      summon: "<#43E97B><bold>⚠ The forest sends its guardians!"
      spikes: "<#43E97B><bold>⚠ ROOTS ERUPT - MOVE!"
      ring: "<#43E97B><bold>⚠ EARTHQUAKE - JUMP!"
      vortex: "<#43E97B><bold>⚠ The forest pulls you in!"
    shockwave: {radius: 7, damage: 7, knockback: 1.6}
    summon: {entity: VINDICATOR, amount: 3, max-alive: 8}
    spikes: {damage: 9, radius: 2.0, block: ROOTED_DIRT}
    ring: {radius: 14, damage: 8, color: "#7CFF6B"}
    vortex: {strength: 0.6}
    min-damage-percent: 3
    xp: 800
    rewards:
      "1": {money: 300000, gems: 200, lootboxes: ["GEMS:LEGENDARY:1"], all-keys: 1}
      "2": {money: 175000, gems: 125, lootboxes: ["GEMS:EPIC:1"], random-keys: 2}
      "3": {money: 100000, gems: 75, lootboxes: ["GEMS:RARE:1"], random-keys: 1}
      participation: {money: 25000, gems: 20}

  inferno-lord:
    weight: 10
    name: "<gradient:#FF6B35:#FF0055><bold>Inferno Lord</bold></gradient>"
    title: "<gradient:#FFD166:#FF6B35:#FF0055><bold>☄ INFERNO LORD ☄</bold></gradient>"
    title-size: 2.2
    entity: WITHER_SKELETON
    size: 2.4
    health: 2500
    damage-multiplier: 1.8
    bar-color: RED
    color-from: "#FF6B35"
    color-to: "#FF0055"
    equipment: {helmet: NETHERITE_HELMET, chestplate: NETHERITE_CHESTPLATE, leggings: NETHERITE_LEGGINGS, boots: NETHERITE_BOOTS, hand: NETHERITE_SWORD}
    entrance:
      title: "<gradient:#FFD166:#FF0055><bold>THE INFERNO LORD</bold></gradient>"
      subtitle: "<gray>The sky burns..."
    aura: {particle: FLAME, particle2: LAVA, radius: 1.6, points: 14}
    halo: {particle: SOUL_FIRE_FLAME, radius: 0.7}
    orbit: {item: MAGMA_BLOCK, count: 4, radius: 2.8, speed: 9, size: 0.65, glow: true, glow-color: "#FF6B35", trail: FLAME}
    phases:
      - at: 60
        announce: "<gradient:#FFD166:#FF6B35><bold>THE FLAMES GROW HOTTER!</bold></gradient>"
        announce-sub: "<gray>The Inferno Lord is enraged"
        title: "<gradient:#FFD166:#FF0055><bold>☄ ENRAGED INFERNO ☄</bold></gradient>"
        effects: ["speed:1", "strength:1", "fire_resistance:1"]
        ability-speed: 1.4
        intensity: 1.8
        bar-color: YELLOW
      - at: 25
        announce: "<gradient:#FF0055:#8B0000><bold>HELLFIRE UNLEASHED!</bold></gradient>"
        announce-sub: "<gray>Survive the final inferno"
        title: "<gradient:#FF0055:#8B0000><bold>☠ HELLFIRE ☠</bold></gradient>"
        effects: ["speed:2", "strength:2", "resistance:1"]
        ability-speed: 2.0
        intensity: 2.6
        bar-color: PURPLE
    ability-every-seconds: 6
    abilities: [fireballs, meteors, ring, shockwave, summon, potion]
    ability-names:
      fireballs: "<#FF6B35><bold>⚠ FIREBALLS INCOMING!"
      meteors: "<#FF6B35><bold>⚠ METEOR RAIN - WATCH THE GROUND!"
      ring: "<#FF6B35><bold>⚠ FIRE WAVE - JUMP!"
      shockwave: "<#FF6B35><bold>⚠ INFERNO BLAST!"
      summon: "<#FF6B35><bold>⚠ Blazes answer the call!"
      potion: "<#FF6B35><bold>⚠ The heat weakens you..."
    fireballs: {amount: 4}
    meteors: {per-player: 2, damage: 7}
    ring: {radius: 13, damage: 8, color: "#FF6B35"}
    shockwave: {radius: 6, damage: 6, knockback: 1.3}
    summon: {entity: BLAZE, amount: 2, max-alive: 6}
    potion: {effect: weakness, seconds: 5, level: 1, radius: 9}
    min-damage-percent: 3
    xp: 800
    rewards:
      "1": {money: 300000, gems: 200, lootboxes: ["GEMS:LEGENDARY:1"], all-keys: 1}
      "2": {money: 175000, gems: 125, lootboxes: ["GEMS:EPIC:1"], random-keys: 2}
      "3": {money: 100000, gems: 75, lootboxes: ["GEMS:RARE:1"], random-keys: 1}
      participation: {money: 25000, gems: 20}

  frost-queen:
    weight: 8
    name: "<gradient:#A5F2F3:#4FACFE><bold>Frost Queen</bold></gradient>"
    title: "<gradient:#FFFFFF:#A5F2F3:#4FACFE><bold>❄ FROST QUEEN ❄</bold></gradient>"
    title-size: 2.2
    entity: STRAY
    size: 2.2
    health: 2200
    damage-multiplier: 2.0
    bar-color: BLUE
    color-from: "#A5F2F3"
    color-to: "#4FACFE"
    equipment: {helmet: DIAMOND_HELMET, chestplate: DIAMOND_CHESTPLATE, leggings: DIAMOND_LEGGINGS, boots: DIAMOND_BOOTS, hand: BOW}
    entrance:
      title: "<gradient:#FFFFFF:#4FACFE><bold>THE FROST QUEEN</bold></gradient>"
      subtitle: "<gray>Winter has come..."
    aura: {particle: SNOWFLAKE, particle2: END_ROD, radius: 1.8, points: 14}
    halo: {particle: DUST, color: "#A5F2F3", radius: 0.8}
    orbit: {item: BLUE_ICE, count: 6, radius: 3.0, speed: 7, size: 0.55, glow: true, glow-color: "#A5F2F3", trail: SNOWFLAKE}
    phases:
      - at: 60
        announce: "<gradient:#FFFFFF:#4FACFE><bold>THE BLIZZARD BEGINS!</bold></gradient>"
        announce-sub: "<gray>The Frost Queen is enraged"
        title: "<gradient:#FFFFFF:#4FACFE><bold>❄ BLIZZARD QUEEN ❄</bold></gradient>"
        effects: ["speed:1", "strength:1"]
        ability-speed: 1.4
        intensity: 1.8
        bar-color: WHITE
      - at: 25
        announce: "<gradient:#4FACFE:#1A237E><bold>ABSOLUTE ZERO!</bold></gradient>"
        announce-sub: "<gray>Everything freezes"
        title: "<gradient:#4FACFE:#1A237E><bold>☠ ABSOLUTE ZERO ☠</bold></gradient>"
        effects: ["speed:2", "strength:2", "resistance:1"]
        ability-speed: 1.9
        intensity: 2.5
        bar-color: PURPLE
    ability-every-seconds: 6
    abilities: [potion, spikes, ring, vortex, summon, leap]
    ability-names:
      potion: "<#A5F2F3><bold>⚠ FREEZING AURA!"
      spikes: "<#A5F2F3><bold>⚠ ICE SPIKES - MOVE!"
      ring: "<#A5F2F3><bold>⚠ FROST NOVA - JUMP!"
      vortex: "<#A5F2F3><bold>⚠ The blizzard pulls you in!"
      summon: "<#A5F2F3><bold>⚠ Her frozen guards arrive!"
      leap: "<#A5F2F3><bold>⚠ She blinks towards you!"
    potion: {effect: slowness, seconds: 5, level: 3, radius: 10}
    spikes: {damage: 8, radius: 2.0, block: PACKED_ICE}
    ring: {radius: 14, damage: 7, color: "#A5F2F3"}
    vortex: {strength: 0.7}
    summon: {entity: STRAY, amount: 3, max-alive: 9}
    min-damage-percent: 3
    xp: 800
    rewards:
      "1": {money: 300000, gems: 200, lootboxes: ["GEMS:LEGENDARY:1"], all-keys: 1}
      "2": {money: 175000, gems: 125, lootboxes: ["GEMS:EPIC:1"], random-keys: 2}
      "3": {money: 100000, gems: 75, lootboxes: ["GEMS:RARE:1"], random-keys: 1}
      participation: {money: 25000, gems: 20}
```
