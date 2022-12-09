export type ConsoleItem = {
  id?: number;
  isSystem: boolean;
  text: string;
};

export type Transaction = {
  status: "waitAmount" | "waitWallet" | null;
  value: string;
};

export interface IInitialState {
  consoleList: ConsoleItem[];
  transaction: Transaction;
}
