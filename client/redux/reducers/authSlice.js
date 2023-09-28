import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLoggedIn : false}

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
    },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;