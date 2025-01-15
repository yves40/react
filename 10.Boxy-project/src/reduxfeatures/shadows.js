import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
            {
                inputNumber : 1,
                name: 'Horizontal effect',
                value: 0,
                type: "range",
                minMax: [ -250, 250]
            },
            {
                inputNumber : 2,
                name: 'Vertical effect',
                value: 10,
                type: "range",
                minMax: [ -250, 250]
            },
            {
                inputNumber : 3,
                name: 'Blur radius',
                value: 15,
                type: "range",
                minMax: [ 0, 250]
            },
            {
                inputNumber : 4,
                name: 'Spread offset',
                value: -3,
                type: "range",
                minMax: [ -250, 250]
            },
            {
                inputNumber : 5,
                name: 'Color',
                value: "#4f4f4f",
                type: "color",
            },
        ]
    }
]

const shadowSlice = createSlice(
    {
        name: "shadows",
        initialState,
        reducers: {
            removeShadow: (state, action) => {

            },
            addShadow: (state, action) => {
                // Just push a new object with default params
                state.push(
                    {
                        id: nanoid(8),
                        active: true,
                        inset: false,
                        inputs: [
                            {
                                inputNumber : 1,
                                name: 'Horizontal effect',
                                value: 0,
                                type: "range",
                                minMax: [ -250, 250]
                            },
                            {
                                inputNumber : 2,
                                name: 'Vertical effect',
                                value: 10,
                                type: "range",
                                minMax: [ -250, 250]
                            },
                            {
                                inputNumber : 3,
                                name: 'Blur radius',
                                value: 15,
                                type: "range",
                                minMax: [ 0, 250]
                            },
                            {
                                inputNumber : 4,
                                name: 'Spread offset',
                                value: -3,
                                type: "range",
                                minMax: [ -250, 250]
                            },
                            {
                                inputNumber : 5,
                                name: 'Color',
                                value: "#4f4f4f",
                                type: "color",
                            },
                        ]
                    }
                )
            },
            updateShadowValue: (state, action) => { 
                // Find modified shadow entry
                const currentShadow = state.find(
                    shadow => shadow.id === action.payload.shadowID
                )
                // Find the input parameter being changed pointed 
                // by inputNumber
                const currentInput = currentShadow.inputs.find(
                    params => params.inputNumber === action.payload.inputNumber
                )
                currentInput.value = action.payload.value
            },
            updateCheckbox: (state, action) => {

            },
        }
    }
)

export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } = shadowSlice.actions
export default shadowSlice.reducer

