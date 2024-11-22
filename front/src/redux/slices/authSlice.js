import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 0
    },
    reducers: {
        login: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        logout: state => {
            state.value -= 1
        },
        update: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout, update } = userSlice.actions

export default userSlice.reducer