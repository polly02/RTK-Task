import { createSlice } from "@reduxjs/toolkit"

export const emailSlice = createSlice({
    name: 'email',
    initialState: {
        value: ""
    },
    reducers: {
        validEmail: (state, input) => {
            if(/^[\w\!\.\%\-\_\*\&\$]+@[a-w]+\.[a-w]+$/g.test(input.payload)) {
                state.value = 'почта верная'
            } else {
                state.value = 'почта неверная'
            }
            
            // state.value = eval(input.payload)
        }
    }
})

export const { validEmail } = emailSlice.actions
export default emailSlice.reducer