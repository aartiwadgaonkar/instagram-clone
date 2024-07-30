import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/user/userSlice'

export default function Navbar() {
    const dispatch = useDispatch()
    return <nav class="navbar navbar-expand-lg bg-light">

        <div class="container-fluid">
            <Link class="navbar-brand" to='/'>Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" to='/login'>login</Link>
                    <Link class="nav-link" to='/register'>register</Link>
                    <Link class="nav-link" to='/profile'>profile</Link>
                    <Link class="nav-link" to='/post'>Create Post</Link>
                    <Button variant='dark' onClick={e=>dispatch(logout())} >Logout</Button>
                </div>
            </div>
        </div>
    </nav>
}
