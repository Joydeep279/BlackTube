import { createSlice } from "@reduxjs/toolkit";

const LiveChatStore = createSlice({
  name: "ChatCache",
  initialState: {
    status: false,
    data: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.length >= 20) state.pop();

      state.data.unshift(action.payload);
    },
    toggleLiveStatus: (state) => {
      state.status = !state.status;
    },
  },
});
export const { addChat ,toggleLiveStatus} = LiveChatStore.actions;
export default LiveChatStore.reducer;
