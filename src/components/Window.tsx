import { useContext, useState, useRef, useCallback, useEffect } from "react";
import Draggable from "react-draggable";
import { AppContext } from "../contexts/AppContext";

interface Size {
  width: number;
  height: number;
}

function Window() {
  const { apps, focusApp } = useContext(AppContext);
  const [sizes, setSizes] = useState<Record<string, Size>>({});
  const prevShowRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const prev = prevShowRef.current;
    for (const [id, app] of Object.entries(apps)) {
      if (app.show && !prev[id]) {
        setSizes((s) => {
          const { [id]: _, ...rest } = s;
          return rest;
        });
      }
      prev[id] = app.show;
    }
  }, [apps]);
  const resizeRef = useRef<{
    id: string;
    handle: string;
    startX: number;
    startY: number;
    startW: number;
    startH: number;
  } | null>(null);

  const startResize = useCallback(
    (e: React.MouseEvent, id: string, handle: string) => {
      e.stopPropagation();
      e.preventDefault();
      const el = document.querySelector(`[data-window-id="${id}"]`) as HTMLElement;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      resizeRef.current = {
        id,
        handle,
        startX: e.clientX,
        startY: e.clientY,
        startW: sizes[id]?.width ?? rect.width,
        startH: sizes[id]?.height ?? rect.height,
      };
      focusApp(id);
    },
    [sizes, focusApp]
  );

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const r = resizeRef.current;
      if (!r) return;
      const dx = e.clientX - r.startX;
      const dy = e.clientY - r.startY;

      let w = r.startW;
      let h = r.startH;

      if (r.handle.includes("e")) w = Math.max(250, r.startW + dx);
      if (r.handle.includes("s")) h = Math.max(150, r.startH + dy);
      if (r.handle.includes("w")) w = Math.max(250, r.startW - dx);
      if (r.handle.includes("n")) h = Math.max(150, r.startH - dy);

      setSizes((prev) => ({ ...prev, [r.id]: { width: w, height: h } }));
    }

    function onUp() {
      resizeRef.current = null;
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <main className="window w-full h-full relative flex items-center justify-center pointer-events-none">
      <div className="w-screen h-screen">
        <div className="z-10 relative w-full h-full flex justify-center items-center">
          {Object.entries(apps)
            .filter(([, app]) => app.show)
            .map(([id, app], i) => {
              const isMax = app.isMaximized;
              const customSize = sizes[id];

              if (isMax) {
                return (
                  <div
                    key={id}
                    className="fixed left-0 right-0 top-[25px] bottom-[52px] pointer-events-auto"
                    style={{ zIndex: app.zIndex }}
                    onPointerDownCapture={() => focusApp(id)}
                  >
                    <div className="w-full h-full [&>*]:!w-full [&>*]:!h-full [&>*]:!max-w-none [&>*]:!max-h-none [&>*]:!min-w-0 [&>*]:!rounded-none">
                      {app.app}
                    </div>
                  </div>
                );
              }

              return (
                <Draggable
                  key={id}
                  positionOffset={{ x: i * 5 + "%", y: i * 5 + "%" }}
                >
                  <div
                    className="absolute drop-shadow-sm pointer-events-auto"
                    style={{
                      zIndex: app.zIndex,
                      ...(customSize
                        ? { width: customSize.width, height: customSize.height }
                        : {}),
                    }}
                    data-window-id={id}
                    onPointerDownCapture={() => focusApp(id)}
                  >
                    {customSize ? (
                      <div className="w-full h-full [&>*]:!w-full [&>*]:!h-full [&>*]:!max-w-none [&>*]:!max-h-none [&>*]:!min-w-0">
                        {app.app}
                      </div>
                    ) : (
                      app.app
                    )}
                    {/* Resize handles — corners */}
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 cursor-nwse-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "se")}
                    />
                    <div
                      className="absolute -bottom-1 -left-1 w-4 h-4 cursor-nesw-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "sw")}
                    />
                    <div
                      className="absolute -top-1 -right-1 w-4 h-4 cursor-nesw-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "ne")}
                    />
                    <div
                      className="absolute -top-1 -left-1 w-4 h-4 cursor-nwse-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "nw")}
                    />
                    {/* Resize handles — edges */}
                    <div
                      className="absolute top-3 -right-1 bottom-3 w-2 cursor-ew-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "e")}
                    />
                    <div
                      className="absolute top-3 -left-1 bottom-3 w-2 cursor-ew-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "w")}
                    />
                    <div
                      className="absolute -top-1 left-3 right-3 h-2 cursor-ns-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "n")}
                    />
                    <div
                      className="absolute -bottom-1 left-3 right-3 h-2 cursor-ns-resize z-50"
                      onMouseDown={(e) => startResize(e, id, "s")}
                    />
                  </div>
                </Draggable>
              );
            })}
        </div>
      </div>
    </main>
  );
}

export default Window;
