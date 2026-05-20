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
  const { toggleApp, maximizeApp } = useContext(AppContext);
  const terminalRef = useRef<HTMLDivElement>(null);
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
      default: {
        const cmd = terminalInput.trim().toLowerCase();
        const nukeCommands = [
          "rm -rf /",
          "rm -rf /*",
          "sudo rm -rf /",
          "sudo rm -rf /*",
          "rm -rf ~",
          "rm -rf .",
        ];
        if (nukeCommands.some((c) => cmd.startsWith(c))) {
          queueOutput(
            <span style={{ color: "#ff5555" }}>Deleting system files...</span>,
            <span style={{ color: "#ff5555" }}>Removing /usr... done.</span>,
            <span style={{ color: "#ff5555" }}>Removing /etc... done.</span>,
            <span style={{ color: "#ff5555" }}>Removing /home... done.</span>,
            <span style={{ color: "#ff5555" }}>
              Removing /portfolio... <b>ACCESS DENIED</b>
            </span>,
            "",
            <span style={{ color: "#50fa7b" }}>
              Nice try. This portfolio is indestructible. 😎
            </span>,
            <span style={{ color: "#6272a4" }}>
              (You just tried to nuke a website running in your browser)
            </span>
          );
        } else if (cmd === ":(){ :|:& };:" || cmd === "fork bomb") {
          queueOutput(
            <span style={{ color: "#ffb86c" }}>
              🍴 Fork bomb detected!
            </span>,
            <span style={{ color: "#6272a4" }}>
              Don't worry, React already handles infinite re-renders for me.
            </span>
          );
        } else if (cmd === "sudo" || cmd.startsWith("sudo ")) {
          queueOutput(
            <span style={{ color: "#ff79c6" }}>
              gabriel is not in the sudoers file. This incident will be reported.
            </span>,
            <span style={{ color: "#6272a4" }}>
              (Just kidding, there's no one to report to)
            </span>
          );
        } else if (cmd === "exit") {
          queueOutput(
            <span style={{ color: "#f8f8f2" }}>
              There is no escape. Type <b>help</b> to accept your fate.
            </span>
          );
        } else if (cmd === "code" || cmd === "code ." || cmd.startsWith("code ")) {
          queueOutput(
            <span style={{ color: "#ff5555" }}>
              VS Code? You mean the Electron-powered RAM eater? 🐌
            </span>,
            <span style={{ color: "#ff5555" }}>
              That's not a text editor, that's a Chrome tab wearing a trench coat.
            </span>,
            <span style={{ color: "#50fa7b" }}>
              Real ones use neovim. Zero latency, infinite power. btw I use neovim.
            </span>,
            <span style={{ color: "#6272a4" }}>
              (I still built a VS Code clone in the dock for you peasants. You're welcome.)
            </span>
          );
        } else if (cmd === "vim" || cmd === "nvim" || cmd === "neovim") {
          queueOutput(
            <span style={{ color: "#50fa7b" }}>
              Ah, I see you're a person of culture as well. btw I use neovim. 🤝
            </span>
          );
        } else if (cmd === "nano") {
          queueOutput(
            <span style={{ color: "#ffb86c" }}>
              nano? Acceptable. At least it's not VS Code.
            </span>
          );
        } else if (cmd === "emacs") {
          queueOutput(
            <span style={{ color: "#f8f8f2" }}>
              Emacs is a great operating system. Shame it lacks a good text editor.
            </span>
          );
        } else if (cmd === "neofetch") {
          queueOutput(...getAboutLines());
        } else {
          queueOutput(
            "Command not found. Type 'help' to see the available commands."
          );
        }
        break;
      }
    }
  }

  const [terminalOutput, setTerminalOuput] = useState<
    (TerminalOutput | TerminalInput)[]
  >([
    <TerminalOutput key="1">
      <pre style={{ margin: 0, lineHeight: "1.4", fontFamily: "inherit", fontSize: "inherit" }}>
        <span style={{ color: "#6272a4" }}>{"      ┌───────────────────────────┐\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      │ ┌───────────────────────┐ │\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      │ │                       │ │\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      │ │"}</span><span style={{ color: "#50fa7b" }}>{"   ▸ "}</span><span style={{ color: "#bd93f9" }}>{"gabriel"}</span><span style={{ color: "#ff79c6" }}>{".ms"}</span>{"        "}<span style={{ color: "#6272a4" }}>{"│ │"}</span>{"     "}<span style={{ color: "#f8f8f2" }}>{"Hello!\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      │ │"}</span><span style={{ color: "#50fa7b" }}>{"   ▸ portfolio"}</span><span style={{ color: "#f8f8f2" }}>{"▌"}</span>{"        "}<span style={{ color: "#6272a4" }}>{"│ │"}</span>{"     "}<span style={{ color: "#f8f8f2" }}>{"Welcome to my portfolio.\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      │ │                       │ │"}</span>{"     "}<span style={{ color: "#6272a4" }}>{"Type "}</span><span style={{ color: "#50fa7b" }}><b>{"help"}</b></span><span style={{ color: "#6272a4" }}>{" for commands,\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      │ └───────────────────────┘ │"}</span>{"     "}<span style={{ color: "#6272a4" }}>{"or feel free to use the 'system'.\n"}</span>
        <span style={{ color: "#6272a4" }}>{"      └────────────┬─┬────────────┘\n"}</span>
        <span style={{ color: "#6272a4" }}>{"           ╔═══════╧═╧═══════╗\n"}</span>
        <span style={{ color: "#6272a4" }}>{"           ╚═════════════════╝"}</span>
      </pre>
    </TerminalOutput>,
  ]);

  useEffect(() => {
    const container = terminalRef.current?.querySelector(".react-terminal");
    if (!container || terminalOutput.length <= 1) return;

    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 0);
  }, [terminalOutput]);

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
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#27c93f] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, () => maximizeApp(appId))}
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
        {terminalOutput}
      </Terminal>
    </div>
  );
}

export default TerminalWindow;
