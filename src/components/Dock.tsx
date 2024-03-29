import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

function Dock({
  toggleApp,
}: {
  toggleApp: (id: string, show?: boolean) => void;
}) {
  const context = useContext(AppContext);

  return (
    <section className="absolute bottom-2 left-1/2 -translate-x-1/2 border border-[#454B57] rounded-lg px-2 py-1 flex gap-1 items-center divide-x divide-[#454B57] z-50">
      <div className="flex justify-center items-center gap-2">
        {Object.entries(context).map(([key, thing]) => {
          return (
            <button
              key={key}
              className="hover:-translate-y-3 transition-transform"
              onClick={() => toggleApp(key)}
            >
              {thing.icon}
            </button>
          );
        })}
      </div>
      <div className="pl-1">oasietan</div>
    </section>
  );
}

export default Dock;
