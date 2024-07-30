import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function LoginOnly({ element }) {
    const { userLogin } = useSelector(state => state.users)
    return userLogin && userLogin.token ? element : <Navigate to='/' />
}
