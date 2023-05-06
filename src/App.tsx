import Header from "./components/Header";
import Window from "./components/Window";
import DesktopBackground from "./assets/apple-bg.jpeg";
import Dock from "./components/Dock";

import { AppContext } from "./contexts/AppContext";
import { IAppList } from "./models/AppState";
import TerminalWindow from "./components/TerminalWindow";
import { useState } from "react";

function App() {
  const [APPS, setApp] = useState<IAppList>({
    TERMINAL_APP: { app: <TerminalWindow />, show: true, icon: <></> },
  });

  function toggleApp(id: string, show?: boolean) {
    setApp((currentApp: any) => {
      return {
        ...currentApp,
        [id]: { ...currentApp[id], show: show ?? !currentApp[id].show },
      };
    });
  }

  return (
    <>
      <AppContext.Provider value={APPS}>
        <div className="absolute inset-0">
          <img
            src={DesktopBackground}
            className="w-full h-full aspect-video"
          ></img>
        </div>
        <Header />
        <Window apps={APPS} />
        <Dock toggleApp={toggleApp} />
      </AppContext.Provider>
    </>
  );
}

export default App;
