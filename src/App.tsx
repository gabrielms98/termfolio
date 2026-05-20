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
import VSCodeWindow from "./components/VSCodeWindow";
import SafariWindow from "./components/SafariWindow";
import {
  TerminalIcon,
  MailIcon,
  PhotosIcon,
  SpotifyIcon,
  ReaderIcon,
  VSCodeIcon,
  SafariIcon,
} from "./components/AppIcons";
import { useState, useCallback } from "react";

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
    VSCODE_APP: {
      app: <VSCodeWindow />,
      show: false,
      icon: <VSCodeIcon />,
      zIndex: 0,
    },
    SAFARI_APP: {
      app: <SafariWindow />,
      show: false,
      icon: <SafariIcon />,
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
