import { useState } from "react";
import WindowFrame from "./WindowFrame";

function MailWindow({ appId = "MAIL_APP" }: { appId?: string }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function handleSend() {
    const mailto = `mailto:gabrielms.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
  }

  return (
    <WindowFrame
      appId={appId}
      title="New Message"
      className="bg-[#1e1e1e] rounded-xl w-[32rem] shadow-2xl shadow-black/50 overflow-hidden text-[#e0e0e0]"
    >
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
    </WindowFrame>
  );
}

export default MailWindow;
