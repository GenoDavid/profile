import { createSlice } from "@reduxjs/toolkit";

const isgo = (localStorage.getItem, 'name')

export const userSlice = createSlice({
    name: 'user',
    initialState: { isopen: true, isgo: isgo ? isgo : false },
    reducers: {
        open: (state, action) => {
            state.isopen = action.payload
        },
        login: (state, action) => {
            state.isgo = action.payload
            // localStorage.setItem('name', JSON.parse(state.isgo))
        }

    }
})
export const { open, login } = userSlice.actions;
export default userSlice.reducer;