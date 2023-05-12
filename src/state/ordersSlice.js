import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';


const initialState = [
  {
    uuid: uuid(),
    size: null,
    crust: 1,
    toppings: {},
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

      state[0].toppings = {
        ...state[0].toppings,
        ...newSelections
      }
    },
    updateCrust: (state, action) => {
      state.crust = action.payload.crustId;
    },
    updateSize: (state, action) => {
      state.size = action.payload.sizeId;
    },
  },
});

export const { updateTopping, updateCrust, updateSize } = ordersSlice.actions;

export const { reducer, toppings, crust, size } = ordersSlice;
