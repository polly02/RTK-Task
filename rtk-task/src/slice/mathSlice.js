import { createSlice } from "@reduxjs/toolkit"

export const mathSlice = createSlice({
    name: 'math',
    initialState: {
        value: 0
    },
    reducers: {
        calculate: (state, input) => {
            state.value = eval(input.payload)
        }
    }
})

export const { calculate } = mathSlice.actions
export default mathSlice.reducer