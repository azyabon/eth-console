export type ConsoleItem = {
  id: number;
  isSystem: boolean;
  text: string;
};

export interface IInitialState {
  consoleList: ConsoleItem[];
}
