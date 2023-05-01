import { useState } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";

import About from "./about";
import Experience from "./xp";

type Commands = "clear" | "help" | "about" | "xp";

const commandDescriptions: Record<Commands, string> = {
  clear: "Clears the terminal.",
  help: "Shows this message.",
  about: "Shows information about me.",
  xp: "List my work experince.",
};
function Window() {
  function addTerminalInput(terminalInput: string) {
    setTerminalOuput((currentTerminalOutput) => [
      ...currentTerminalOutput,
      <TerminalInput key={currentTerminalOutput.length + 1}>
        {terminalInput}
      </TerminalInput>,
    ]);
  }

  function addTerminalOutput(terminalInput: string | JSX.Element) {
    setTerminalOuput((currentTerminalOutput) => [
      ...currentTerminalOutput,
      <TerminalOutput key={currentTerminalOutput.length + 1}>
        {terminalInput}
      </TerminalOutput>,
    ]);
  }

  function parse(terminalInput: string) {
    addTerminalInput(terminalInput);

    switch (terminalInput) {
      case "clear":
        setTerminalOuput([]);
        return;
      case "help":
        Object.entries(commandDescriptions).map(([key, desc]) =>
          addTerminalOutput(
            <>
              <b>{key}</b> - {desc}
            </>
          )
        );
        break;
      case "about":
        addTerminalOutput(<About />);
        break;
      case "xp":
        addTerminalOutput(<Experience />);
        break;
      default:
        addTerminalOutput(
          "Command not found. Type 'help' to see the available commands."
        );
    }
  }

  const [terminalOuput, setTerminalOuput] = useState<
    (TerminalOutput | TerminalInput)[]
  >([<TerminalOutput key="1">Welcome to my portfolio!</TerminalOutput>]);
  return (
    <main className="window w-full h-full relative flex items-center justify-center">
      <div className="w-screen h-screen">
        <div className="z-10 absolute w-full h-full flex justify-center items-center">
          <div className="bg-[#282a36] rounded-md w-4/5 max-w-6xl p-2 relative drop-shadow-md">
            <Terminal
              name="gabrielms.dev"
              colorMode={ColorMode.Dark}
              onInput={(terminalInput) => parse(terminalInput)}
            >
              {terminalOuput}
            </Terminal>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Window;
