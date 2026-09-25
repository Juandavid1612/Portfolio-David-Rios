// Central content for every featured project.
// accent keys map to the "kittens" / "decree" / "tessera" colors in tailwind.config.js
export const games = [
  {
    id: "kittens",
    accent: "kittens",
    title: "1.000 Kittens",
    role: "Programmer / Designer",
    engine: "Unity",
    platform: "PC / Steam / Windows",
    summary:
      "A cozy yet challenging 3D platformer. Collect kittens, explore colorful worlds, and unravel the mystery behind their disappearance.",
    description:
      "1.000 Kittens is a hand-crafted 3D platformer built around tight movement and low-stakes exploration. Each world hides a handful of missing kittens behind small movement puzzles, secret paths, and optional challenge routes for players chasing a full collection.",
    myWork: [
      "Built the core character controller: coyote time, jump buffering, and variable jump height",
      "Designed and scripted three collectible-hiding puzzle types reused across worlds",
      "Implemented save/checkpoint system and the in-world kitten counter UI",
    ],
    screenshots: 4,
    playUrl: "#",
    steamUrl: "#",
  },
  {
    id: "decree",
    accent: "decree",
    title: "Galactic Decree",
    role: "Programmer / Designer",
    engine: "Unity",
    platform: "PC / Steam / Windows",
    summary:
      "A sci-fi strategy game. Lead a faction, build your fleet, and make decisions that shape the fate of the galaxy.",
    description:
      "Galactic Decree is a turn-based 4X strategy game about managing a growing faction under pressure: expand across a procedurally generated starfield, balance fleet upkeep against expansion, and respond to galactic events that permanently shift the political map.",
    myWork: [
      "Programmed the turn-resolution pipeline and the AI faction decision layer",
      "Built the galaxy-map generation system and fleet-pathing logic",
      "Designed the decree/event system that branches the mid-game political state",
    ],
    screenshots: 3,
    playUrl: "#",
    steamUrl: "#",
  },
  {
    id: "tessera",
    accent: "tessera",
    title: "Tessera",
    role: "Programmer / Designer",
    engine: "Unity",
    platform: "PC / Steam / Windows",
    summary:
      "A puzzle adventure set in a fractured world. Rebuild the pieces, solve the riddles, and uncover the truth.",
    description:
      "Tessera follows a world that has broken into floating fragments. Each fragment is a self-contained spatial puzzle; solving it reconnects that piece to the whole and reveals another layer of the story behind the fracture.",
    myWork: [
      "Scripted the fragment-snapping and world-reconstruction system",
      "Built the modular puzzle framework used across every fragment type",
      "Implemented ambient audio state changes tied to reconstruction progress (FMOD)",
    ],
    screenshots: 4,
    playUrl: "#",
    steamUrl: "#",
  },
];

export const skills = [
  "Unity",
  "C#",
  "Gameplay Programming",
  "Physics Systems",
  "UI / UX",
  "Audio (FMOD)",
  "Game Design Docs",
];
