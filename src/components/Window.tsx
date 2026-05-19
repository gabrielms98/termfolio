import { useContext } from "react";
import Draggable from "react-draggable";
import { AppContext } from "../contexts/AppContext";

function Window() {
  const { apps, focusApp } = useContext(AppContext);

  return (
    <main className="window w-full h-full relative flex items-center justify-center">
      <div className="w-screen h-screen">
        <div className="z-10 relative w-full h-full flex justify-center items-center">
          {Object.entries(apps)
            .filter(([, app]) => app.show)
            .map(([id, app], i) => (
              <Draggable
                key={id}
                positionOffset={{ x: i * 5 + "%", y: i * 5 + "%" }}
              >
                <div
                  className="absolute drop-shadow-sm"
                  style={{ zIndex: app.zIndex }}
                  onPointerDownCapture={() => focusApp(id)}
                >
                  {app.app}
                </div>
              </Draggable>
            ))}
        </div>
      </div>
    </main>
  );
}

export default Window;
