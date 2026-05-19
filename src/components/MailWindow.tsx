import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

function MailWindow({ appId = "MAIL_APP" }: { appId?: string }) {
  const { toggleApp } = useContext(AppContext);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function handleSend() {
    const mailto = `mailto:gabrielms.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
  }

  function handleButton(e: React.MouseEvent, action: () => void) {
    e.stopPropagation();
    action();
  }

  const close = () => toggleApp(appId, false);

  return (
    <div className="bg-[#1e1e1e] rounded-xl w-[32rem] shadow-2xl shadow-black/50 overflow-hidden text-[#e0e0e0]">
      <div className="window-controls flex items-center gap-[6px] px-3 py-2 bg-[#2a2a2a] border-b border-[#3a3a3a]">
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ff5f56] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, close)}
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">✕</span>
        </button>
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ffbd2e] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, close)}
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
          New Message
        </span>
      </div>

      <div className="text-sm">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3a3a3a]">
          <span className="text-[#a2a2a2] shrink-0">To:</span>
          <span>gabrielms.dev@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3a3a3a]">
          <span className="text-[#a2a2a2] shrink-0">Subject:</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Type a subject..."
            className="bg-transparent outline-none flex-1 text-[#e0e0e0] placeholder-[#555]"
          />
        </div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message..."
          className="w-full bg-transparent outline-none resize-none h-48 px-4 py-3 text-[#e0e0e0] placeholder-[#555]"
        />
        <div className="flex justify-end px-4 pb-3">
          <button
            type="button"
            onClick={handleSend}
            className="bg-[#0066dd] text-white px-5 py-1.5 rounded-md text-sm font-medium hover:bg-[#1a75e8] transition-colors cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailWindow;
