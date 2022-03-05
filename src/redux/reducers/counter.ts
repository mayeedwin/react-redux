import { createSlice } from "@reduxjs/toolkit";

// Counter slice...
const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count+= 1
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Action creators...
const { increment, decrement } = counter.actions;
const counterReducer = counter.reducer;

export { increment, decrement, counterReducer };
