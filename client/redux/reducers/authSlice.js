import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'Authentication',
    initialState: { isLoggedIn : false},
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
    },
});

// export const { THE REDUCERS } = authSlice.actions;

export default authSlice.reducer;