import { createSlice } from "@reduxjs/toolkit";

const cache = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    addToCache: (state, action) => {
      state = Object.assign(state,action.payload);
    },
  },
});
export const { addToCache } = cache.actions;
export default cache.reducer;
