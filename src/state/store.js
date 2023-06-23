import { configureStore } from "@reduxjs/toolkit";
import { reducer as ordersReducer } from "./ordersSlice";
import { reducer as optionsReducer } from "./optionsSlice";
import { reducer as pricesReducer } from "./pricesSlice";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    options: optionsReducer,
    prices: pricesReducer,
  },
});

export default store;
