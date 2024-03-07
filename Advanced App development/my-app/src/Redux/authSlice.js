import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    exp: null,
    iat: null,
    role: null,
    sub: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.exp = action.payload.exp;
      state.iat = action.payload.iat;
      state.role = action.payload.role;
      state.sub = action.payload.sub;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
