import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    cart: [

    ]
}


const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOne: (state, action) => {
            // Payload contains a fruit object
            // Check fruit presence
            const fruitIndex= state.cart.findIndex(obj => obj.id === action.payload.id)
            if(fruitIndex !== -1 ) {
                state.cart[fruitIndex].quantity++
            }
            else {
                state.cart.push({...action.payload, quantity: 1})
            }
        },
        removeOne: (state, action) => {
            // The payload only contains the fruit ID
            const fruit = state.cart.find(obj => obj.id === action.payload)
            if(fruit)  {
                if(fruit.quantity === 1) {
                  state.cart = state.cart.filter(fruit => fruit.id !== action.payload)  
                }
                else {
                   fruit.quantity-- 
                }
            }
        }
    }
})

export const { addOne, removeOne} = cart.actions
export default cart.reducer
