export interface IAppState {
  app: JSX.Element;
  show: boolean;
  icon: any; // fix this later
}

export type IAppList = Record<string, IAppState>;
