import { useState } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";
import Background from "./assets/background.jpeg";

type Commands = "clear" | "help";

const commandDescriptions: Record<Commands, string> = {
  clear: "Clears the terminal.",
  help: "Shows this message.",
};

function App() {
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
    switch (terminalInput) {
      case "clear":
        setTerminalOuput([]);
        return;
      case "help":
        addTerminalInput(terminalInput);
        Object.entries(commandDescriptions).map(([key, value]) =>
          addTerminalOutput(
            <>
              <b>{key}</b> - {value}
            </>
          )
        );
        break;
      default:
        addTerminalInput(terminalInput);
        addTerminalOutput(
          "Command not found. Type 'help' to see the available commands."
        );
    }
  }

  const [terminalOuput, setTerminalOuput] = useState<
    (TerminalOutput | TerminalInput)[]
  >([<TerminalOutput key="1">Welcome to my portfolio!</TerminalOutput>]);

  return (
    <div className="w-screen h-screen">
      <img className="absolute w-full h-full z-0" src={Background} alt=""></img>
      <div className="z-10 absolute w-full h-full flex justify-center items-center">
        <div className="bg-[#282a36] rounded-md w-4/5 p-2 relative">
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
  );
}

export default App;
