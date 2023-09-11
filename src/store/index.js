import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/PostSlice"; 
import userSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
        users: userSlice

    }
})

export default store