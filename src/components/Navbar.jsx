import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-paper flex items-center gap-2">
          <span className="inline-flex w-2.5 h-2.5 bg-kittens" />
          <span className="inline-flex w-2.5 h-2.5 bg-decree -ml-1" />
          <span className="inline-flex w-2.5 h-2.5 bg-tessera -ml-1 mr-1.5" />
          Rios
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-line hover:border-paper text-paper text-sm px-4 py-2 transition-colors"
        >
          Get in touch
        </a>

        <button
          className="md:hidden text-paper w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-5 h-px bg-paper transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-paper transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-line px-6 pb-6 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-paper text-sm py-1" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm text-ink bg-paper px-4 py-2 text-center" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
