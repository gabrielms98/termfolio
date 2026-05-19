import { createContext } from "react";
import { IAppContext } from "../models/AppState";

export const AppContext = createContext<IAppContext>({
  apps: {},
  toggleApp: () => {},
  focusApp: () => {},
});
