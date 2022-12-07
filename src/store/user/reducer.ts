import { IInitialState, IUser } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  userData: {
    id: null,
    address: "",
    balance: null,
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.userData = { ...action.payload };
    },
  },
});

export const userActions = user.actions;
