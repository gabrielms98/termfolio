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

function TerminalWindow() {
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
  >([
    <TerminalOutput key="1">
      .__________________________. <br></br> | .___________________. |==|
      <br></br> | | ................. | | |<br></br> | | ::::gabriel.ms :: | | |
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello
      <br></br> | | ::::::::::::::::: | | |
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome
      to my portifolio<br></br> | | ::::::::::::::::: | | |<br></br> | |
      ::::::::::::::::: | | |<br></br> | | ::::::::::::::::: | | |
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Type{" "}
      <b>help</b> to get a list of command available
      <br></br> | | ::::::::::::::::: | |
      ,|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This
      is work in progress, don't be harsh on it<br></br> | !___________________!
      |(c|<br></br> !_______________________!__!<br></br> / \<br></br> /
      [][][][][][][][][][][][][] \<br></br> / [][][][][][][][][][][][][][] \
      <br></br>( [][][][][____________][][][][] )<br></br> \
      ------------------------------ /<br></br> \______________________________/
      <br></br>{" "}
    </TerminalOutput>,
  ]);

  return (
    <div className="bg-[#282a36] rounded-md w-[67rem] p-2 relative drop-shadow-md">
      <Terminal
        name="gabrielms.dev"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => parse(terminalInput)}
      >
        {terminalOuput}
      </Terminal>
    </div>
  );
}

export default TerminalWindow;
