import { PawIcon, HexIcon, ShardIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-28 border-b border-line">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="text-sm text-muted mb-5">Game development portfolio</p>
          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl text-paper text-balance">
            Three worlds, built one system at a time.
          </h1>
          <p className="mt-6 text-muted text-lg max-w-md leading-relaxed">
            I'm Rios — a Unity developer working across genres, from cozy
            platforming to space strategy. Here are three projects I built
            end to end, and how I built them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#games"
              className="bg-paper text-ink text-sm font-medium px-6 py-3 hover:bg-white transition-colors"
            >
              View projects
            </a>
            <a
              href="#about"
              className="text-sm text-paper border-b border-line hover:border-paper pb-0.5 transition-colors"
            >
              About me
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] border border-line bg-surface overflow-hidden">
          <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-kittens/20 blur-3xl" />
          <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-decree/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-tessera/20 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center gap-10 text-paper/25">
            <PawIcon className="w-14 h-14" />
            <HexIcon className="w-16 h-16" />
            <ShardIcon className="w-14 h-14" />
          </div>
          <span className="absolute bottom-3 right-3 text-[11px] text-faint">
            Kittens · Decree · Tessera
          </span>
        </div>
      </div>
    </section>
  );
}
