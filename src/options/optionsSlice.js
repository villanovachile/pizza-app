import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: [
    {
      name: "pepperoni",
      selection: "none",
    },
    {
      name: "onions",
      selection: "none",
    },
    {
      name: "sausage",
      selection: "none",
    },
    {
      name: "pineapple",
      selection: "none",
    },
    {
      name: "mushrooms",
      selection: "none",
    },
    {
      name: "green peppers",
      selection: "none",
    },
    {
      name: "olives",
      selection: "none",
    },
  ],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    updateTopping: (state, action) => {
      const { name, selection } = action.payload;
      const topping = state.toppings.find((topping) => topping.name === name);

      if (topping) {
        topping.selection = selection;
      }
    },
  },
});

export const { updateTopping } = optionsSlice.actions;

export const { reducer, toppings } = optionsSlice;
