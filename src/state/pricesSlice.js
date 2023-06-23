import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    4: {
        "Small": 0,
        "Medium": 0,
        "Large": 0,
    },
    5: {
        "Small": 100,
        "Medium": 100,
        "Large": 100,
    },
    6: {
        "Small": 100,
        "Medium": 100,
        "Large": 100,
    },
    7: {
        "Small": 100,
        "Medium": 150,
        "Large": 200,
    },
    8: {
        "Small": 75,
        "Medium": 100,
        "Large": 125,
    },
    9: {
        "Small": 100,
        "Medium": 150,
        "Large": 200,
    },
    10: {
        "Small": 85,
        "Medium": 120,
        "Large": 145,
    },
    11: {
        "Small": 75,
        "Medium": 100,
        "Large": 125,
    },
    12: {
        "Small": 75,
        "Medium": 100,
        "Large": 125,
    },
    13: {
        "Small": 75,
        "Medium": 100,
        "Large": 125,
    },
};

const pricesSlice = createSlice({
    name: "prices",
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

export const { updateTopping, updateCrust, updateSize } = pricesSlice.actions;

export const { reducer } = pricesSlice;
