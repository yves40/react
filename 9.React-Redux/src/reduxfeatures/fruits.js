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
    initialState
})

export default fruits.reducer
