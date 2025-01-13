import {configureStore} from '@reduxjs/toolkit'
import counter from './reduxfeatures/counter'

export const store = configureStore({
    reducer: {
        counter
    }
})
