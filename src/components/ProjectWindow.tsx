import { useState } from "react";
import WindowFrame from "./WindowFrame";

interface ProjectWindowProps {
  appId: string;
  title: string;
  url: string;
  displayUrl: string;
  className?: string;
}

function ProjectWindow({
  appId,
  title,
  url,
  displayUrl,
  className = "w-[48rem] h-[34rem]",
}: ProjectWindowProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <WindowFrame
      appId={appId}
      title={title}
      className={`bg-[#1c1c1e] rounded-xl ${className} shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col`}
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
          <span className="text-[#a2a2a2] truncate">{displayUrl}</span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open in new tab"
          title="Open in new tab"
          className="w-7 h-7 flex items-center justify-center rounded text-[#858585] hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Live app */}
      <div className="flex-1 relative bg-[#111]">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/70 animate-spin" />
            <span className="text-xs text-white/40">Loading {displayUrl}…</span>
          </div>
        )}
        <iframe
          src={url}
          title={title}
          allow="autoplay; microphone; fullscreen"
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </WindowFrame>
  );
}

export default ProjectWindow;
