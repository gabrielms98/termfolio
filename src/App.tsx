import Header from "./components/Header";
import Window from "./components/Window";
import DesktopBackground from "./assets/apple-bg.jpeg";
import DesktopIcons from "./components/DesktopIcons";
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
      isMaximized: false,
    },
    MAIL_APP: {
      app: <MailWindow />,
      show: false,
      icon: <MailIcon />,
      zIndex: 0,
      isMaximized: false,
    },
    PHOTOS_APP: {
      app: <PhotosWindow />,
      show: false,
      icon: <PhotosIcon />,
      zIndex: 0,
      isMaximized: false,
    },
    SPOTIFY_APP: {
      app: <SpotifyWindow />,
      show: false,
      icon: <SpotifyIcon />,
      zIndex: 0,
      isMaximized: false,
    },
    READER_APP: {
      app: <ReaderWindow />,
      show: false,
      icon: <ReaderIcon />,
      zIndex: 0,
      isMaximized: false,
    },
    VSCODE_APP: {
      app: <VSCodeWindow />,
      show: false,
      icon: <VSCodeIcon />,
      zIndex: 0,
      isMaximized: false,
    },
    SAFARI_APP: {
      app: <SafariWindow />,
      show: false,
      icon: <SafariIcon />,
      zIndex: 0,
      isMaximized: false,
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
          isMaximized: newShow ? prev[id].isMaximized : false,
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

  const maximizeApp = useCallback((id: string) => {
    setApp((prev) => {
      const maxZ = Math.max(...Object.values(prev).map((a) => a.zIndex));
      return {
        ...prev,
        [id]: {
          ...prev[id],
          isMaximized: !prev[id].isMaximized,
          zIndex: maxZ + 1,
        },
      };
    });
  }, []);

  return (
    <>
      <AppContext.Provider value={{ apps: APPS, toggleApp, focusApp, maximizeApp }}>
        <div className="absolute inset-0">
          <img
            src={DesktopBackground}
            className="w-full h-full aspect-video"
          ></img>
        </div>
        <DesktopIcons />
        <Header />
        <Window />
        <Dock />
      </AppContext.Provider>
    </>
  );
}

export default App;
