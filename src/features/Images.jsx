import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banner: [{
        imageSrc: "https://www.upgrad.com/blog/wp-content/uploads/2020/04/332.png"
    }],
}
export const Imageslice = createSlice({
    name: 'image',
    initialState,
    reducers: {

    }
})
export default Imageslice.reducer