import WindowFrame from "./WindowFrame";
import { contact } from "../data/portfolio";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/gabrielms98",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    color: "#333",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gabrielms98",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0077b5",
  },
  {
    label: "Send me an email",
    href: `mailto:${contact.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    color: "#ea4335",
  },
  {
    label: "Download my CV",
    href: "#",
    onClick: () => {
      const btn = document.querySelector<HTMLButtonElement>("[data-download-cv]");
      if (btn) btn.click();
    },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    color: "#e74c3c",
  },
  {
    label: "View this source code",
    href: "https://github.com/gabrielms98/termfolio",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: "#007acc",
  },
];

function LinktreePage() {
  return (
    <div className="min-h-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center py-10 px-4">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-3">
        GM
      </div>

      <h1 className="text-white text-lg font-bold">{contact.name}</h1>
      <p className="text-white/60 text-sm mb-6">{contact.role} · {contact.location}</p>

      {/* Links */}
      <div className="w-full max-w-xs flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 no-underline"
          >
            <span className="shrink-0" style={{ color: link.color }}>{link.icon}</span>
            <span className="flex-1 text-sm font-medium">{link.label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        ))}
      </div>

      <p className="text-white/30 text-xs mt-8">gabrielms.dev</p>
    </div>
  );
}

function SafariWindow({ appId = "SAFARI_APP" }: { appId?: string }) {
  const url = "gabrielms.dev/links";

  return (
    <WindowFrame
      appId={appId}
      title="Links — Safari"
      className="bg-[#1c1c1e] rounded-xl w-[28rem] h-[34rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col"
      headerClassName="bg-[#2a2a2a] border-b border-[#3a3a3a]"
    >
      {/* URL bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2a2a] border-b border-[#3a3a3a] shrink-0">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center rounded bg-transparent border-0 text-[#858585] cursor-default"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center rounded bg-transparent border-0 text-[#858585] cursor-default"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center bg-[#1a1a1a] rounded-md px-3 py-1 text-[13px] border border-[#3a3a3a]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#858585" strokeWidth="2" strokeLinecap="round" className="shrink-0 mr-2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span className="text-[#a2a2a2] truncate">{url}</span>
        </div>
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-y-auto">
        <LinktreePage />
      </div>
    </WindowFrame>
  );
}

export default SafariWindow;
