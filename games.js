const games = [
  { name: "Ring Runner", id: "playringrunner", thumbnail: "ringrunner.png", description: "Run through rings and avoid obstacles!", categories: ["Platformer", "Arcade"], added: "2026-01-02", featured: true },
  { name: "Undertale", id: "undertale", thumbnail: "undertale.png", description: "A legendary indie RPG.", categories: ["RPG", "Undertale"], added: "2026-01-01" },
  { name: "Jevil Fight Simulator", id: "jevil", thumbnail: "jevilfight.png", description: "Battle Jevil!", categories: ["Boss Fight", "Undertale"], added: "2025-12-30" },
  { name: "Asgore Fight Simulator", id: "asgore", thumbnail: "asgore.webp", description: "Fight Asgore!", categories: ["Boss Fight", "Undertale"], added: "2025-12-28" },
  { name: "Diamond Clicker", id: "diamond", thumbnail: "diamond.png", description: "Mine diamonds to spend more diamonds!", categories: ["Idle", "Minecraft"], added: "2026-02-28" },
  { name: "Silk", id: "silk", thumbnail: "silk.png", description: "Make vibrant art with Silk!", categories: ["Art", "Creative"], added: "2026-03-03" },
  { name: "Asriel Dreemurr Fight Simulator", id: "asriel", thumbnail: "asriel.png", description: "Face off against the God of Hyperdeath himself, Asriel Dreemurr!", categories: ["Boss Fight", "Undertale"], added: "2026-03-07" },
  { name: "Minecraft Parkour 1", id: "mcparkour1", thumbnail: "mcparkour1.png", description: "Run, jump, and adventure your way through the world of Minecraft!", categories: ["Minecraft", "Platformer"], added: "2026-03-26" },
  { name: "Minecraft Parkour 2", id: "mcparkour2", thumbnail: "mcparkour2.png", description: "Run, jump, and adventure your way through the world of Minecraft!", categories: ["Minecraft", "Platformer"], added: "2026-03-26" },
  { name: "Minecraft Parkour GOD MODE", id: "mcparkourGODMODE", thumbnail: "mcparkourGODMODE.png", description: "Run, jump, and adventure your way through the world of Minecraft!", categories: ["Minecraft", "Platformer"], added: "2026-03-26" },
  { name: "Child PFP Trend Creator", id: "cptc", thumbnail: "cptc.png", description: "Customize your little goober and its background to make a creative new PFP!", categories: ["Creative", "Art"], added: "2026-03-26" },
  { name: "TADC: GATHER THE GLOINKS!", id: "gloinks", thumbnail: "gloinks.png", description: "Like the title said, GATHER THE GLOINKS!", categories: ["Digital Circus"], added: "2026-03-26" },
  { name: "Google Snake Game", id: "playsnake", thumbnail: "snake.png", description: "Play the classic Google Snake game!", categories: ["Arcade", "Classics"], added: "2026-03-26" },
  { name: "Bad Time Simulator", id: "sansfight", thumbnail: "sansfight.png", description: "Fight Sans!", categories: ["Boss Fight", "Undertale"], added: "2026-03-28" },
  { name: "Chess", id: "clchess", thumbnail: "chess.png", description: "Play chess!", categories: ["Strategy"], added: "2026-04-01" },
  { name: "Unfair Undyne", id: "clunfairundyne", thumbnail: "undyne.png", description: "Spar with Undyne!", categories: ["Boss Fight", "Undertale"], added: "2026-04-03" },
  { name: "We Become What We Behold", id: "wbwwb", thumbnail: "wbwwb.png", description: "A game about cycles.", categories: ["Indie"], added: "2026-04-03" },
  { name: "TADC Mainframe Simulator", id: "tadc-simulator", thumbnail: "tadc-simulator.png", description: "Recreate the computer scene from Episode 8! Spoilers included.", categories: ["Digital Circus"], added: "2026-04-11" },
  { name: "Tomb of the Mask", id: "tombofthemask", thumbnail: "tomb-of-the-mask.png", description: "Move through fast-paced mazes, avoiding traps.", categories: ["Arcade"], added: "2026-04-11" },

  { name: "Undertale Yellow", id: "clundertaleyellow", thumbnail: "undertale-yellow.png", description: "A fan-made Undertale story focused on the yellow soul.", categories: ["Undertale", "RPG"], added: "2026-04-12" },
  { name: "There is No Game", id: "clthereisnofile", thumbnail: "there-is-no-game.png", description: "A puzzle experience built around interacting in unexpected ways.", categories: ["Puzzle", "Indie"], added: "2026-04-11" },
  { name: "Tag", id: "cltagc3", thumbnail: "tag.png", description: "A movement-based platformer focused on speed.", categories: ["Platformer"], added: "2026-04-13" },
  { name: "Swords and Souls", id: "clswordsandsouls", thumbnail: "swords-and-souls.png", description: "Train your character and improve stats through minigames.", categories: ["RPG"], added: "2026-04-11" },
  { name: "Spacebar Clicker", id: "clspacebarclicker", thumbnail: "spacebar-clicker.png", description: "Press the spacebar to gain points and unlock upgrades.", categories: ["Idle"], added: "2026-04-12" },
  { name: "Snow Rider 3D", id: "clsnowrider", thumbnail: "snow-rider-3d.png", description: "Ride down snowy slopes while avoiding obstacles.", categories: ["Arcade", "Sports"], added: "2026-04-11" },
  { name: "Slither.io", id: "clslitherio", thumbnail: "slither-io.png", description: "Grow your snake by collecting orbs and outlasting others.", categories: ["Multiplayer", "Arcade"], added: "2026-04-13" },
  { name: "Ragdoll Archers", id: "clragdollarchers", thumbnail: "ragdoll-archers.png", description: "A physics-based archery game.", categories: ["Action"], added: "2026-04-12" },
  { name: "OvO", id: "clovofixed", thumbnail: "ovo.png", description: "A platformer focused on precise movement and timing.", categories: ["Platformer"], added: "2026-04-11" },
  { name: "Google Dinosaur Game", id: "clgoogledino", thumbnail: "google-dino.png", description: "An endless runner jump over obstacles.", categories: ["Arcade", "Classics"], added: "2026-04-11" },
  { name: "Duck Life", id: "clducklife", thumbnail: "duck-life.png", description: "Train a duck in different skills to compete in races.", categories: ["Simulation", "Duck Life"], added: "2026-04-12" },
  { name: "Dig to China", id: "cldigtochina", thumbnail: "dig-to-china.png", description: "Dig downward while collecting resources.", categories: ["Idle"], added: "2026-04-13" },
  { name: "Deltarune", id: "cldeltarune", thumbnail: "deltarune.png", description: "A story-driven RPG with turn-based combat.", categories: ["Deltarune", "RPG"], added: "2026-04-11" },
  { name: "Bad Monday Simulator", id: "clbadmondaysimulator", thumbnail: "bad-monday-simulator.png", description: "A Garfield-themed battle inspired by Undertale.", categories: ["Boss Fight", "Undertale"], added: "2026-04-12" },
  { name: "Backyard Baseball", id: "clbackyardbaseball", thumbnail: "backyard-baseball.png", description: "A casual baseball game with simple controls.", categories: ["Sports"], added: "2026-04-13" },
  { name: "2048", id: "cl2048", thumbnail: "2048.png", description: "Combine matching numbers to reach higher values.", categories: ["Puzzle"], added: "2026-04-11" },
  { name: "10 Minutes Till Dawn", id: "cl10minutestilldawn", thumbnail: "10minutestilldawn.png", description: "Survive waves of enemies while upgrading abilities.", categories: ["Action"], added: "2026-04-12" },
  { name: "Cookie Clicker", id: "cookieclicker", thumbnail: "cookieclicker.png", description: "Click the big cookie.", categories: ["Idle"], added: "2026-04-14" },
  { name: "Google Baseball",
    id: "clgooglebaseball",
    thumbnail: "google-baseball.png",
    description: "Play the classic Google Baseball game!",
    categories: ["Arcade", "Sports", "Classics"],
    added: "2026-04-17",
    new: true
  },
  { name: "Duck Life 2",
  id: "clducklife2",
  thumbnail: "ducklife2.png",
  description: "Train your duck and compete in new challenges.",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17",
  new: true
},
{ name: "Duck Life 3",
  id: "clducklife3",
  thumbnail: "ducklife3.png",
  description: "Genetically modify ducks and race them.",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17",
  new: true
},
{ name: "Duck Life 4",
  id: "clducklife4",
  thumbnail: "ducklife4.png",
  description: "Train your duck to become a tournament champion.",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17",
  new: true
},
{ name: "Duck Life 5",
  id: "clducklife5",
  thumbnail: "ducklife5.png",
  description: "Hunt for treasure with your duck!",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17",
  new: true
},
  { name: "Burrito Bison",
    id: "clburritobison",
    thumbnail: "burrito-bison.png",
    description: "Launch yourself and smash through gummy enemies!",
    categories: ["Arcade", "Action"],
    added: "2026-04-17",
    new: true
  },
  { name: "Curveball",
    id: "clcurveball",
    thumbnail: "curveball.png",
    description: "A 3D twist on classic Pong gameplay.",
    categories: ["Arcade"],
    added: "2026-04-17",
    new: true
  },
  { name: "Santa Run",
    id: "clsantarun",
    thumbnail: "santa-run.png",
    description: "Help Santa run and deliver presents!",
    categories: ["Arcade", "Platformer"],
    added: "2026-04-17",
    new: true
  },
  { name: "Among Us",
    id: "clamongus",
    thumbnail: "among-us.png",
    description: "Find the impostor among your crew.",
    categories: ["Multiplayer", "Strategy"],
    added: "2026-04-22",
    new: true
  },
  { name: "Capybara Clicker",
    id: "clcapybaraclicker",
    thumbnail: "capybara-clicker.png",
    description: "Click capybaras and grow your collection.",
    categories: ["Idle"],
    added: "2026-04-17",
    new: true
  },
  { name: "Candy Timbermen",
    id: "candy_timbermen",
    thumbnail: "candy-timbermen.png",
    description: "Chop candy trees while avoiding obstacles.",
    categories: ["Arcade"],
    added: "2026-04-17",
    new: true
  }
];

