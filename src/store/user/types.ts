export interface IUser {
  id: number | null;
  address: string;
  balance: number | null;
  fullBalance: number | null;
}

export interface ITransaction {
  from: string;
  to: string;
  value: string;
}

export interface IInitialState {
  userData: IUser;
}
