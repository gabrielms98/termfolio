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

export const VSCodeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="vsc-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2c2c32" />
        <stop offset="100%" stopColor="#1e1e1e" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#vsc-bg)" />
    <g transform="translate(14,14) scale(0.92)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z"
        fill="#007ACC"
      />
    </g>
  </svg>
);

export const SafariIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="safari-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5ac8fa" />
        <stop offset="100%" stopColor="#007aff" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#safari-bg)" />
    {/* Compass circle */}
    <circle cx="60" cy="60" r="32" fill="none" stroke="white" strokeWidth="3" opacity="0.9" />
    {/* Tick marks */}
    <line x1="60" y1="30" x2="60" y2="35" stroke="white" strokeWidth="2" opacity="0.7" />
    <line x1="60" y1="85" x2="60" y2="90" stroke="white" strokeWidth="2" opacity="0.7" />
    <line x1="30" y1="60" x2="35" y2="60" stroke="white" strokeWidth="2" opacity="0.7" />
    <line x1="85" y1="60" x2="90" y2="60" stroke="white" strokeWidth="2" opacity="0.7" />
    {/* Compass needle */}
    <polygon points="60,38 66,60 60,66 54,60" fill="white" opacity="0.95" />
    <polygon points="60,82 54,60 60,54 66,60" fill="#ff3b30" opacity="0.9" />
  </svg>
);

export const GitHubIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="gh-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a3a3c" />
        <stop offset="100%" stopColor="#1c1c1e" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#gh-bg)" />
    <path
      d="M60 24C39.1 24 22 41.1 22 62c0 16.8 10.9 31.1 26 36.1 1.9.35 2.6-.83 2.6-1.84 0-.9-.04-3.9-.04-7.1-10.6 2.3-12.8-4.5-12.8-4.5-1.7-4.4-4.2-5.6-4.2-5.6-3.5-2.4.26-2.3.26-2.3 3.8.27 5.8 3.9 5.8 3.9 3.4 5.8 8.9 4.1 11.1 3.2.34-2.5 1.3-4.1 2.4-5.1-8.5-1-17.4-4.2-17.4-18.8 0-4.2 1.5-7.6 3.9-10.2-.4-1-1.7-4.9.37-10.1 0 0 3.2-1 10.4 3.9 3-0.8 6.2-1.3 9.4-1.3 3.2 0 6.5.4 9.5 1.3 7.2-4.9 10.4-3.9 10.4-3.9 2.1 5.3.8 9.1.4 10.1 2.4 2.7 3.9 6.1 3.9 10.2 0 14.7-8.9 17.9-17.4 18.8 1.4 1.2 2.6 3.5 2.6 7.1 0 5.1-.04 9.2-.04 10.5 0 1 .7 2.2 2.6 1.8C87.1 93.1 98 78.8 98 62 98 41.1 80.9 24 60 24z"
      fill="white"
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
