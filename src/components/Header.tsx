import { useEffect, useState } from "react";

import { IcBaselineApple } from "./icons/AppleLogo";
import { TypcnBatteryCharge } from "./icons/batery";
import { MaterialSymbolsWifiSharp } from "./icons/Wifi";

function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="px-2 relative">
        <div className="absolute inset-0 bg-[#0E1A2B] bg-gradient-to-r opacity-90 z-0"></div>
        <div className="flex justify-between z-10 text-white opacity-100 relative">
          <div className="flex items-center  gap-2">
            <div>
              <IcBaselineApple />
            </div>
            <div className="font-bold">Portifolio</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <TypcnBatteryCharge className="text-2xl" />
            </div>
            <div>
              <MaterialSymbolsWifiSharp className="text-xl" />
            </div>
            <div>
              {date
                .toLocaleDateString("en-us", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
                .replace(/,/g, "")}
            </div>
            <div>
              {date.getHours().toString().padStart(2, "0")}:
              {date.getMinutes().toString().padStart(2, "0")}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
