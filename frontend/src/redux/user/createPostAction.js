import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const createPostAction = createAsyncThunk("user/post", async (postData, { rejectWithValue, getState }) => {
    console.log(postData, "postData");
    try {
        const { data } = await api.post("/post/addpost", postData,
            {
                headers: {
                    authorization: getState().users.userLogin.token
                }
            })
        // return data.result
        console.log(data, "data");
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const getPostDataAction = createAsyncThunk("get/post", async (postData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/post/getpost", {
            headers: {
                authorization: getState().users.userLogin.token
            }
        })
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})