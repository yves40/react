import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            name: 'Mangue',
            url: "/images/mango.jpg",
            price: 5,
            id: 82930302
        }, 
        {
            name: 'Watermelon',
            url: "/images/watermelon.jpg",
            price: 7,
            id: 82990302
        }
    ]
}

const fruits = createSlice({
    name: 'fruits',
    initialState,
    reducers: {

    },
    // Les extraReducers permettent de recevoir des dispatch envoyés à d'autres Reducers
    // Attention : The object notation for `createSlice.extraReducers` is deprecated
    extraReducers: {
        ["cart/addOne"]: (state, action) => {
           console.log('Hello from fruits.js extra reducer');
        }
    }
})

export default fruits.reducer
