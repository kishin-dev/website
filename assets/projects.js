// ============================================================================
//  KISHIN - every project on the site. Add a new project = add one entry here.
// ============================================================================
//  id        short name used in the link: project.html?p=<id>
//  type      Server | Plugin | Website | Tool | Mod | Other (used by the filter)
//  status    live | beta | dev | soon     (shown as a coloured badge)
//  icon      one character or emoji shown on the card
//  summary   one line on the card
//  about     paragraphs on the project page
//  features  bullet list on the project page
//  links     buttons: { label, url, primary? }
//  server    optional: Minecraft address -> live player count + copy button
//  featured  true = the big card at the top of the home page
// ============================================================================
window.KISHIN_PROJECTS = [
  {
    id: "skyblock",
    name: "Kishin Skyblock",
    type: "Server",
    status: "beta",
    icon: "鬼",
    featured: true,
    server: "5.9.95.62:25585",
    summary: "A yokai-themed Skyblock server with pets, world bosses, minions and a custom everything.",
    about: [
      "Kishin Skyblock is a Minecraft Skyblock server built around Japanese folklore. Start on a floating island, grow it into an empire and climb from Yurei to Kishin.",
      "Everything runs on our own core plugin, so the whole server feels like one game instead of a pile of plugins.",
    ],
    features: [
      "Islands with upgrades, missions, levels and weekly top rewards",
      "16 yokai pets with custom heads, merging, upgrades and hatching animations",
      "World bosses with phases, special attacks and crate-key rewards",
      "Minions, generators, skills, collections and custom enchants",
      "Crates, lootboxes, battlepass, chat games and island events",
      "Auction house, buy orders and player trading",
    ],
    links: [
      { label: "Copy IP & play", copy: "5.9.95.62:25585", primary: true },
      { label: "Store", url: "https://kishin-store.vercel.app" },
      { label: "Discord", url: "https://discord.gg/9KhSzXzwx3" },
    ],
  },
  {
    id: "core",
    name: "Kishin Core",
    type: "Plugin",
    status: "soon",
    icon: "✦",
    summary: "The all-in-one Skyblock core that powers Kishin Skyblock - coming to BuiltByBit.",
    about: [
      "Kishin Core is the plugin behind Kishin Skyblock: one Paper 1.21 plugin that replaces the fifteen to twenty plugins a Skyblock server usually needs.",
      "Every feature can be configured or switched off, messages and menus are fully customisable, and everything is built for performance.",
    ],
    features: [
      "Islands, minions, generators, pets, crates, bosses and events in one plugin",
      "Animated scoreboard and tab list with pulse, wave, shine and typewriter effects",
      "In-game /buy store with credits, ranks, monthly ranks and crate keys",
      "MySQL / PostgreSQL storage with async saving",
      "Paper 1.21, Java 21",
    ],
    links: [
      { label: "Coming soon to BuiltByBit", url: "", primary: true },
      { label: "Get notified on Discord", url: "https://discord.gg/9KhSzXzwx3" },
    ],
  },
  {
    id: "store",
    name: "Kishin Store",
    type: "Website",
    status: "live",
    icon: "🛒",
    summary: "The official store for Kishin Skyblock - credits, delivered in seconds.",
    about: [
      "Our own store website, built on Tebex. Buy credits here and spend them in game on ranks, crate keys, the monthly Kishin rank and the battlepass.",
    ],
    features: [
      "Credits delivered automatically, even when you're offline",
      "Secure checkout by Tebex",
      "Opens straight from the in-game /buy menu",
    ],
    links: [
      { label: "Open the store", url: "https://kishin-store.vercel.app", primary: true },
    ],
  },
];

// Site-wide links.
window.KISHIN_SITE = {
  discord: "https://discord.gg/9KhSzXzwx3",
  tagline: "Minecraft servers, plugins and tools - built with care.",
  about: [
    "Kishin is an independent studio making Minecraft experiences: servers people want to come back to, and the plugins and tools that power them.",
    "Everything we make is built from scratch, designed to feel polished, and supported for the long run.",
  ],
};
