const games = [
   /*example*/
  /*{ name: "",
    id: "",
    thumbnail: ".png",
    description: "",
    categories: [""],
    added: "YYYY-MM-DD",
    ?
  }*/
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
    added: "2026-04-17"
  },
  { name: "Duck Life 2",
  id: "clducklife2",
  thumbnail: "ducklife2.png",
  description: "Train your duck and compete in new challenges.",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17"
},
{ name: "Duck Life 3: Evolution",
  id: "clducklife3",
  thumbnail: "ducklife3.png",
  description: "Genetically modify ducks and race them.",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17"
},
{ name: "Duck Life 4",
  id: "clducklife4",
  thumbnail: "ducklife4.png",
  description: "Train your duck to become a tournament champion.",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17"
},
{ name: "Duck Life 5: Treasure Hunt",
  id: "clducklife5",
  thumbnail: "ducklife5.png",
  description: "Hunt for treasure with your duck!",
  categories: ["Simulation", "Duck Life"],
  added: "2026-04-17"
},
  { name: "Burrito Bison",
    id: "clburritobison",
    thumbnail: "burrito-bison.png",
    description: "Launch yourself and smash through gummy enemies!",
    categories: ["Arcade", "Action"],
    added: "2026-04-17"
  },
  { name: "Curveball",
    id: "clcurveball",
    thumbnail: "curveball.png",
    description: "A 3D twist on classic Pong gameplay.",
    categories: ["Arcade"],
    added: "2026-04-17"
  },
  { name: "Santa Run",
    id: "clsantarun",
    thumbnail: "santa-run.png",
    description: "Help Santa run and deliver presents!",
    categories: ["Arcade", "Platformer"],
    added: "2026-04-17"
  },
  { name: "Among Us",
    id: "clamongus",
    thumbnail: "among-us.png",
    description: "Find the impostor among your crew.",
    categories: ["Multiplayer", "Strategy"],
    added: "2026-04-17"
  },
  { name: "Capybara Clicker",
    id: "clcapybaraclicker",
    thumbnail: "capybara-clicker.png",
    description: "Click capybaras and grow your collection.",
    categories: ["Idle"],
    added: "2026-04-17"
  },
  { name: "Candy Timbermen",
    id: "candy_timbermen",
    thumbnail: "candy-timbermen.png",
    description: "Chop candy trees while avoiding obstacles.",
    categories: ["Arcade"],
    added: "2026-04-17"
  },
  { name: "Hammy Home",
    id: "hammyhome",
    thumbnail: "hammyhome.png",
    description: "Raise your very own hamster in a digital world!",
    categories: ["Relaxing"],
    added: "2026-04-21"
  },
  { name: "Geometry Dash Lite",
    id: "clgdlite",
    thumbnail: "gdlite.png",
    description: "Avoid obstacles and listen to the classic GDLite soundtrack!",
    categories: ["Arcade"],
    added: "2026-04-22"
  },
  { name: "GoldFishies",
    id: "goldfishies",
    thumbnail: "goldfishies.png",
    description: "Raise your own goldfish(es)!",
    categories: ["Relaxing"],
    added: "2026-04-23"
  },
  { name: "Baseball Bros.",
    id: "clbaseballbros",
    thumbnail: "baseballbros.png",
    description: "Play some baseball!",
    categories: ["Baseball"],
    added: "2026-04-23"
  },
  { name: "How I made Pixel Portal!",
    id: "video",
    thumbnail: "video.png",
    description: "Watch a video of the basics of how I made Pixel Portal!",
    categories: ["Watch"],
    added: "2026-12-31"
  },
  { name: "Hole.io",
    id: "holeio",
    thumbnail: "holeio.png",
    description: "Suck up the entire city as a black hole!",
    categories: ["Arcade"],
    added: "2026-04-19"
  },
  {
  name: "Pizza Tower",
  id: "pizzatower",
  thumbnail: "pizzatower.png",
  description: "Dash, slide, and combo your way through chaotic cartoon levels.",
  categories: ["Platformer", "Action"],
  added: "2026-04-28",
  
},
{
  name: "Minecraft Tower Defense",
  id: "MINECRAFTTOWERDEFENSE",
  thumbnail: "minecrafttowerdefense.png",
  description: "Defend your base using Minecraft-themed traps and towers.",
  categories: ["Strategy", "Minecraft"],
  added: "2026-04-28",
  
},
{
  name: "Maze",
  id: "maze",
  thumbnail: "maze.png",
  description: "Navigate twisting mazes and reach the exit as fast as possible.",
  categories: ["Puzzle"],
  added: "2026-04-28",
  
},
{
  name: "Jacksmith",
  id: "jacksmith",
  thumbnail: "jacksmith.png",
  description: "Forge weapons and help your heroes battle through enemies.",
  categories: ["Simulation", "RPG"],
  added: "2026-04-28",
  
},
{
  name: "Ragdoll Hit",
  id: "clragdollhit",
  thumbnail: "ragdollhit.png",
  description: "Launch ragdoll fighters and knock out your opponents.",
  categories: ["Action"],
  added: "2026-04-28",
  
},
{
  name: "One Night as Freddy",
  id: "clonenightasfreddy",
  thumbnail: "onenightasfreddy.png",
  description: "Survive a night of chaos in this FNaF-inspired challenge.",
  categories: ["Strategy"],
  added: "2026-04-28",
  
},
{
  name: "Never Ending Legacy",
  id: "clneverendinglegacy",
  thumbnail: "neverendinglegacy.png",
  description: "Grow your civilization from humble beginnings to greatness.",
  categories: ["Strategy", "Simulation"],
  added: "2026-04-28",
  
},
{
  name: "Magic Tiles 3",
  id: "clmagictiles3",
  thumbnail: "magictiles3.png",
  description: "Tap the tiles to the rhythm and keep the music flowing.",
  categories: ["Arcade"],
  added: "2026-04-28",
  
},
{
  name: "Learn to Fly",
  id: "cllearntofly",
  thumbnail: "learntofly.png",
  description: "Launch your penguin and upgrade your flight to reach new heights.",
  categories: ["Arcade"],
  added: "2026-04-28",
  
},
{
  name: "Jellydad Hero",
  id: "cljellydadhero",
  thumbnail: "jellydadhero.png",
  description: "Solve puzzles and rescue your family in this quirky adventure.",
  categories: ["Puzzle", "Platformer"],
  added: "2026-04-28",
  
},
{
  name: "Infinite Craft",
  id: "clinfinitecraft",
  thumbnail: "infinitecraft.png",
  description: "Combine elements to discover endless new creations.",
  categories: ["Creative"],
  added: "2026-04-28",
  
},
{
  name: "Idle Miner Tycoon",
  id: "clidleminertycoon",
  thumbnail: "idleminertycoon.png",
  description: "Build a mining empire and automate your way to riches.",
  categories: ["Idle", "Simulation"],
  added: "2026-04-28",
  
},
{
  name: "Idle Idle GameDev",
  id: "clidleidlegamedev",
  thumbnail: "idlegamedev.png",
  description: "Develop games, earn money, and grow your studio.",
  categories: ["Idle", "Simulation"],
  added: "2026-04-28",
  
},
{
  name: "Hardware Tycoon",
  id: "clhardwaretycoon",
  thumbnail: "hardwaretycoon.png",
  description: "Design and sell computer hardware to dominate the tech market.",
  categories: ["Simulation", "Strategy"],
  added: "2026-04-28",
  
},
{
  name: "Grow a Garden",
  id: "clgrowagarden",
  thumbnail: "growagarden.png",
  description: "Plant seeds, nurture your garden, and watch it flourish.",
  categories: ["Relaxing", "Simulation"],
  added: "2026-04-28",
  
},
{
  name: "Block Craft Parkour",
  id: "clblockcraftparkour",
  thumbnail: "blockcraftparkour.png",
  description: "Jump through blocky obstacle courses with precise timing.",
  categories: ["Platformer", "Minecraft"],
  added: "2026-04-28",
  
},
{
  name: "2048 Cupcakes",
  id: "cl2048cupcakes",
  thumbnail: "2048cupcakes.png",
  description: "Merge cupcakes to reach sweeter and higher levels.",
  categories: ["Puzzle"],
  added: "2026-04-28",
  
},
{
  name: "60 Seconds Burger Run",
  id: "cl60secondsburgerrun",
  thumbnail: "60secondsburgerrun.png",
  description: "Race to the burger shop before time runs out.",
  categories: ["Platformer", "Arcade"],
  added: "2026-04-28",
  
},
{
  name: "1v1 Tennis",
  id: "cl1v1tennis",
  thumbnail: "1v1tennis.png",
  description: "Challenge opponents in fast-paced tennis matches.",
  categories: ["Sports"],
  added: "2026-04-28",
  
},
{
  name: "1 on 1 Soccer",
  id: "cl1on1soccer",
  thumbnail: "1on1soccer.png",
  description: "Score goals in quick, competitive soccer duels.",
  categories: ["Sports"],
  added: "2026-04-28",
  
},
{
  name: "Girly Pop Bow Clicker!",
  id: "bowclicker",
  thumbnail: "bowclicker.png",
  description: "Click the big pink bow.",
  categories: ["Idle","Clicker"],
  added: "2026-05-01",
  
},
  {
    name: "Sushi Slicer",
    id: "sushislicer",
    thumbnail: "sushislicer.png",
    description: "Slice and dice sushi ingredients with precision!",
    categories: ["Arcade", "Action"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Eaglercraft 1.12",
    id: "Eaglercraft1.12",
    thumbnail: "eaglercraft.png",
    description: "Explore, build, and survive in a pixelated sandbox world.",
    categories: ["Sandbox", "Adventure"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Wordle",
    id: "clwordle",
    thumbnail: "wordle.png",
    description: "Guess the hidden five-letter word in six attempts.",
    categories: ["Puzzle", "Word"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Clover Pit",
    id: "cloverpit",
    thumbnail: "cloverpit.png",
    description: "Navigate challenging pits and collect lucky charms.",
    categories: ["Platformer", "Arcade"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Melon Playground",
    id: "clmelonplayground",
    thumbnail: "melonplayground.png",
    description: "Unleash your creativity in a chaotic physics-based sandbox.",
    categories: ["Sandbox", "Simulation"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Level Devil",
    id: "clleveldevil",
    thumbnail: "leveldevil.png",
    description: "Survive a brutal platformer packed with unexpected trolls.",
    categories: ["Platformer", "Rage Game"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Gorilla Tag",
    id: "clgorillatag",
    thumbnail: "gorillatag.png",
    description: "Run, climb, and leap using only your arms to tag others.",
    categories: ["Action", "Multiplayer"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Drift Boss",
    id: "cldriftboss",
    thumbnail: "driftboss.png",
    description: "Time your drifts perfectly to stay on the endless winding platform.",
    categories: ["Driving", "Arcade"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Crossy Road",
    id: "clcrossyroad",
    thumbnail: "crossyroad.png",
    description: "Cross busy roads, tracks, and rivers without getting hit.",
    categories: ["Arcade", "Endless"],
    added: "2026-05-22",
    new: true
  },
  {
    name: "Angry Birds",
    id: "clangrybirds",
    thumbnail: "angrybirds.png",
    description: "Launch birds from a slingshot to crush the greedy pigs' defenses.",
    categories: ["Puzzle", "Physics"],
    added: "2026-05-22",
    new: true
  }
];

const collections = [
 /*example*/
  /*{
    name: "Undertale Universe",
    desc: "All Undertale, Deltarune, and boss fights",
    thumbnails: "undertale.png",
    filter: g => [
      "Undertale Yellow",
      "Bad Monday Simulator",
      "Deltarune",
      "Undertale"
    ].includes(g.name)
  },*/
  {
    name: "Undertale Universe",
    desc: "All Undertale, Deltarune, and boss fights",
    thumbnails: "undertale.png",
    // Filter by specific project IDs or exact names
    filter: g => [
      "Undertale Yellow",
      "Bad Monday Simulator",
      "Deltarune",
      "Undertale",
      "Bad Time Simulator",
      "Asriel Dreemurr Fight Simulator",
      "Ring Runner",
      "Jevil Fight Simulator",
      "Asgore Fight Simulator"
    ].includes(g.name)
  },
];
