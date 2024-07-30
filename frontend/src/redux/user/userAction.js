import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const userRegisterAction = createAsyncThunk("user/register", async (userData, { rejectWithValue, getState }) => {
    console.log(userData, "user");
    try {
        const { data: { result } } = await api.post("/user/register", userData)
        // const bt = `Bearer ${result.token}`
        const data = { ...result, token: result.token }
        localStorage.setItem("login", JSON.stringify({ userLogin: data }))
        // console.warn(data.result.token, "reg");
        return data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message)
    }
})

export const userLoginAction = createAsyncThunk("user/login", async (loginData, { rejectWithValue, getState }) => {
    try {
        const { data: { result } } = await api.post("/user/login", loginData)
        // const bt = `Bearer ${result.token}`
        const data = { ...result, token: result.token }
        localStorage.setItem("login", JSON.stringify({ userLogin: data }))
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
