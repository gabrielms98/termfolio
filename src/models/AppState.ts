export interface IAppState {
  app: JSX.Element;
  show: boolean;
  icon: any;
  zIndex: number;
}

export type IAppList = Record<string, IAppState>;

export interface IAppContext {
  apps: IAppList;
  toggleApp: (id: string, show?: boolean) => void;
  focusApp: (id: string) => void;
}
