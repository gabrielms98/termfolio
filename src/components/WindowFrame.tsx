import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

interface WindowFrameProps {
  appId: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

function WindowFrame({
  appId,
  title,
  children,
  className = "",
  headerClassName = "bg-[#2a2a2a] border-b border-[#3a3a3a]",
}: WindowFrameProps) {
  const { toggleApp } = useContext(AppContext);

  function handleButton(e: React.MouseEvent, action: () => void) {
    e.stopPropagation();
    action();
  }

  const close = () => toggleApp(appId, false);

  return (
    <div className={className}>
      <div
        className={`window-controls flex items-center gap-[6px] px-3 py-2 shrink-0 ${headerClassName}`}
      >
        <button
          type="button"
          aria-label="Close window"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ff5f56] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, close)}
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">
            ✕
          </span>
        </button>
        <button
          type="button"
          aria-label="Minimize window"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ffbd2e] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, close)}
        >
          <span className="text-[10px] leading-[13px] font-bold text-black/50">
            −
          </span>
        </button>
        <button
          type="button"
          aria-label="Maximize window"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#27c93f] flex items-center justify-center border-0 p-0"
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">
            ⤢
          </span>
        </button>
        <span className="flex-1 text-center text-sm text-[#a2a2a2] pr-[57px]">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default WindowFrame;
