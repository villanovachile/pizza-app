import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crust: [
    { name: "Original", value: true, id: 1 },
    { name: "Garlic Butter", value: false, id: 2 },
    { name: "Stuffed Crust", value: false, id: 3 },
  ],
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
    updateCrust: (state, action) => {
      const { id, value } = action.payload;
      const crust = state.crust.find((crust) => crust.id === id);

      if (crust) {
        crust.value = value;
      }
    },
  },
});

export const { updateTopping, updateCrust } = optionsSlice.actions;

export const { reducer, toppings, crust } = optionsSlice;
