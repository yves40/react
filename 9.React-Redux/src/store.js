import {configureStore} from '@reduxjs/toolkit'
import counter from './reduxfeatures/counter'
import fruits from './reduxfeatures/fruits'

export const store = configureStore({
    reducer: {
        counter,
        fruits
    }
})
