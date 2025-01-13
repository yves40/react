import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counter = createSlice({
    name: "counter",
    initialState, // équivaut à initialState: initialState,
    reducers: {
      increment: (state, action) => {
        state.value++;
      }
    }
})

export const {increment} = counter.actions
export default counter.reducer
