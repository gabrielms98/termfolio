import Draggable from "react-draggable";
import TerminalWindow from "./TerminalWindow";

function Window() {
  return (
    <main className="window w-full h-full relative flex items-center justify-center">
      <div className="w-screen h-screen">
        <div className="z-10 relative w-full h-full flex justify-center items-center">
          <Draggable>
            <div className="absolute">
              <TerminalWindow />
            </div>
          </Draggable>
        </div>
      </div>
    </main>
  );
}

export default Window;
