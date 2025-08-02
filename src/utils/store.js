import { configureStore } from "@reduxjs/toolkit";
import navState from "./navState";
import cache from "./searchCache";
const store = configureStore({
  reducer: {
    nav: navState,
    search: cache,
  },
});
export default store;
