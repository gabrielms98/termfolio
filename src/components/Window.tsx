import { useContext } from "react";
import Draggable from "react-draggable";
import { AppContext } from "../contexts/AppContext";

import { IAppList } from "../models/AppState";

function Factory(props: { apps: IAppList }) {
  return (
    <>
      {Object.values(props.apps)
        .filter((app) => app.show)
        .map((app, i) => (
          <Draggable
            key={i}
            positionOffset={{ x: i * 5 + "%", y: i * 5 + "%" }}
          >
            <div className="absolute drop-shadow-sm">{app.app}</div>
          </Draggable>
        ))}
    </>
  );
}

function Window() {
  const context = useContext(AppContext);

  return (
    <main className="window w-full h-full relative flex items-center justify-center">
      <div className="w-screen h-screen">
        <div className="z-10 relative w-full h-full flex justify-center items-center">
          <Factory apps={context} />
        </div>
      </div>
    </main>
  );
}

export default Window;
