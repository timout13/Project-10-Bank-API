import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice.js';
import authReducer from './slices/authSlice.js';
export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    }
})