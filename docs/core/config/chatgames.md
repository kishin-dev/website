# Chat games

`plugins/Kishin/chatgames.yml` - The ten chat games, schedule, rewards and design.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `chatgames.yml` (335 lines)

```yaml
# ============================================================================
#  KISHIN CHAT GAMES
#  Every <interval-seconds> a random game pops up in chat. First correct answer
#  wins. Winning rounds in a row builds a win streak (milestones below).
#  Stats (wins, best streak, fastest answer) live in the chatgame_stats table.
#
#  Commands: /chatgames [stats [player] | top [wins|streak|fastest] | toggle]
#  Staff (kishin.staff.chatgames): /chatgames start [game] | stop
#  /kishin reload re-reads this file.
#
#  Text is MiniMessage. In design lines:
#    {bar}       full-width gradient rule in the game's colours
#    <center>    at the start of a line = centered in chat
#    {from} {to} the game's two colours (use in <gradient:{from}:{to}>)
#    {question}  the game's own question lines (games.<game>.question)
# ============================================================================
enabled: true
interval-seconds: 600        # a game every 10 minutes
first-delay-seconds: 180     # first game after a restart
min-players: 2               # don't start with fewer players online
no-repeat: true              # never the same game twice in a row

difficulty-labels:
  easy: "<#43E97B>● Easy"
  medium: "<#FFD166>● Medium"
  hard: "<#FF6B6B>● Hard"
  insane: "<gradient:#FF0055:#B388FF>● Insane</gradient>"

design:
  bar:
    from: "#7B2CBF"
    to: "#00E5FF"
    width: 64
  sounds:
    start: BLOCK_NOTE_BLOCK_PLING
    hint: BLOCK_NOTE_BLOCK_HAT
    win: UI_TOAST_CHALLENGE_COMPLETE
    timeout: BLOCK_NOTE_BLOCK_BASS
    milestone: ENTITY_PLAYER_LEVELUP
    private: BLOCK_NOTE_BLOCK_HAT

  start:
    - ""
    - "{bar}"
    - "<center><gradient:{from}:{to}><bold>✦ CHAT GAME ✦</bold></gradient>"
    - "<center><white>{game} <dark_gray>• {difficulty}"
    - ""
    - "{question}"
    - ""
    - "<center><#A0AAB8>Prize <dark_gray>» {reward}"
    - "<center><dark_gray>You have <#A0AAB8>{seconds}s</#A0AAB8> • answer in chat"
    - "{bar}"
    - ""

  hint:
    - "<center><gradient:{from}:{to}><bold>✦ CLUE #{number}</bold></gradient> <white>{hint}"

  win:
    - ""
    - "{bar}"
    - "<center><gradient:#FFD700:#FF8C00><bold>✦ WE HAVE A WINNER ✦</bold></gradient>"
    - ""
    - "<center><white><bold>{player}</bold> <#A0AAB8>got it in <white>{time}s"
    - "<center><#A0AAB8>Answer <dark_gray>» <white>{answer}"
    - "<center><#A0AAB8>Prize <dark_gray>» {reward}"
    - "{streak_line}"
    - "{broken_line}"
    - "{bar}"
    - ""

  timeout:
    - ""
    - "{bar}"
    - "<center><#FF6B6B><bold>✦ TIME'S UP ✦</bold>"
    - "<center><#A0AAB8>Nobody got it! The answer was <white>{answer}"
    - "{bar}"
    - ""

  cancelled:
    - "<center><#A0AAB8>The chat game was cancelled. The answer was <white>{answer}"

  stats:
    - ""
    - "<center><gradient:#7B2CBF:#00E5FF><bold>✦ CHAT GAMES ✦</bold></gradient> <white>{player}"
    - "<center><#A0AAB8>Wins <dark_gray>» <white>{wins}   <#A0AAB8>Streak <dark_gray>» <white>{current}"
    - "<center><#A0AAB8>Best streak <dark_gray>» <white>{best}   <#A0AAB8>Fastest <dark_gray>» <white>{fastest}"
    - "<center><dark_gray>/chatgames top • /chatgames toggle"
    - ""

texts:
  streak: "<center><gradient:#FF8C42:#FFD166>⚡ {player} is on a {streak} win streak!</gradient>"
  streak-broken: "<center><#FF6B6B>✖ <white>{player}</white> ended <white>{holder}</white>'s streak of {streak}!"
  milestone: "<center><gradient:#FFD700:#FF8C00><bold>⚡ {streak} WINS IN A ROW! ⚡</bold></gradient>\n<center><white>{player} <#A0AAB8>earned a bonus <dark_gray>» {reward}"
  hangman-hit: "<center><#43E97B>✔ <white>{player}</white> found <white><bold>{letter}</bold></white> <dark_gray>» <white><bold>{masked}</bold> <dark_gray>• {lives}"
  hangman-miss: "<center><#FF6B6B>✖ <white>{player}</white> guessed <white><bold>{letter}</bold></white> <dark_gray>» <white><bold>{masked}</bold> <dark_gray>• {lives}"
  no-letters: "<#FF6B6B>You used all your letters - try guessing the whole word!"
  already-guessed: "<#A0AAB8>That letter was already guessed."
  number-higher: "<#A0AAB8>✦ <white>{guess}</white> is too <#43E97B><bold>LOW</bold></#43E97B><#A0AAB8>, go higher! <dark_gray>({left} tries left)"
  number-lower: "<#A0AAB8>✦ <white>{guess}</white> is too <#FF6B6B><bold>HIGH</bold></#FF6B6B><#A0AAB8>, go lower! <dark_gray>({left} tries left)"
  no-tries: "<#FF6B6B>You used all your guesses this round."
  shown: "<#43E97B>✔ Chat games are visible again."
  hidden: "<#A0AAB8>Chat games hidden. <dark_gray>/chatgames toggle to show them again."
  top-header: "<gradient:#7B2CBF:#00E5FF><bold>✦ CHAT GAMES ✦</bold></gradient> <#A0AAB8>{title}"
  top-wins: "Most wins"
  top-streak: "Best streaks"
  top-fastest: "Fastest answers"
  top-empty: "<#A0AAB8>Nobody has won a chat game yet."
  unknown-game: "<#FF6B6B>Unknown game. Games: quick-math, who-am-i, word-stop, word-guesser, random-characters, reverse, fill-out, number-range, hangman, crafting"
  already-running: "<#FF6B6B>A game is already running."
  not-running: "<#A0AAB8>No game is running."
  no-permission: "<#FF6B6B>You don't have permission to do that."

# ----------------------------------------------------------------------------
# Win streaks: rewards when someone reaches exactly this many wins in a row.
# ----------------------------------------------------------------------------
streaks:
  enabled: true
  announce-broken-from: 3     # "X ended Y's streak" once a streak was at least this long
  milestones:
    3:
      gems: 10
    5:
      money: 25000
      gems: 20
    10:
      gems: 50
      commands: ["lootbox give {player} gems epic 1"]
      label: "<light_purple>Epic Gems Lootbox"
    15:
      gems: 100
      commands: ["lootbox give {player} gems legendary 1"]
      label: "<gold>Legendary Gems Lootbox"

# ----------------------------------------------------------------------------
# Games. Each: enabled, weight (how often it's picked), difficulty, seconds,
# colours, question lines, rewards (one is picked by weight when the round starts;
# money, gems, commands with {player}, label = how command rewards are shown).
# ----------------------------------------------------------------------------
games:
  quick-math:
    enabled: true
    name: "Quick Math"
    weight: 20
    difficulty: medium
    level: medium            # easy (a + b), medium (a × b + c), hard (a × b - c × d)
    seconds: 45
    color-from: "#00C6FF"
    color-to: "#0072FF"
    question:
      - "<center><#A0AAB8>Solve this as fast as you can"
      - "<center><white><bold>{expression} = ?"
    rewards:
      - {weight: 70, money: 2500, gems: 2}
      - {weight: 30, money: 5000, gems: 3}

  who-am-i:
    enabled: true
    name: "Who Am I?"
    weight: 12
    difficulty: hard
    seconds: 75
    clue-every-seconds: 15   # a new clue every 15s
    color-from: "#C77DFF"
    color-to: "#FFA3E3"
    question:
      - "<center><#A0AAB8>Guess what I am from the clues"
      - "<center><gradient:{from}:{to}><bold>✦ CLUE #1</bold></gradient> <white>{clue}"
    rewards:
      - {weight: 60, money: 7500, gems: 8}
      - {weight: 40, money: 5000, gems: 5, commands: ["lootbox give {player} money rare 1"], label: "<#FFD166>Rare Money Lootbox"}

  word-stop:
    enabled: true
    name: "Word Stop"
    weight: 15
    difficulty: easy
    seconds: 30
    color-from: "#43E97B"
    color-to: "#38F9D7"
    question:
      - "<center><#A0AAB8>First to type this word wins"
      - "<center><white><bold>{word}"
    rewards:
      - {weight: 100, money: 2000, gems: 1}

  word-guesser:
    enabled: true
    name: "Word Guesser"
    weight: 15
    difficulty: medium
    seconds: 60
    color-from: "#FFB703"
    color-to: "#FB8500"
    question:
      - "<center><#A0AAB8>Unscramble the letters"
      - "<center><white><bold>{scrambled}"
    rewards:
      - {weight: 70, money: 4000, gems: 3}
      - {weight: 30, money: 6000, gems: 5}

  random-characters:
    enabled: true
    name: "Random Characters"
    weight: 12
    difficulty: medium
    length: 8
    seconds: 40
    color-from: "#F72585"
    color-to: "#7209B7"
    question:
      - "<center><#A0AAB8>Type this exactly (capitals matter)"
      - "<center><white><bold>{characters}"
    rewards:
      - {weight: 100, money: 3500, gems: 3}

  reverse:
    enabled: true
    name: "Reverse"
    weight: 12
    difficulty: medium
    seconds: 45
    color-from: "#4FACFE"
    color-to: "#00F2FE"
    question:
      - "<center><#A0AAB8>This word is backwards, type it the right way"
      - "<center><white><bold>{reversed}"
    rewards:
      - {weight: 100, money: 3500, gems: 3}

  fill-out:
    enabled: true
    name: "Fill Out"
    weight: 12
    difficulty: medium
    hidden: 0.45             # share of letters hidden
    seconds: 60
    color-from: "#FF9A00"
    color-to: "#FFE259"
    question:
      - "<center><#A0AAB8>Fill in the missing letters"
      - "<center><white><bold>{blanks}"
    rewards:
      - {weight: 100, money: 4000, gems: 4}

  number-range:
    enabled: true
    name: "Number Range"
    weight: 8
    difficulty: hard
    max: 100
    tries-per-player: 5
    seconds: 60
    color-from: "#00F5D4"
    color-to: "#4361EE"
    question:
      - "<center><#A0AAB8>I'm thinking of a number from <white>1</white> to <white>{max}</white>"
      - "<center><#A0AAB8>Guesses are private • <white>{tries}</white> tries each"
    rewards:
      - {weight: 60, money: 8000, gems: 8}
      - {weight: 40, money: 5000, gems: 5, commands: ["lootbox give {player} gems uncommon 1"], label: "<green>Uncommon Gems Lootbox"}

  hangman:
    enabled: true
    name: "Hangman"
    weight: 8
    difficulty: insane
    lives: 7
    letters-per-player: 3    # each player can guess this many letters (the whole word any time)
    seconds: 120
    color-from: "#FF0055"
    color-to: "#B388FF"
    question:
      - "<center><white><bold>{masked}"
      - "<center><#A0AAB8>Type a letter or the whole word • {lives}"
      - "<center><dark_gray>Max {tries} letters per player"
    rewards:
      - {weight: 50, money: 12000, gems: 12}
      - {weight: 35, money: 8000, gems: 10, commands: ["lootbox give {player} gems rare 1"], label: "<aqua>Rare Gems Lootbox"}
      - {weight: 15, money: 5000, gems: 5, commands: ["lootbox give {player} gems epic 1"], label: "<light_purple>Epic Gems Lootbox"}

  crafting:
    enabled: true
    name: "Crafting Race"
    weight: 8
    difficulty: hard
    seconds: 90
    color-from: "#A1887F"
    color-to: "#FFD39A"
    question:
      - "<center><#A0AAB8>First to craft this item wins"
      - "<center><white><bold>{item}"
    items: [CRAFTING_TABLE, CHEST, FURNACE, BARREL, BOOKSHELF, LADDER, TORCH, STONE_PICKAXE, IRON_PICKAXE, BUCKET,
            SHIELD, BOW, FISHING_ROD, PAINTING, ITEM_FRAME, HOPPER, BREAD, CAKE, COMPASS, CLOCK, LANTERN, CAMPFIRE,
            OAK_BOAT, SMOKER, COMPOSTER, STONECUTTER, ARMOR_STAND, JUKEBOX, NOTE_BLOCK, GLASS_BOTTLE]
    rewards:
      - {weight: 60, money: 8000, gems: 6}
      - {weight: 40, money: 5000, gems: 5, commands: ["lootbox give {player} money rare 1"], label: "<#FFD166>Rare Money Lootbox"}

# ----------------------------------------------------------------------------
# Words for word-stop, word-guesser, reverse, fill-out and hangman
# (a game can have its own "words:" list instead).
# ----------------------------------------------------------------------------
words: [diamond, emerald, creeper, skeleton, enderman, obsidian, netherite, redstone, pickaxe, furnace, beacon,
        elytra, trident, villager, pillager, blaze, ghast, phantom, shulker, axolotl, allay, warden, sniffer,
        lantern, anvil, cauldron, composter, observer, piston, hopper, dispenser, minecart, saddle, lead, compass,
        spyglass, amethyst, copper, deepslate, bamboo, cherry, mangrove, cactus, pumpkin, melon, wheat, carrot,
        potato, beetroot, cookie, island, skyblock, minion, generator, crystal, lightning, portal, stronghold,
        fortress, bastion, dragon, wither, kishin, auction, treasure, lootbox]

# ----------------------------------------------------------------------------
# Who Am I riddles: clues are revealed one by one; aliases also count.
# ----------------------------------------------------------------------------
who-am-i:
  - answer: Creeper
    clues: ["I'm green and I don't like hugs.", "I hiss before I say goodbye.", "Cats scare me away."]
  - answer: Enderman
    aliases: [ender man]
    clues: ["Don't look me in the eyes.", "I love carrying blocks around.", "Water is my worst enemy."]
  - answer: Villager
    clues: ["Hmm... hrmm.", "I trade emeralds all day.", "Zombies love to visit my village at night."]
  - answer: Axolotl
    clues: ["I'm pink (usually) and live underwater.", "I play dead when I'm hurt.", "Lush caves are my home."]
  - answer: Beacon
    clues: ["I shoot a beam into the sky.", "I need a pyramid to work.", "A nether star is my heart."]
  - answer: Elytra
    clues: ["I give you wings.", "I'm found at the end of the End.", "Fireworks make me fly faster."]
  - answer: Warden
    clues: ["I'm blind but I hear everything.", "I live in the deep dark.", "Sculk shriekers call me."]
  - answer: Anvil
    clues: ["I'm heavy and I fall.", "I repair and rename your tools.", "I get damaged the more you use me."]
  - answer: Ghast
    clues: ["I float and I cry.", "My fireballs can be hit back.", "My tears make regeneration potions."]
  - answer: Piston
    aliases: [sticky piston]
    clues: ["I push blocks around.", "Redstone makes me move.", "Add a slime ball and I pull too."]
```
