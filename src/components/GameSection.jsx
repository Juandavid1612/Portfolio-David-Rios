import { PawIcon, HexIcon, ShardIcon, ExternalIcon, PlayIcon } from "./Icons";
import PlaceholderArt from "./PlaceholderArt";
import ScreenshotGrid from "./ScreenshotGrid";
import VideoPlaceholder from "./VideoPlaceholder";

const WORLD_ICON = { kittens: PawIcon, decree: HexIcon, tessera: ShardIcon };
const TEXT_CLASS = { kittens: "text-kittens", decree: "text-decree", tessera: "text-tessera" };
const BORDER_CLASS = { kittens: "border-kittens", decree: "border-decree", tessera: "border-tessera" };
const BG_CLASS = { kittens: "bg-kittens", decree: "bg-decree", tessera: "bg-tessera" };

export default function GameSection({ game, reverse = false, tinted = false }) {
  const Icon = WORLD_ICON[game.accent];

  return (
    <section
      id={game.id}
      className={`py-24 border-b border-line scroll-mt-16 ${tinted ? "bg-surface" : "bg-ink"}`}
    >
      <div className="max-w-content mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Info column */}
          <div>
            <div className={`inline-flex items-center gap-2 text-sm ${TEXT_CLASS[game.accent]} mb-4`}>
              <Icon className="w-4 h-4" />
              Project {String(game.id === "kittens" ? 1 : game.id === "decree" ? 2 : 3).padStart(2, "0")}
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-paper">{game.title}</h2>
            <p className="mt-4 text-muted leading-relaxed max-w-lg">{game.description}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-sm text-sm">
              <div>
                <dt className="text-faint text-xs mb-1">Role</dt>
                <dd className="text-paper">{game.role}</dd>
              </div>
              <div>
                <dt className="text-faint text-xs mb-1">Engine</dt>
                <dd className="text-paper">{game.engine}</dd>
              </div>
              <div>
                <dt className="text-faint text-xs mb-1">Platform</dt>
                <dd className="text-paper">{game.platform}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <p className="text-xs text-faint mb-2">What I built</p>
              <ul className="space-y-2">
                {game.myWork.map((line) => (
                  <li key={line} className="text-sm text-muted leading-relaxed pl-4 relative">
                    <span className={`absolute left-0 top-2 w-1.5 h-1.5 ${BG_CLASS[game.accent]}`} />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={game.playUrl}
                className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 text-ink ${BG_CLASS[game.accent]}`}
              >
                <PlayIcon className="w-4 h-4" />
                Play
              </a>
              <a
                href={game.steamUrl}
                className={`inline-flex items-center gap-2 text-sm px-5 py-2.5 border ${BORDER_CLASS[game.accent]} text-paper hover:bg-surface2 transition-colors`}
              >
                View on Steam
                <ExternalIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Cover art column */}
          <PlaceholderArt accent={game.accent} seed={1} label="Cover art" className="aspect-[4/3] w-full" />
        </div>

        {/* Gameplay video */}
        <div className="mt-12">
          <p className="text-xs text-faint mb-3">Gameplay video</p>
          <VideoPlaceholder accent={game.accent} className="w-full" />
        </div>

        {/* Screenshots */}
        <div className="mt-8">
          <p className="text-xs text-faint mb-3">Gameplay screenshots</p>
          <ScreenshotGrid accent={game.accent} count={game.screenshots} />
        </div>
      </div>
    </section>
  );
}
