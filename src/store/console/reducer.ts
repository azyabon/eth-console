import { ConsoleItem, IInitialState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OPENING } from "./config";

const initialState: IInitialState = {
  consoleList: [...OPENING],
  transaction: {
    status: null,
    value: "0",
  },
};

export const console = createSlice({
  name: "console",
  initialState,
  reducers: {
    addString: (state, action: PayloadAction<ConsoleItem>) => {
      state.consoleList = [
        ...state.consoleList,
        {
          ...action.payload,
          id: action.payload.id ? action.payload.id : Date.now(),
        },
      ];
    },
    clearConsole: (state) => {
      state.consoleList = [];
    },
    toggleTransactionProcess: (
      state,
      action: PayloadAction<"waitAmount" | "waitWallet" | null>
    ) => {
      state.transaction.status = action.payload;
    },
    setTransactionValue: (state, action: PayloadAction<string>) => {
      state.transaction.value = action.payload;
    },
  },
});

export const consoleActions = console.actions;
