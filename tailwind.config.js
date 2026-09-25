/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  // Several accent classes are built with template strings from
  // src/data/games.js (e.g. `bg-${accent}`), so the JIT scanner can't see
  // the full class name in source. Safelist every variant actually used.
  safelist: [
    "bg-kittens", "bg-decree", "bg-tessera",
    "bg-kittens/10", "bg-decree/10", "bg-tessera/10",
    "bg-kittens/20", "bg-decree/20", "bg-tessera/20",
    "text-kittens", "text-decree", "text-tessera",
    "border-kittens", "border-decree", "border-tessera",
    "bg-kittens-soft", "bg-decree-soft", "bg-tessera-soft",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12131A",       // base background — cold near-black, not pure black
        surface: "#1B1D26",   // panels / cards, one step up from ink
        surface2: "#20222D",  // nested panels (screenshot tiles, tags)
        line: "#2B2E3A",      // hairline borders/dividers
        paper: "#EDEBE3",     // primary text — warm broken white
        muted: "#9A9BA9",     // secondary text
        faint: "#82859A",     // tertiary text — kept ≥4.5:1 against ink & surface
        // per-game accent worlds
        kittens: {
          DEFAULT: "#E8A33D", // 1.000 Kittens — warm amber, cozy/playful
          soft: "#3A2E1C",
        },
        decree: {
          DEFAULT: "#38C6B0", // Galactic Decree — cold teal, sci-fi HUD glow
          soft: "#123330",
        },
        tessera: {
          DEFAULT: "#8C93B8", // Tessera — slate-violet, fractured stone
          soft: "#22243A",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
