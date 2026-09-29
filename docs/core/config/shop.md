# Shop

`plugins/Kishin/shop.yml` - Shop categories, buy and sell prices.

> **Tip:** Kishin writes this file on first start and never overwrites it. When an update adds new options, compare your copy with the default below. Most files reload with `/kishin reload` (some features have their own reload command, noted at the top of the file).

## Default `shop.yml` (390 lines)

```yaml
# ============================================================================
#  Kishin shop  -  /shop
# ============================================================================
#  Players pick a category, then click an item:
#    Left-click  = buy  (opens the amount picker)
#    Right-click = sell (opens the amount picker)
#    Shift + Right-click = sell every one they carry
#
#  Every category:
#    name:        shown in the menu
#    color:       hex colour of the name
#    icon:        material shown in the /shop menu
#    slot:        where it sits in the /shop menu (inner slots 10-43, not on the edge)
#    description: lore lines under the name
#    items:       MATERIAL: {buy: <price for ONE>, sell: <money for ONE>}
#                 leave buy or sell out (or 0) to make an item sell-only / buy-only
#
#  Safety rules the plugin enforces no matter what is written here:
#    - sell is capped at buy, so buying and selling back can never make money
#    - only plain items are bought back: renamed, enchanted, damaged or special
#      items (lootboxes, custom fish) are never sold
#    - an item may only appear in one category
#
#  Change prices, then run /shop reload - no restart needed.
# ============================================================================

categories:
  blocks:
    name: "Building Blocks"
    color: "#C9A27E"
    icon: BRICKS
    slot: 20
    description:
      - "Stone, bricks, sand, glass"
      - "and everything to build with."
    items:
      COBBLESTONE:       {buy: 2, sell: 0.5}
      STONE:             {buy: 3, sell: 0.5}
      COBBLED_DEEPSLATE: {buy: 2, sell: 0.5}
      DEEPSLATE:         {buy: 3, sell: 0.5}
      GRANITE:           {buy: 3, sell: 0.5}
      DIORITE:           {buy: 3, sell: 0.5}
      ANDESITE:          {buy: 3, sell: 0.5}
      TUFF:              {buy: 4, sell: 0.5}
      CALCITE:           {buy: 6, sell: 1}
      SMOOTH_STONE:      {buy: 5}
      STONE_BRICKS:      {buy: 6}
      DEEPSLATE_BRICKS:  {buy: 7}
      BRICKS:            {buy: 10}
      MUD_BRICKS:        {buy: 8}
      SANDSTONE:         {buy: 5}
      RED_SANDSTONE:     {buy: 6}
      DIRT:              {buy: 1, sell: 0.25}
      COARSE_DIRT:       {buy: 2}
      GRASS_BLOCK:       {buy: 5}
      PODZOL:            {buy: 8}
      MUD:               {buy: 3}
      CLAY:              {buy: 6, sell: 1.5}
      SAND:              {buy: 3, sell: 1}
      RED_SAND:          {buy: 4, sell: 1}
      GRAVEL:            {buy: 3, sell: 1}
      GLASS:             {buy: 5}
      OBSIDIAN:          {buy: 100, sell: 25}
      SNOW_BLOCK:        {buy: 4}
      ICE:               {buy: 6}
      PACKED_ICE:        {buy: 15}
      BLUE_ICE:          {buy: 60}
      MOSS_BLOCK:        {buy: 8}

  wood:
    name: "Wood & Nature"
    color: "#6FBF4A"
    icon: OAK_LOG
    slot: 21
    description:
      - "Logs, saplings, flowers"
      - "and everything that grows."
    items:
      OAK_LOG:            {buy: 12, sell: 4}
      SPRUCE_LOG:         {buy: 12, sell: 4}
      BIRCH_LOG:          {buy: 12, sell: 4}
      JUNGLE_LOG:         {buy: 12, sell: 4}
      ACACIA_LOG:         {buy: 12, sell: 4}
      DARK_OAK_LOG:       {buy: 12, sell: 4}
      CHERRY_LOG:         {buy: 15, sell: 5}
      MANGROVE_LOG:       {buy: 15, sell: 5}
      BAMBOO_BLOCK:       {buy: 6}
      OAK_PLANKS:         {buy: 3}
      STICK:              {buy: 1}
      OAK_SAPLING:        {buy: 20}
      SPRUCE_SAPLING:     {buy: 20}
      BIRCH_SAPLING:      {buy: 20}
      JUNGLE_SAPLING:     {buy: 20}
      ACACIA_SAPLING:     {buy: 20}
      DARK_OAK_SAPLING:   {buy: 20}
      CHERRY_SAPLING:     {buy: 30}
      MANGROVE_PROPAGULE: {buy: 30}
      AZALEA:             {buy: 40}
      OAK_LEAVES:         {buy: 2}
      VINE:               {buy: 4}
      LILY_PAD:           {buy: 8}
      DANDELION:          {buy: 3}
      POPPY:              {buy: 3}
      BLUE_ORCHID:        {buy: 5}
      ALLIUM:             {buy: 5}
      CORNFLOWER:         {buy: 5}
      SUNFLOWER:          {buy: 8}
      BROWN_MUSHROOM:     {buy: 6, sell: 1.5}
      RED_MUSHROOM:       {buy: 6, sell: 1.5}

  ores:
    name: "Ores & Minerals"
    color: "#5DE2E7"
    icon: DIAMOND
    slot: 22
    description:
      - "Coal, iron, gold, diamonds"
      - "and the rarest of them all."
    items:
      COAL:            {buy: 20, sell: 6}
      CHARCOAL:        {buy: 18, sell: 5}
      RAW_COPPER:      {buy: 25, sell: 8}
      COPPER_INGOT:    {buy: 30, sell: 10}
      RAW_IRON:        {buy: 50, sell: 15}
      IRON_INGOT:      {buy: 60, sell: 18}
      RAW_GOLD:        {buy: 100, sell: 30}
      GOLD_INGOT:      {buy: 120, sell: 35}
      REDSTONE:        {buy: 15, sell: 4}
      LAPIS_LAZULI:    {buy: 20, sell: 6}
      QUARTZ:          {buy: 35, sell: 10}
      AMETHYST_SHARD:  {buy: 40, sell: 12}
      EMERALD:         {buy: 650, sell: 180}
      DIAMOND:         {buy: 800, sell: 220}
      NETHERITE_SCRAP: {buy: 3500, sell: 900}
      ANCIENT_DEBRIS:  {buy: 4500, sell: 1200}
      NETHERITE_INGOT: {buy: 15000, sell: 3700}
      COAL_BLOCK:      {buy: 180, sell: 54}
      COPPER_BLOCK:    {buy: 270, sell: 90}
      IRON_BLOCK:      {buy: 540, sell: 162}
      GOLD_BLOCK:      {buy: 1080, sell: 315}
      REDSTONE_BLOCK:  {buy: 135, sell: 36}
      LAPIS_BLOCK:     {buy: 180, sell: 54}
      AMETHYST_BLOCK:  {buy: 160, sell: 48}
      EMERALD_BLOCK:   {buy: 5850, sell: 1620}
      DIAMOND_BLOCK:   {buy: 7200, sell: 1980}

  farming:
    name: "Farming"
    color: "#E8C547"
    icon: WHEAT
    slot: 23
    description:
      - "Seeds, crops and everything"
      - "for your island farms."
    items:
      WHEAT_SEEDS:    {buy: 2, sell: 0.25}
      WHEAT:          {buy: 8, sell: 3}
      CARROT:         {buy: 6, sell: 2}
      POTATO:         {buy: 6, sell: 2}
      BEETROOT_SEEDS: {buy: 2, sell: 0.25}
      BEETROOT:       {buy: 8, sell: 3}
      MELON_SEEDS:    {buy: 10}
      MELON_SLICE:    {buy: 6, sell: 2}
      MELON:          {buy: 18, sell: 12}
      PUMPKIN_SEEDS:  {buy: 10}
      PUMPKIN:        {buy: 15, sell: 5}
      SUGAR_CANE:     {buy: 10, sell: 3}
      CACTUS:         {buy: 8, sell: 2}
      COCOA_BEANS:    {buy: 10, sell: 3}
      NETHER_WART:    {buy: 12, sell: 4}
      SWEET_BERRIES:  {buy: 6, sell: 1.5}
      GLOW_BERRIES:   {buy: 10, sell: 2.5}
      BAMBOO:         {buy: 4, sell: 1}
      KELP:           {buy: 4, sell: 1}
      BONE_MEAL:      {buy: 3, sell: 0.5}
      HAY_BLOCK:      {buy: 72, sell: 27}
      SUGAR:          {buy: 4, sell: 1}
      EGG:            {buy: 5, sell: 1}
      HONEYCOMB:      {buy: 15, sell: 4}
      COMPOSTER:      {buy: 20}

  food:
    name: "Food"
    color: "#FF7F50"
    icon: COOKED_BEEF
    slot: 24
    description:
      - "Keep your hunger bar full"
      - "on those long nights."
    items:
      BREAD:                  {buy: 15, sell: 4}
      APPLE:                  {buy: 15, sell: 4}
      GOLDEN_APPLE:           {buy: 1000, sell: 250}
      ENCHANTED_GOLDEN_APPLE: {buy: 25000, sell: 5000}
      GOLDEN_CARROT:          {buy: 80, sell: 20}
      BEEF:                   {buy: 12, sell: 3}
      COOKED_BEEF:            {buy: 20, sell: 5}
      PORKCHOP:               {buy: 12, sell: 3}
      COOKED_PORKCHOP:        {buy: 20, sell: 5}
      CHICKEN:                {buy: 10, sell: 2}
      COOKED_CHICKEN:         {buy: 15, sell: 4}
      MUTTON:                 {buy: 10, sell: 2}
      COOKED_MUTTON:          {buy: 15, sell: 4}
      COOKED_COD:             {buy: 12, sell: 3}
      COOKED_SALMON:          {buy: 14, sell: 3}
      BAKED_POTATO:           {buy: 10, sell: 3}
      PUMPKIN_PIE:            {buy: 25, sell: 6}
      COOKIE:                 {buy: 5, sell: 1}
      CAKE:                   {buy: 60, sell: 12}
      MUSHROOM_STEW:          {buy: 20}
      DRIED_KELP:             {buy: 3}
      HONEY_BOTTLE:           {buy: 30}

  mobs:
    name: "Mob Drops"
    color: "#A0A0A0"
    icon: BONE
    slot: 29
    description:
      - "Loot from every mob"
      - "in the overworld."
    items:
      ROTTEN_FLESH:      {buy: 5, sell: 1}
      BONE:              {buy: 8, sell: 2}
      STRING:            {buy: 10, sell: 3}
      SPIDER_EYE:        {buy: 12, sell: 3}
      GUNPOWDER:         {buy: 20, sell: 5}
      ARROW:             {buy: 4, sell: 1}
      ENDER_PEARL:       {buy: 150, sell: 40}
      SLIME_BALL:        {buy: 25, sell: 6}
      LEATHER:           {buy: 15, sell: 4}
      FEATHER:           {buy: 8, sell: 2}
      RABBIT_HIDE:       {buy: 12, sell: 3}
      RABBIT_FOOT:       {buy: 60, sell: 15}
      PHANTOM_MEMBRANE:  {buy: 60, sell: 15}
      INK_SAC:           {buy: 10, sell: 3}
      GLOW_INK_SAC:      {buy: 25, sell: 6}
      BREEZE_ROD:        {buy: 150, sell: 35}
      TOTEM_OF_UNDYING:  {buy: 5000, sell: 800}
      EXPERIENCE_BOTTLE: {buy: 50}

  nether:
    name: "Nether"
    color: "#D62839"
    icon: NETHERRACK
    slot: 30
    description:
      - "Blocks and drops from the"
      - "fiery depths of the Nether."
    items:
      NETHERRACK:            {buy: 2, sell: 0.5}
      SOUL_SAND:             {buy: 8, sell: 2}
      SOUL_SOIL:             {buy: 8, sell: 2}
      NETHER_BRICKS:         {buy: 10, sell: 2}
      RED_NETHER_BRICKS:     {buy: 14}
      BASALT:                {buy: 5, sell: 1}
      BLACKSTONE:            {buy: 5, sell: 1}
      GILDED_BLACKSTONE:     {buy: 200, sell: 40}
      MAGMA_BLOCK:           {buy: 20, sell: 4}
      GLOWSTONE_DUST:        {buy: 18, sell: 5}
      GLOWSTONE:             {buy: 72, sell: 18}
      QUARTZ_BLOCK:          {buy: 140, sell: 36}
      CRIMSON_STEM:          {buy: 15, sell: 4}
      WARPED_STEM:           {buy: 15, sell: 4}
      CRIMSON_FUNGUS:        {buy: 20}
      WARPED_FUNGUS:         {buy: 20}
      NETHER_WART_BLOCK:     {buy: 30, sell: 6}
      SHROOMLIGHT:           {buy: 40, sell: 8}
      CRYING_OBSIDIAN:       {buy: 150, sell: 35}
      BLAZE_ROD:             {buy: 120, sell: 30}
      GHAST_TEAR:            {buy: 200, sell: 50}
      MAGMA_CREAM:           {buy: 40, sell: 10}
      WITHER_SKELETON_SKULL: {buy: 5000, sell: 1000}

  endocean:
    name: "End & Ocean"
    color: "#B084F5"
    icon: END_STONE
    slot: 31
    description:
      - "Treasures from the End"
      - "and the deep ocean."
    items:
      END_STONE:           {buy: 10, sell: 2}
      END_STONE_BRICKS:    {buy: 14}
      PURPUR_BLOCK:        {buy: 20, sell: 4}
      CHORUS_FRUIT:        {buy: 12, sell: 3}
      POPPED_CHORUS_FRUIT: {buy: 16, sell: 4}
      CHORUS_FLOWER:       {buy: 80}
      ENDER_EYE:           {buy: 250, sell: 50}
      SHULKER_SHELL:       {buy: 1500, sell: 300}
      DRAGON_BREATH:       {buy: 300, sell: 60}
      PRISMARINE_SHARD:    {buy: 20, sell: 5}
      PRISMARINE_CRYSTALS: {buy: 30, sell: 8}
      PRISMARINE:          {buy: 80, sell: 18}
      SEA_LANTERN:         {buy: 250, sell: 40}
      SPONGE:              {buy: 500, sell: 100}
      SEA_PICKLE:          {buy: 15, sell: 3}
      NAUTILUS_SHELL:      {buy: 400, sell: 80}
      HEART_OF_THE_SEA:    {buy: 8000, sell: 1500}
      TURTLE_SCUTE:        {buy: 200, sell: 40}
      DRIED_KELP_BLOCK:    {buy: 40, sell: 9}

  redstone:
    name: "Redstone & Utility"
    color: "#FF5555"
    icon: REDSTONE
    slot: 32
    description:
      - "Contraptions, farms' best friends"
      - "and handy tools."
    items:
      REDSTONE_TORCH:    {buy: 10}
      REPEATER:          {buy: 30}
      COMPARATOR:        {buy: 60}
      PISTON:            {buy: 50}
      STICKY_PISTON:     {buy: 70}
      OBSERVER:          {buy: 60}
      HOPPER:            {buy: 150}
      DROPPER:           {buy: 30}
      DISPENSER:         {buy: 40}
      LEVER:             {buy: 5}
      TRIPWIRE_HOOK:     {buy: 15}
      DAYLIGHT_DETECTOR: {buy: 60}
      NOTE_BLOCK:        {buy: 25}
      TARGET:            {buy: 30}
      SLIME_BLOCK:       {buy: 150, sell: 40}
      HONEY_BLOCK:       {buy: 150, sell: 30}
      RAIL:              {buy: 10}
      POWERED_RAIL:      {buy: 60}
      TNT:               {buy: 80}
      CHEST:             {buy: 15}
      BARREL:            {buy: 15}
      FURNACE:           {buy: 15}
      BLAST_FURNACE:     {buy: 100}
      SMOKER:            {buy: 40}
      CRAFTING_TABLE:    {buy: 8}
      TORCH:             {buy: 2}
      BUCKET:            {buy: 80}
      WATER_BUCKET:      {buy: 100}
      LAVA_BUCKET:       {buy: 150}
      BOOK:              {buy: 15}
      BOOKSHELF:         {buy: 60}
      ENCHANTING_TABLE:  {buy: 1500}
      ANVIL:             {buy: 800}
      ENDER_CHEST:       {buy: 400}
      NAME_TAG:          {buy: 500}
      SADDLE:            {buy: 400}

  decoration:
    name: "Decoration & Colors"
    color: "#FF79C6"
    icon: PINK_DYE
    slot: 33
    description:
      - "Dyes, wool, lights and"
      - "everything to make it pretty."
    items:
      WHITE_DYE:             {buy: 5}
      ORANGE_DYE:            {buy: 5}
      MAGENTA_DYE:           {buy: 5}
      LIGHT_BLUE_DYE:        {buy: 5}
      YELLOW_DYE:            {buy: 5}
      LIME_DYE:              {buy: 5}
      PINK_DYE:              {buy: 5}
      GRAY_DYE:              {buy: 5}
      LIGHT_GRAY_DYE:        {buy: 5}
      CYAN_DYE:              {buy: 5}
      PURPLE_DYE:            {buy: 5}
      BLUE_DYE:              {buy: 5}
      BROWN_DYE:             {buy: 5}
      GREEN_DYE:             {buy: 5}
      RED_DYE:               {buy: 5}
      BLACK_DYE:             {buy: 5}
      WHITE_WOOL:            {buy: 8}
      WHITE_CONCRETE:        {buy: 6}
      WHITE_CONCRETE_POWDER: {buy: 4}
      TERRACOTTA:            {buy: 6}
      GLASS_PANE:            {buy: 2}
      LANTERN:               {buy: 15}
      SOUL_LANTERN:          {buy: 15}
      CANDLE:                {buy: 10}
      FLOWER_POT:            {buy: 5}
      PAINTING:              {buy: 15}
      ITEM_FRAME:            {buy: 15}
      GLOW_ITEM_FRAME:       {buy: 30}
      ARMOR_STAND:           {buy: 40}
      CHAIN:                 {buy: 10}
      CAMPFIRE:              {buy: 20}
      BELL:                  {buy: 250}
```
