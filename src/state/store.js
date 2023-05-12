import { configureStore } from "@reduxjs/toolkit";
import { reducer as ordersReducer } from "./ordersSlice";
import { reducer as optionsReducer } from "./optionsSlice";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    options: optionsReducer,
  },
});

export default store;
