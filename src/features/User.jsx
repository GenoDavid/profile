import { createSlice } from "@reduxjs/toolkit";

const isgo = JSON.parse(localStorage.getItem('name'))

export const userSlice = createSlice({
    name: 'user',
    initialState: { isopen: true, isgo: isgo ? isgo : false },
    reducers: {
        account: (state, action) => {
            state.isopen = action.payload
        },
        home: (state, action) => {
            state.isgo = action.payload
            localStorage.setItem('name', JSON.parse(state.isgo))
        },
        logout: (state, action) => {
            state.isgo = action.payload
            localStorage.setItem('name', JSON.parse(state.isgo))
        }
    }
})
export const { account, home, logout } = userSlice.actions;
export default userSlice.reducer;