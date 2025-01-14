import {configureStore} from "@reduxjs/toolkit"
import shadows from './reduxfeatures/shadows'
import boxProperties from './reduxfeatures/boxProperties'

export const store = configureStore({
    reducer: {
        shadows,
        boxProperties
    }
})
