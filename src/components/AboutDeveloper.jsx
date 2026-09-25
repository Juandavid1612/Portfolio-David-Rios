import PlaceholderArt from "./PlaceholderArt";
import { MailIcon } from "./Icons";
import { skills } from "../data/games";

export default function AboutDeveloper() {
  return (
    <section id="about" className="py-24 bg-surface border-b border-line scroll-mt-16">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <PlaceholderArt accent="decree" seed={5} label="Portrait" className="aspect-[3/4] w-full max-w-xs" />

        <div>
          <p className="text-sm text-decree mb-4">About the developer</p>
          <h2 className="font-display font-semibold text-3xl text-paper max-w-md">
            Rios — game development student
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-lg">
            I'm a game development student at Universidad Pontificia
            Bolivariana (UPB), building interactive experiences across
            genres — from cozy platformers to space strategy and puzzle
            adventures. I work end to end in Unity: gameplay programming,
            physics, UI/UX, and audio, with game design documentation to
            keep every system honest about what it's for.
          </p>
          <p className="mt-3 text-sm text-faint">English — B2 · Japanese — A2</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs text-muted border border-line px-3 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>

          <div id="contact" className="mt-10 flex flex-wrap gap-3 scroll-mt-16">
            <a
              href="#"
              className="text-sm font-medium text-ink bg-paper px-6 py-3 hover:bg-white transition-colors"
            >
              Download CV
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-sm text-paper border border-line px-6 py-3 hover:border-faint transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
