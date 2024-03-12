import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    value: "", // Initial state for the email value
  },
  reducers: {
    setEmail: (state, action) => {
      state.value = action.payload; // Set the email value
    },
  },
});

export const { setEmail } = emailSlice.actions;

export default emailSlice.reducer;
