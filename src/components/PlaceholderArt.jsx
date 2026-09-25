import { PawIcon, HexIcon, ShardIcon } from "./Icons";

const ICONS = { kittens: PawIcon, decree: HexIcon, tessera: ShardIcon };

const ACCENT_HEX = {
  kittens: "#E8A33D",
  decree: "#38C6B0",
  tessera: "#8C93B8",
};

// Deterministic pseudo-random blob layout per index, so each tile in a
// gallery looks a little different without any real art or Math.random
// (which would differ between server/client — not an issue here, but keeps it tidy).
function layoutFor(seed) {
  const a = (seed * 47) % 100;
  const b = (seed * 83 + 20) % 100;
  return { x1: 10 + (a % 50), y1: 10 + (b % 50), x2: 40 + (b % 50), y2: 30 + (a % 40) };
}

/**
 * Stand-in for real game art (cover art / screenshots / portrait).
 * Renders an abstract, on-brand pattern in the game's accent color so the
 * layout looks intentional before real captures are dropped in.
 */
export default function PlaceholderArt({ accent = "decree", seed = 1, label, className = "" }) {
  const Icon = ICONS[accent] ?? HexIcon;
  const hex = ACCENT_HEX[accent] ?? ACCENT_HEX.decree;
  const { x1, y1, x2, y2 } = layoutFor(seed);

  return (
    <div
      className={`relative overflow-hidden bg-surface2 border border-line rounded-md ${className}`}
    >
      <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`g1-${accent}-${seed}`} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={hex} stopOpacity="0.35" />
            <stop offset="100%" stopColor={hex} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="60" fill={`url(#g1-${accent}-${seed})`} />
        <circle cx={x1} cy={y1} r="22" fill={hex} opacity="0.10" />
        <circle cx={x2} cy={y2} r="16" fill={hex} opacity="0.14" />
        <g stroke={hex} strokeOpacity="0.16" strokeWidth="0.4">
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={i} x1={-10 + i * 18} y1="0" x2={-10 + i * 18 - 20} y2="60" />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-8 h-8 opacity-30" />
        <span style={{ color: hex }} className="sr-only">
          {accent}
        </span>
      </div>
      {label && (
        <span className="absolute bottom-2 left-2 text-[11px] leading-none text-faint bg-ink/70 px-1.5 py-1 rounded-sm">
          {label}
        </span>
      )}
    </div>
  );
}
