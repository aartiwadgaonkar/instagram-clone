import { createSlice } from "@reduxjs/toolkit";
import { createPostAction, getPostDataAction } from "./createPostAction";

const postSlice = createSlice({
    name: "post",
    initialState: { posts: [] },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createPostAction.pending, (state) => {
                state.loading = true
            })
            .addCase(createPostAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.postadded = true
            })
            .addCase(createPostAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload.message || payload
            })
            .addCase(getPostDataAction.pending, (state) => {
                state.loading = true
            })
            .addCase(getPostDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.posts = payload
            })
            .addCase(getPostDataAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

    }
})
export default postSlice.reducer