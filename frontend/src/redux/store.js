import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./user/createPostSlice"
import userSlice from "./user/userSlice"
const reduxStore = configureStore({
    reducer: {
        users: userSlice,
        post: postSlice
    }
})

export default reduxStore