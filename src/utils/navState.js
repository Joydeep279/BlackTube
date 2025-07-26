import { createSlice } from "@reduxjs/toolkit";

const nav = createSlice({
  name: "NavState",
  initialState: {
    isNavOpen: true,
  },
  reducers: {
    toggleNavState: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});
export const { toggleNavState } = nav.actions;
export default nav.reducer;
