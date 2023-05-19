import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

<<<<<<< HEAD
=======

>>>>>>> main
const initialState = [
  {
    uuid: uuid(),
    pizza: {
      size: null,
<<<<<<< HEAD
      crust: 4,
=======
      crust: 1,
>>>>>>> main
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

<<<<<<< HEAD
      toppingIds.forEach(toppingId => {
        newSelections[toppingId] = selection;
=======
      toppingIds.forEach(toppingid => {
        newSelections[toppingid] = selection;
>>>>>>> main
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
<<<<<<< HEAD
    removeTopping: (state, action) => {
      const { toppingIds } = action.payload;

      toppingIds.forEach(toppingId => {
        delete state[0].pizza.toppings[toppingId]
      });
    }
  },
});

export const { updateTopping, updateCrust, updateSize, removeTopping } = ordersSlice.actions;
=======
  },
});

export const { updateTopping, updateCrust, updateSize } = ordersSlice.actions;
>>>>>>> main

export const { reducer, toppings, crust, size } = ordersSlice;
