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
    closeNavBar: (state) => {
      state.isNavOpen = false;
    },
  },
});
export const { toggleNavState,closeNavBar } = nav.actions;
export default nav.reducer;
