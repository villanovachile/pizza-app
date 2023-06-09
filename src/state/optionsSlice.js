import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: [
    { name: "Small", value: true, id: 1 },
    { name: "Medium", value: false, id: 2 },
    { name: "Large", value: false, id: 3 },
  ],
  crusts: [
    { name: "Original", id: 4 },
    { name: "Garlic Butter", id: 5 },
    { name: "Stuffed Crust", id: 6 },
  ],
  toppings: [
    {
      name: "Pepperoni",
      id: 7,
    },
    {
      name: "Onions",
      id: 8,
    },
    {
      name: "Sausage",
      id: 9,
    },
    {
      name: "Pineapple",
      id: 10,
    },
    {
      name: "Mushrooms",
      id: 11,
    },
    {
      name: "Green peppers",
      id: 12,
    },
    {
      name: "Olives",
      id: 13,
    },
  ],
  price: {
    toppings: 2,

    size: {
      1: 10,
      2: 13,
      3: 16,
    },
  },
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    updateTopping: (state, action) => {},
    updateCrust: (state, action) => {},
    updateSize: (state, action) => {},
  },
});

export const { updateTopping, updateCrust, updateSize } = optionsSlice.actions;

export const { reducer, toppings, crust, size } = optionsSlice;
