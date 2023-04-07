import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: [
    { name: "Small", value: true, id: 1 },
    { name: "Medium", value: false, id: 2 },
    { name: "Large", value: false, id: 3 },
  ],
  crust: [
    { name: "Original", value: true, id: 1 },
    { name: "Garlic Butter", value: false, id: 2 },
    { name: "Stuffed Crust", value: false, id: 3 },
  ],
  toppings: [
    {
      name: "Pepperoni",
      selection: "none",
      id: 1,
    },
    {
      name: "Onions",
      selection: "none",
      id: 2,
    },
    {
      name: "Sausage",
      selection: "none",
      id: 3,
    },
    {
      name: "Pineapple",
      selection: "none",
      id: 4,
    },
    {
      name: "Mushrooms",
      selection: "none",
      id: 5,
    },
    {
      name: "Green peppers",
      selection: "none",
      id: 6,
    },
    {
      name: "Olives",
      selection: "none",
      id: 7,
    },
  ],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    updateTopping: (state, action) => {
      const { id, selection } = action.payload;
      const topping = state.toppings.find((topping) => topping.id === id);

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
    updateSize: (state, action) => {
      const { id, value } = action.payload;
      const size = state.size.find((size) => size.id === id);

      if (size) {
        size.value = value;
      }
    },
  },
});

export const { updateTopping, updateCrust, updateSize } = optionsSlice.actions;

export const { reducer, toppings, crust, size } = optionsSlice;
