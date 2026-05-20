import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ProfilePic from "../assets/profile-pic.jpeg";

interface DesktopItem {
  label: string;
  icon: React.ReactNode;
  action: "app" | "link";
  target: string;
}

const PDFIcon = () => (
  <svg width="48" height="56" viewBox="0 0 48 56">
    <path d="M4 0h28l12 12v40a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" fill="white" />
    <path d="M32 0l12 12H36a4 4 0 01-4-4V0z" fill="#ddd" />
    <rect x="8" y="32" width="32" height="14" rx="2" fill="#e74c3c" />
    <text x="24" y="43" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui">PDF</text>
  </svg>
);

const FolderIcon = () => (
  <svg width="56" height="46" viewBox="0 0 56 46">
    <path d="M0 6a4 4 0 014-4h16l4 4h28a4 4 0 014 4v32a4 4 0 01-4 4H4a4 4 0 01-4-4V6z" fill="#56a0f5" />
    <path d="M0 14h56v28a4 4 0 01-4 4H4a4 4 0 01-4-4V14z" fill="#4a90e2" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" fill="#3a3a3c" />
    <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
    <ellipse cx="24" cy="24" rx="10" ry="20" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
    <line x1="4" y1="24" x2="44" y2="24" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="24" y1="4" x2="24" y2="44" stroke="white" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const items: DesktopItem[] = [
  {
    label: "Gabriel_CV.pdf",
    icon: <PDFIcon />,
    action: "app",
    target: "READER_APP",
  },
  {
    label: "Projects",
    icon: <FolderIcon />,
    action: "app",
    target: "PHOTOS_APP",
  },
  {
    label: "Documents",
    icon: <FolderIcon />,
    action: "app",
    target: "SAFARI_APP",
  },
  {
    label: "GitHub",
    icon: <GlobeIcon />,
    action: "link",
    target: "https://github.com/gabrielms98",
  },
  {
    label: "LinkedIn",
    icon: <GlobeIcon />,
    action: "link",
    target: "https://linkedin.com/in/gabrielms98",
  },
];

function DesktopIcons() {
  const { toggleApp } = useContext(AppContext);

  function handleClick(item: DesktopItem) {
    if (item.action === "app") {
      toggleApp(item.target, true);
    } else {
      window.open(item.target, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="absolute top-10 right-6 z-[5] flex flex-col items-center gap-1 select-none">
      {/* Profile picture */}
      <button
        type="button"
        className="mb-2 p-0 border-0 bg-transparent cursor-default rounded-2xl hover:ring-2 ring-white/40 transition-all"
        onClick={() => toggleApp("IMAGE_APP", true)}
      >
        <img
          src={ProfilePic}
          alt="Gabriel Martins"
          className="w-20 h-20 rounded-2xl object-cover shadow-lg shadow-black/30 border-2 border-white/20"
        />
      </button>

      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="flex flex-col items-center gap-1 p-2 rounded-lg border-0 bg-transparent hover:bg-white/10 active:bg-white/20 cursor-default transition-colors w-24"
          onClick={() => handleClick(item)}
        >
          <div className="flex items-center justify-center h-14">
            {item.icon}
          </div>
          <span className="text-[11px] text-white text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] line-clamp-2">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default DesktopIcons;
