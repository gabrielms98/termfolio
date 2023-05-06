import { createContext } from "react";
import { IAppList } from "../models/AppState";

export const AppContext = createContext<IAppList>({});
