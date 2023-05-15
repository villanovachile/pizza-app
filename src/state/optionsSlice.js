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
      id: 1,
    },
    {
      name: "Onions",
      id: 2,
    },
    {
      name: "Sausage",
      id: 3,
    },
    {
      name: "Pineapple",
      id: 4,
    },
    {
      name: "Mushrooms",
      id: 5,
    },
    {
      name: "Green peppers",
      id: 6,
    },
    {
      name: "Olives",
      id: 7,
    },
  ],
  price: [
    {
      toppings: '1'
    },
    {
      size: {
        small: 10,
        medium: 13,
        large: 16
      }
    }
  ],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    updateTopping: (state, action) => {
    },
    updateCrust: (state, action) => {
    },
    updateSize: (state, action) => {
    },
  },
});

export const { updateTopping, updateCrust, updateSize } = optionsSlice.actions;

export const { reducer, toppings, crust, size } = optionsSlice;
