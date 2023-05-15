import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';


const initialState = [
  {
    uuid: uuid(),
    pizza: {
      size: null,
      crust: 1,
      toppings: {},
    },
  }
];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateTopping: (state, action) => {
      const { selection, toppingIds } = action.payload;
      const newSelections = {};

      toppingIds.forEach(toppingid => {
        newSelections[toppingid] = selection;
      });

      state[0].pizza.toppings = {
        ...state[0].pizza.toppings,
        ...newSelections
      }
    },
    updateCrust: (state, action) => {
      state[0].pizza.crust = action.payload.crustId;
    },
    updateSize: (state, action) => {
      state[0].pizza.size = action.payload.sizeId;
    },
  },
});

export const { updateTopping, updateCrust, updateSize } = ordersSlice.actions;

export const { reducer, toppings, crust, size } = ordersSlice;
