import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import { GitHubIcon } from "./AppIcons";

const externalLinks = [
  { icon: <GitHubIcon />, href: "https://github.com/gabrielms98", label: "GitHub" },
];

function Dock() {
  const { apps, toggleApp } = useContext(AppContext);

  return (
    <section className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-2 py-1.5 flex gap-1 items-center z-50 shadow-lg shadow-black/20">
      {Object.entries(apps).map(([key, thing]) => (
        <button
          key={key}
          className="relative p-1.5 rounded-lg hover:bg-white/10 hover:-translate-y-2 transition-all duration-200"
          onClick={() => toggleApp(key)}
        >
          {thing.icon}
          {thing.show && (
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/70" />
          )}
        </button>
      ))}

      {/* Separator */}
      <div className="w-px h-8 bg-white/20 mx-0.5" />

      {/* External links */}
      {externalLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="relative p-1.5 rounded-lg hover:bg-white/10 hover:-translate-y-2 transition-all duration-200"
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
}

export default Dock;