const collections = [
  {
    name: "Undertale Universe",
    desc: "All Undertale, Deltarune, and boss fights",
    thumbnails: "undertale.png",
    filter: g =>
      g.categories.includes("Undertale") ||
      g.categories.includes("Deltarune") ||
      g.categories.includes("Boss Fight")
  },

  {
    name: "Minecraft",
    desc: "Blocky adventures and parkour",
    thumbnails: "mcparkour1.png",
    filter: g => g.categories.includes("Minecraft")
  },

  {
    name: "Creative",
    desc: "Make art and express yourself",
    thumbnails: "silk.png",
    filter: g =>
      g.categories.includes("Creative") ||
      g.categories.includes("Art")
  },

  {
    name: "Arcade Hits",
    desc: "Fast-paced, replayable games",
    thumbnails: "tomb-of-the-mask.png",
    filter: g => g.categories.includes("Arcade")
  },

  {
    name: "Platformers",
    desc: "Jump, run, and master movement",
    thumbnails: "ovo.png",
    filter: g => g.categories.includes("Platformer")
  },

  {
    name: "Idle & Clicker",
    desc: "Chill games that grow over time",
    thumbnails: "cookieclicker.png",
    filter: g => g.categories.includes("Idle")
  },

  {
    name: "Puzzle & Strategy",
    desc: "Think your way to victory",
    thumbnails: "2048.png",
    filter: g =>
      g.categories.includes("Puzzle") ||
      g.categories.includes("Strategy")
  },

  {
    name: "Action",
    desc: "Fast combat and survival",
    thumbnails: "10minutestilldawn.png",
    filter: g => g.categories.includes("Action")
  },

  {
    name: "Multiplayer",
    desc: "Play with others online",
    thumbnails: "slither-io.png",
    filter: g => g.categories.includes("Multiplayer")
  },

  {
    name: "Digital Circus",
    desc: "TADC-themed experiences",
    thumbnails: "gloinks.png",
    filter: g => g.categories.includes("Digital Circus")
  },

  {
    name: "Duck Life",
    desc: "All of the Duck Life games are here!",
    thumbnails: "ducklife.png",
    filter: g => g.categories.includes("Duck Life")
  }
];