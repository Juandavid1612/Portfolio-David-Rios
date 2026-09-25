// Small monoline icon set — kept in one file since each icon is a handful of paths.
// currentColor everywhere so icons inherit color from their parent.

export function PawIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <ellipse cx="12" cy="15.5" rx="5.2" ry="4.2" />
      <ellipse cx="5.6" cy="10.2" rx="1.7" ry="2.1" />
      <ellipse cx="10.1" cy="7.4" rx="1.7" ry="2.2" />
      <ellipse cx="14.4" cy="7.4" rx="1.7" ry="2.2" />
      <ellipse cx="18.4" cy="10.2" rx="1.7" ry="2.1" />
    </svg>
  );
}

export function HexIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M12 2.5 20.5 7.3V16.7L12 21.5 3.5 16.7V7.3Z" />
      <path d="M12 8 16 10.3V14.8L12 17.1 8 14.8V10.3Z" />
    </svg>
  );
}

export function ShardIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M12 2 21 9.5 17 22 4 17.5Z" />
      <path d="M12 2 8.5 12 4 17.5" />
      <path d="M21 9.5 8.5 12 17 22" />
    </svg>
  );
}

export function PlayIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function ExternalIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.5v-1.94c-2.84.62-3.44-1.24-3.44-1.24-.46-1.18-1.13-1.5-1.13-1.5-.93-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.56 2.38 1.11 2.96.85.09-.66.35-1.11.64-1.37-2.27-.26-4.65-1.13-4.65-5.04 0-1.11.4-2.03 1.04-2.74-.1-.26-.45-1.3.1-2.71 0 0 .85-.27 2.78 1.05a9.6 9.6 0 0 1 5.06 0c1.93-1.32 2.78-1.05 2.78-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.63 1.03 2.74 0 3.92-2.38 4.78-4.66 5.03.36.31.69.93.69 1.87v2.77c0 .28.19.61.71.5A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.29v6.35H9.24V8.5h3.24v1.62h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.7 2.27 4.7 5.6v6.45Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
