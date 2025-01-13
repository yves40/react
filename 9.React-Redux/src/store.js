import {configureStore} from '@reduxjs/toolkit'
import counter from './reduxfeatures/counter'
import fruits from './reduxfeatures/fruits'
import cart from './reduxfeatures/cart'

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        cart
    }
})
