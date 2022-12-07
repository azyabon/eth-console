import { configureStore } from "@reduxjs/toolkit";
import { console } from "./console";
import { user } from "./user";

export const store = configureStore({
  reducer: {
    console: console.reducer,
    user: user.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
