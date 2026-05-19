import Header from "./components/Header";
import Window from "./components/Window";
import DesktopBackground from "./assets/apple-bg.jpeg";
import Dock from "./components/Dock";

import { AppContext } from "./contexts/AppContext";
import { IAppList } from "./models/AppState";
import TerminalWindow from "./components/TerminalWindow";
import MailWindow from "./components/MailWindow";
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
    },
    MAIL_APP: {
      app: <MailWindow />,
      show: false,
      icon: <MailIcon />,
    },
  });

  const toggleApp = useCallback((id: string, show?: boolean) => {
    setApp((currentApp: any) => ({
      ...currentApp,
      [id]: { ...currentApp[id], show: show ?? !currentApp[id].show },
    }));
  }, []);

  return (
    <>
      <AppContext.Provider value={{ apps: APPS, toggleApp }}>
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
