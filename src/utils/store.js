import { configureStore } from "@reduxjs/toolkit";
import navState from "./navState";
import cache from "./searchCache";
import LiveChatStore from "./LiveChatStore";
const store = configureStore({
  reducer: {
    nav: navState,
    search: cache,
    liveChat: LiveChatStore,
  },
});
export default store;
