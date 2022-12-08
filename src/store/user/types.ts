export interface IUser {
  id: number | null;
  address: string;
  balance: number | null;
  fullBalance: number | null;
}

export interface IInitialState {
  userData: IUser;
}
