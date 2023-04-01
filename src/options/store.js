import { configureStore } from "@reduxjs/toolkit";
import { reducer as optionsReducer } from "./optionsSlice";

const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
});

export default store;
