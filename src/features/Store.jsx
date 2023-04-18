import { configureStore } from "@reduxjs/toolkit";
import Imageslice from "./Images";
import userSlice from "./User";

export const store = configureStore({
    reducer: {
        image: Imageslice,
        user: userSlice
    }
})