import Header from "./components/Header";
import Window from "./components/Window";
import DesktopBackground from "./assets/apple-bg.jpeg";
import Dock from "./components/Dock";

import { AppContext } from "./contexts/AppContext";
import { IAppList } from "./models/AppState";
import TerminalWindow from "./components/TerminalWindow";
import MailWindow from "./components/MailWindow";
import SpotifyWindow from "./components/SpotifyWindow";
import PhotosWindow from "./components/PhotosWindow";
import ReaderWindow from "./components/ReaderWindow";
import { useState, useCallback } from "react";

const TerminalIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="term-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a3a3c" />
        <stop offset="100%" stopColor="#1c1c1e" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#term-bg)" />
    <rect x="16" y="20" width="88" height="70" rx="6" fill="#000" opacity="0.4" />
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

const SpotifyIcon = () => (
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

const PhotosIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="photos-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#1a56db" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#photos-bg)" />
    {/* Handle */}
    <rect x="42" y="28" width="36" height="10" rx="5" fill="white" opacity="0.9" />
    {/* Body */}
    <rect x="24" y="38" width="72" height="52" rx="8" fill="white" opacity="0.9" />
    {/* Clasp */}
    <rect x="52" y="56" width="16" height="12" rx="3" fill="#1a56db" />
  </svg>
);

const ReaderIcon = () => (
  <svg width="34" height="34" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="reader-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d42e2e" />
        <stop offset="100%" stopColor="#8b1a1a" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#reader-bg)" />
    {/* Stylized "A" / document */}
    <path d="M40 85 L60 30 L80 85" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="47" y1="68" x2="73" y2="68" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const MailIcon = () => (
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

function App() {
  const [APPS, setApp] = useState<IAppList>({
    TERMINAL_APP: {
      app: <TerminalWindow />,
      show: true,
      icon: <TerminalIcon />,
      zIndex: 1,
    },
    MAIL_APP: {
      app: <MailWindow />,
      show: false,
      icon: <MailIcon />,
      zIndex: 0,
    },
    PHOTOS_APP: {
      app: <PhotosWindow />,
      show: false,
      icon: <PhotosIcon />,
      zIndex: 0,
    },
    SPOTIFY_APP: {
      app: <SpotifyWindow />,
      show: false,
      icon: <SpotifyIcon />,
      zIndex: 0,
    },
    READER_APP: {
      app: <ReaderWindow />,
      show: false,
      icon: <ReaderIcon />,
      zIndex: 0,
    },
  });

  const toggleApp = useCallback((id: string, show?: boolean) => {
    setApp((prev) => {
      const maxZ = Math.max(...Object.values(prev).map((a) => a.zIndex));
      const newShow = show ?? !prev[id].show;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          show: newShow,
          zIndex: newShow ? maxZ + 1 : prev[id].zIndex,
        },
      };
    });
  }, []);

  const focusApp = useCallback((id: string) => {
    setApp((prev) => {
      const maxZ = Math.max(...Object.values(prev).map((a) => a.zIndex));
      if (prev[id].zIndex === maxZ) return prev;
      return {
        ...prev,
        [id]: { ...prev[id], zIndex: maxZ + 1 },
      };
    });
  }, []);

  return (
    <>
      <AppContext.Provider value={{ apps: APPS, toggleApp, focusApp }}>
        <div className="absolute inset-0">
          <img
            src={DesktopBackground}
            className="w-full h-full aspect-video"
          ></img>
        </div>
        <Header />
        <Window />
        <Dock />
      </AppContext.Provider>
    </>
  );
}

export default App;
