import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction, userRegisterAction } from "./userAction";
const localLoginData = localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : null

const userSlice = createSlice({
    name: "user",
    initialState: { userLogin: localLoginData?.userLogin },
    reducers: {
        resetUserAction: (state) => {
            state.error = null
            state.register = null
        },
        removeUserRegister(state) {
            state.register = false
        },
        resetUserError(state) {
            state.error = undefined
        },

        logout(state) {
            state.userLogin = null
            localStorage.removeItem("login")
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userRegisterAction.pending, (state) => {
                state.loading = true
            })
            .addCase(userRegisterAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = payload
            })
            .addCase(userRegisterAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(userLoginAction.pending, (state) => {
                state.loading = true
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = payload
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})
export const { resetUserAction, resetUserRegisterError, removeUserRegister, resetUserError, logout } = userSlice.actions
export default userSlice.reducer