import { useState, useRef, useEffect, useContext } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";

import { AppContext } from "../contexts/AppContext";
import { getAboutLines } from "./about";
import { getExperienceLines } from "./xp";

type Commands = "clear" | "help" | "about" | "xp";

const commandDescriptions: Record<Commands, string> = {
  clear: "Clears the terminal.",
  help: "Shows this message.",
  about: "Shows information about me.",
  xp: "List my work experience.",
};

function TerminalWindow({ appId = "TERMINAL_APP" }: { appId?: string }) {
  const { toggleApp } = useContext(AppContext);
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollTarget = useRef(0);
  const scrollOnNextRender = useRef(false);
  const [isTyping, setIsTyping] = useState(false);
  const queueRef = useRef<(string | JSX.Element)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

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

  function flushQueue() {
    if (queueRef.current.length === 0) {
      setIsTyping(false);
      return;
    }
    timerRef.current = setTimeout(() => {
      const next = queueRef.current.shift()!;
      addTerminalOutput(next);
      flushQueue();
    }, 90);
  }

  function flushAllQueued() {
    clearTimeout(timerRef.current);
    while (queueRef.current.length > 0) {
      addTerminalOutput(queueRef.current.shift()!);
    }
    setIsTyping(false);
  }

  function queueOutput(...items: (string | JSX.Element)[]) {
    queueRef.current = items;
    setIsTyping(true);
    flushQueue();
  }

  function parse(terminalInput: string) {
    if (isTyping) {
      flushAllQueued();
    }

    const container = terminalRef.current?.querySelector(".react-terminal");
    if (container) {
      scrollTarget.current = container.scrollHeight;
    }
    scrollOnNextRender.current = true;

    addTerminalInput(terminalInput);

    switch (terminalInput) {
      case "clear":
        clearTimeout(timerRef.current);
        queueRef.current = [];
        setIsTyping(false);
        setTerminalOuput([]);
        return;
      case "help":
        queueOutput(
          ...Object.entries(commandDescriptions).map(([key, desc]) => (
            <>
              <b>{key}</b> - {desc}
            </>
          ))
        );
        break;
      case "about":
        queueOutput(...getAboutLines());
        break;
      case "xp":
        queueOutput(...getExperienceLines());
        break;
      default:
        queueOutput(
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
      container.scrollTop = container.scrollHeight;
    }, 0);
  }, [terminalOuput]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    const wrapper = terminalRef.current?.querySelector(
      ".react-terminal-wrapper"
    ) as HTMLElement | null;
    if (!wrapper) return;
    wrapper.style.paddingTop = "10px";

    const style = document.createElement("style");
    style.textContent = [
      ".react-terminal-wrapper::before,",
      ".react-terminal-wrapper::after { display: none !important; }",
      ".terminal-hidden-input { position: fixed !important; left: -9999px !important; opacity: 0 !important; }",
    ].join("");
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  function handleButton(e: React.MouseEvent, action: () => void) {
    e.stopPropagation();
    action();
  }

  return (
    <div
      ref={terminalRef}
      className="bg-[#282a36] rounded-xl w-full min-w-[60rem] max-w-7xl p-2 relative shadow-2xl shadow-black/50"
    >
      <div className="window-controls relative z-10 flex items-center gap-[6px] px-3 py-2">
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ff5f56] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, () => toggleApp(appId, false))}
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">✕</span>
        </button>
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ffbd2e] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, () => toggleApp(appId, false))}
        >
          <span className="text-[10px] leading-[13px] font-bold text-black/50">−</span>
        </button>
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#27c93f] flex items-center justify-center border-0 p-0"
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">⤢</span>
        </button>
        <span className="flex-1 text-center text-sm text-[#a2a2a2] pr-[57px]">
          gabrielms.dev
        </span>
      </div>
      <Terminal
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => parse(terminalInput)}
      >
        {terminalOuput}
      </Terminal>
    </div>
  );
}

export default TerminalWindow;
