import { useState } from "react";

import Draggable from "react-draggable";
import TerminalWindow from "./TerminalWindow";

interface IAppState {
  app: JSX.Element;
  show: boolean;
  id: number;
}

function Factory(props: { apps: IAppState[] }) {
  return (
    <>
      {props.apps
        .filter((app) => app.show)
        .map((app, i) => (
          <Draggable positionOffset={{ x: i * 5 + "%", y: i * 5 + "%" }}>
            <div className="absolute drop-shadow-sm">{app.app}</div>
          </Draggable>
        ))}
    </>
  );
}

function Window() {
  const [apps] = useState<IAppState[]>([
    { app: <TerminalWindow />, show: true, id: 0 },
  ]);

  return (
    <main className="window w-full h-full relative flex items-center justify-center">
      <div className="w-screen h-screen">
        <div className="z-10 relative w-full h-full flex justify-center items-center">
          <Factory apps={apps} />
        </div>
      </div>
    </main>
  );
}

export default Window;
