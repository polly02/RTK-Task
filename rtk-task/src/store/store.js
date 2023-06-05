import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import mathSlice from '../slice/mathSlice'
import emailSlice from '../slice/emailSlice'
import themeSlice from '../slice/themeSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        math: mathSlice,
        email: emailSlice,
        theme: themeSlice
    }
})