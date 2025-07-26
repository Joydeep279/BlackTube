import { configureStore } from "@reduxjs/toolkit";
import navState from "./navState";
const store = configureStore({
  reducer: {
    nav: navState,
  },
});
export default store;
