import { useState, useRef, useEffect } from "react";
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
  xp: "List my work experience.",
};

function TerminalWindow() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollTarget = useRef(0);

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
    const container = terminalRef.current?.querySelector(".react-terminal");
    if (container) {
      scrollTarget.current = container.scrollHeight;
    }

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
      to my portfolio<br></br> | | ::::::::::::::::: | | |<br></br> | |
      ::::::::::::::::: | | |<br></br> | | ::::::::::::::::: | | |
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Type{" "}
      <b>help</b> to get a list of commands available
      <br></br> | | ::::::::::::::::: | |
      ,|<br></br> | !___________________!
      |(c|<br></br> !_______________________!__!<br></br> / \<br></br> /
      [][][][][][][][][][][][][] \<br></br> / [][][][][][][][][][][][][][] \
      <br></br>( [][][][][____________][][][][] )<br></br> \
      ------------------------------ /<br></br> \______________________________/
      <br></br>{" "}
    </TerminalOutput>,
  ]);

  useEffect(() => {
    const container = terminalRef.current?.querySelector(".react-terminal");
    if (!container || terminalOuput.length <= 1) return;

    setTimeout(() => {
      container.scrollTop = scrollTarget.current;
    }, 0);
  }, [terminalOuput]);

  return (
    <div
      ref={terminalRef}
      className="bg-[#282a36] rounded-xl w-full min-w-[60rem] max-w-7xl p-2 relative shadow-2xl shadow-black/50"
    >
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
