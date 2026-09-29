// ============================================================================
//  KISHIN - everything the site shows. Edit this file, the pages follow.
// ============================================================================

window.KISHIN = {
  discord: "https://discord.gg/9KhSzXzwx3",
  github: "https://github.com/kishin-dev",

  // The story on the home page, one chapter per entry (top to bottom).
  story: [
    {
      mark: "壱",
      label: "Chapter I",
      title: "The Floating Island",
      text: "It started the way every Skyblock story starts: one tree, one block of dirt and nothing below but the void. We wanted a server where that small island could grow into something that feels like a world of its own - so we gave it one, built from Japanese folklore. Spirits, shrines, demons and gods.",
    },
    {
      mark: "弐",
      label: "Chapter II",
      title: "The Forge",
      text: "No stack of plugins could make it feel like one game, so we forged our own. Pets that hatch from eggs, bosses that rise with thunder, minions, skills, crates, a living scoreboard - one core, written from scratch, where every part knows about every other part.",
    },
    {
      mark: "参",
      label: "Chapter III",
      title: "The Seal",
      text: "What you build deserves protecting. KeyShin is the seal we're making for our own work: a licensing system that lives quietly inside every Kishin plugin and never gets in the way of the people who use it honestly.",
    },
    {
      mark: "肆",
      label: "Chapter IV",
      title: "The Realm Grows",
      text: "Kishin is not one project - it's a home for all of them. Every server, plugin and tool we make lives here, with its story and its documentation, open for anyone who wants to learn from it or build with it.",
    },
  ],

  // ------------------------------------------------------------------ projects
  //  id        used in links: project.html?p=<id>  and  docs.html?p=<id>
  //  type      Server | Plugin | Library | Website | Tool
  //  status    live | beta | dev | planned
  //  docs      true = has documentation in docs/<id>/
  //  repo      GitHub link ("" = not public yet)
  //  server    Minecraft address -> live status on the project page
  projects: [
    {
      id: "core",
      name: "Kishin Core",
      kanji: "核",
      type: "Plugin",
      status: "dev",
      docs: true,
      repo: "",
      summary: "The all-in-one Skyblock core behind Kishin Skyblock. One plugin instead of twenty.",
      story: [
        "Kishin Core is the heart of everything we run: a single Paper 1.21 plugin that replaces the fifteen to twenty plugins a Skyblock server usually glues together.",
        "Islands, minions, generators, pets, crates, world bosses, skills, collections, enchants, the auction house, a battlepass, chat games, an animated scoreboard and tab list - all sharing one database, one design and one config style.",
      ],
      features: [
        "Islands with upgrades, missions, levels, warps, coops and weekly top rewards",
        "16 yokai pets: custom heads, rarities, upgrades, merging and hatching animations",
        "World bosses with phases, special attacks and placement rewards",
        "Minions, generators, skills, collections and custom enchants",
        "Crates, lootboxes, daily rewards, challenges and a battlepass",
        "Auction house, buy orders, player trading and a sell wand",
        "Animated scoreboard & tab list: pulse, wave, shine, typewriter...",
        "Built-in ranks & permissions, moderation, chat games and announcements",
        "PostgreSQL, MySQL/MariaDB or SQLite with async saving",
      ],
      tech: ["Paper 1.21", "Java 21", "PostgreSQL / MySQL / SQLite", "PacketEvents"],
    },
    {
      id: "skyblock",
      name: "Kishin Skyblock",
      kanji: "鬼",
      type: "Server",
      status: "beta",
      docs: false,
      repo: "",
      server: "5.9.95.62:25585",
      summary: "Our Minecraft Skyblock server - the realm where every Kishin project is born and tested.",
      story: [
        "Kishin Skyblock is where the story began: a Skyblock server set in a world of Japanese folklore. Players climb from Yurei, a wandering ghost, all the way to Kishin, the demon god.",
        "It runs entirely on Kishin Core, so every new feature is played here first.",
      ],
      features: [
        "Yokai pets, world bosses and island events",
        "Five ranks from Yurei to Kishin",
        "Seasonal battlepass and weekly island rankings",
      ],
      tech: ["Minecraft Java 1.21"],
    },
    {
      id: "keyshin",
      name: "KeyShin",
      kanji: "鍵",
      type: "Library",
      status: "planned",
      docs: false,
      repo: "",
      summary: "Licensing for Kishin plugins - a Go license server and a tiny Java library.",
      story: [
        "KeyShin (鍵 key + 神 god) is the licensing system every future Kishin plugin will share: a fast license server written in Go, and a small Java library each plugin embeds.",
        "The goal: invisible for honest buyers, with offline grace periods so a short outage never breaks a server.",
      ],
      features: [
        "License keys bound to a server",
        "Go license server",
        "Java client library for Paper plugins",
        "Offline grace period",
      ],
      tech: ["Go", "Java 21"],
    },
  ],
};
