export const TerminalIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="term-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a3a3c" />
        <stop offset="100%" stopColor="#1c1c1e" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#term-bg)" />
    <rect
      x="16"
      y="20"
      width="88"
      height="70"
      rx="6"
      fill="#000"
      opacity="0.4"
    />
    <path
      d="M30 48 L48 60 L30 72"
      stroke="#50fa7b"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="54"
      y1="72"
      x2="80"
      y2="72"
      stroke="#50fa7b"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export const SpotifyIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="26" fill="#1db954" />
    <g transform="translate(60,60)">
      <path
        d="M-25 5 C-10 -5, 10 -5, 25 5"
        stroke="white"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M-20 16 C-8 8, 8 8, 20 16"
        stroke="white"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M-30 -7 C-12 -19, 12 -19, 30 -7"
        stroke="white"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const PhotosIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="photos-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#1a56db" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#photos-bg)" />
    <rect
      x="42"
      y="28"
      width="36"
      height="10"
      rx="5"
      fill="white"
      opacity="0.9"
    />
    <rect
      x="24"
      y="38"
      width="72"
      height="52"
      rx="8"
      fill="white"
      opacity="0.9"
    />
    <rect x="52" y="56" width="16" height="12" rx="3" fill="#1a56db" />
  </svg>
);

export const ReaderIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="reader-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d42e2e" />
        <stop offset="100%" stopColor="#8b1a1a" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#reader-bg)" />
    <path
      d="M40 85 L60 30 L80 85"
      stroke="white"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="47"
      y1="68"
      x2="73"
      y2="68"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export const MailIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="mail-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b9eff" />
        <stop offset="100%" stopColor="#0066dd" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#mail-bg)" />
    <rect x="22" y="36" width="76" height="52" rx="6" fill="white" />
    <path
      d="M22 42 L60 66 L98 42"
      stroke="#0055bb"
      strokeWidth="3.5"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);
