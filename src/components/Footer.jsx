import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="py-10 bg-ink">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-muted hover:text-paper transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-faint order-last sm:order-none">
          © {new Date().getFullYear()} Rios. Built with React, Vite &amp; Tailwind.
        </p>

        <div className="flex items-center gap-4 text-muted">
          <a href="https://github.com/" aria-label="GitHub" className="hover:text-paper transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-paper transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-paper transition-colors">
            <MailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
