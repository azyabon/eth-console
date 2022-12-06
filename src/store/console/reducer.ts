import { ConsoleItem, IInitialState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OPENING } from "./config";

const initialState: IInitialState = {
  consoleList: [...OPENING],
};

export const console = createSlice({
  name: "console",
  initialState,
  reducers: {
    addString: (state, action: PayloadAction<ConsoleItem>) => {
      state.consoleList = [...state.consoleList, action.payload];
    },
  },
});

export const consoleActions = console.actions;
