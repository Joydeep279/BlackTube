import { createSlice } from "@reduxjs/toolkit";

const LiveChatStore = createSlice({
  name: "ChatCache",
  initialState: [],
  reducers: {
    addChat: (state, action) => {
      if (state.length >= 20) state.pop();

      state.unshift(action.payload);
    },
  },
});
export const { addChat } = LiveChatStore.actions;
export default LiveChatStore.reducer;
