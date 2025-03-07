import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 100,
    intervalID: undefined
}

const chrono = createSlice({
    name: "chrono",
    initialState,
    reducers: {
        tick: (state, action) => {
            state.value--;
        },
        reset: (state, action) => {
            state.value = 100
            state.intervalID && window.clearInterval(state.intervalID)
            state.intervalID = undefined
        },
        setUpID: (state, action) => {
            state.intervalID = action.payload
        }
    }
})
export function startChrono(action) {
    return function(dispatch, getState) {
        if(getState().chrono.intervalID) {
            return // Already running !!
        }
        const intervalID = setInterval( () => {
            dispatch(tick())
        }, 1000)
        dispatch(tick())    // Necessary to avoid start delay
        dispatch(setUpID(intervalID))
    }
}
export const { tick, reset, setUpID } = chrono.actions
export default chrono.reducer