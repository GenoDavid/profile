import { createSlice } from "@reduxjs/toolkit";
const isgos = JSON.parse(localStorage.getItem('name'))
const isop = JSON.parse(localStorage.getItem('open'))

export const userSlice = createSlice({
    name: 'user',
    initialState: { isopen: isop ? isop : false, isgo: isgos ? isgos : false },
    reducers: {
        account: (state, action) => {
            state.isopen = action.payload
        },
        register: (state, action) => {
            state.isopen = action.payload
            localStorage.setItem('open', JSON.parse(state.isopen))
        },
        home: (state, action) => {
            state.isgo = action.payload
            localStorage.setItem('name', JSON.parse(state.isgo))
        },
        logout: (state, action) => {
            state.isgo = action.payload
            localStorage.setItem('name', JSON.parse(state.isgo))
        },


    }
})
export const { account, home, logout } = userSlice.actions;
export default userSlice.reducer;