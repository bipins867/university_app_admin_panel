import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authAction = authSlice.actions;

export default store;
