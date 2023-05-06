export interface IAppState {
  app: JSX.Element;
  show: boolean;
  icon: JSX.Element;
}

export type IAppList = Record<string, IAppState>;
