import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const appNames: Record<string, string> = {
  TERMINAL_APP: "Terminal",
  MAIL_APP: "Mail",
  PHOTOS_APP: "Projects",
  SPOTIFY_APP: "Spotify",
  READER_APP: "Reader",
  VSCODE_APP: "Code",
};

const menuItems = ["File", "Edit", "View", "Window", "Help"];

const appleMenuLinks = [
  { label: "About Gabriel", href: "https://gabrielms.dev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gabrielms98" },
  { label: "GitHub", href: "https://github.com/gabrielms98" },
  { label: "Email", href: "mailto:gabrielms.dev@gmail.com" },
];

function Header() {
  const { apps } = useContext(AppContext);
  const [date, setDate] = useState(new Date());
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setAppleMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const focusedApp = Object.entries(apps)
    .filter(([, a]) => a.show)
    .sort(([, a], [, b]) => b.zIndex - a.zIndex)[0];

  const activeAppName = focusedApp ? appNames[focusedApp[0]] ?? "Finder" : "Finder";

  return (
    <header className="px-0 relative z-50 select-none">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="flex justify-between items-center relative text-white text-[13px] h-[25px]">
        {/* Left: Apple + App name + Menus */}
        <div className="flex items-center h-full">
          {/* Apple menu */}
          <div ref={menuRef} className="relative">
            <button
              type="button"
              className={`flex items-center justify-center w-10 h-[25px] border-0 cursor-pointer transition-colors ${
                appleMenuOpen ? "bg-white/20" : "hover:bg-white/10 bg-transparent"
              }`}
              onClick={() => setAppleMenuOpen(!appleMenuOpen)}
            >
              <svg
                width="14"
                height="17"
                viewBox="0 0 814 1000"
                fill="white"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.4-105.1-209-105.1-330.3 0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8.6 15.6 1.3 18.2 2.6.6 6.4 1.3 10.2 1.3 45.4 0 103.7-30.4 139.5-71.4z" />
              </svg>
            </button>

            {appleMenuOpen && (
              <div className="absolute top-[25px] left-0 w-56 bg-[#2a2a2a]/95 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl py-1 overflow-hidden">
                {appleMenuLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-[13px] text-white/90 hover:bg-[#0058d0] hover:text-white no-underline transition-colors"
                    onClick={() => setAppleMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Active app name */}
          <span className="font-bold text-[13px] px-2">{activeAppName}</span>

          {/* Decorative menus */}
          {menuItems.map((item) => (
            <span
              key={item}
              className="px-2 text-white/70 hover:text-white/90 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Right: Status icons */}
        <div className="flex items-center gap-3 pr-3 text-[13px]">
          {/* Battery */}
          <svg
            width="20"
            height="11"
            viewBox="0 0 25 12"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          >
            <rect x="0.5" y="0.5" width="20" height="11" rx="2" />
            <rect x="2" y="2" width="14" height="7" rx="1" fill="white" />
            <path d="M22 4v4a1 1 0 001-1V5a1 1 0 00-1-1z" fill="white" />
          </svg>

          {/* WiFi */}
          <svg
            width="15"
            height="12"
            viewBox="0 0 24 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1.5 5C6 1 18 1 22.5 5" />
            <path d="M5.5 9C8.5 6.5 15.5 6.5 18.5 9" />
            <path d="M9 13c1.5-1.5 4.5-1.5 6 0" />
            <circle cx="12" cy="17" r="1.5" fill="white" stroke="none" />
          </svg>

          {/* Spotlight search */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="10" cy="10" r="7" />
            <line x1="15" y1="15" x2="21" y2="21" />
          </svg>

          {/* Date */}
          <span className="text-white/90">
            {date
              .toLocaleDateString("en-us", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })
              .replace(/,/g, "")}
          </span>

          {/* Time */}
          <span className="text-white/90">
            {date.getHours().toString().padStart(2, "0")}:
            {date.getMinutes().toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
