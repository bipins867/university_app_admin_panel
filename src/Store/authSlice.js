import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  initialState: initState,
  name: "auth",
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export default authSlice;
