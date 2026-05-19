import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

function Dock({
  toggleApp,
}: {
  toggleApp: (id: string, show?: boolean) => void;
}) {
  const context = useContext(AppContext);

  return (
    <section className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-3 py-2 flex gap-1 items-center z-50 shadow-lg shadow-black/20">
      {Object.entries(context).map(([key, thing]) => (
        <button
          key={key}
          className="relative p-2 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-200"
          onClick={() => toggleApp(key)}
        >
          {thing.icon}
          {thing.show && (
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/70" />
          )}
        </button>
      ))}
    </section>
  );
}

export default Dock;
