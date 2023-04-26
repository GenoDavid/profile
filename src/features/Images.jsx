import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banner: [{
        imageSrc: "https://www.upgrad.com/blog/wp-content/uploads/2020/04/473.png"
    }],
    Menus: ['Data Science Courses', 'Software Engineering', 'Doctorate', 'AI & ML', 'Marketing', 'Business Analytics', 'Project Managment']
}
export const Imageslice = createSlice({
    name: 'image',
    initialState,
    reducers: {

    }
})
export default Imageslice.reducer