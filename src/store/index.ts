import { configureStore } from "@reduxjs/toolkit";
import { console } from "./console";

export const store = configureStore({
  reducer: {
    console: console.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
