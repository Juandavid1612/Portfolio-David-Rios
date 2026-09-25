import { games } from "../data/games";
import PlaceholderArt from "./PlaceholderArt";

export default function SelectedGames() {
  return (
    <section id="games" className="py-24 border-b border-line">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-md mb-14">
          <h2 className="font-display font-semibold text-3xl text-paper">Selected games</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Three shipped-scope projects, each solving a different kind of
            gameplay problem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="group flex flex-col border border-line bg-surface hover:border-faint transition-colors"
            >
              <span className={`block h-1 w-full bg-${g.accent}`} />
              <PlaceholderArt accent={g.accent} seed={1} className="aspect-[16/10] rounded-none border-x-0 border-t-0" />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-display font-semibold text-lg text-paper">{g.title}</h3>
                <dl className="text-xs text-muted space-y-1">
                  <div className="flex gap-1.5">
                    <dt className="text-faint">Role</dt>
                    <dd>{g.role}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="text-faint">Engine</dt>
                    <dd>{g.engine}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="text-faint">Platform</dt>
                    <dd>{g.platform}</dd>
                  </div>
                </dl>
                <span
                  className="mt-auto pt-3 text-sm text-paper border-t border-line group-hover:text-paper flex items-center justify-between"
                >
                  View project
                  <span className="group-hover:translate-x-1 transition-transform">›</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
