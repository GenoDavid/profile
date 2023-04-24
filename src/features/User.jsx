import { createSlice } from "@reduxjs/toolkit";
const isgo = JSON.parse(localStorage.getItem('name'))
const isop = JSON.parse(localStorage.getItem('open'))

export const userSlice = createSlice({
    name: 'user',
    initialState: { isopen: isop ? isop : false, isgo: isgo ? isgo : false },
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
        },
        register: (state, action) => {
            state.isopen = action.payload
            localStorage.setItem('open', JSON.parse(state.isopen))
        }
    }
})
export const { account, home, logout } = userSlice.actions;
export default userSlice.reducer;