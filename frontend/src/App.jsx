import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import LoginOnly from './pages/LoginOnly'
import Navbar from './pages/Navbar'
import Login from './user/Login'
import Post from './user/Posts'
import Profile from './user/Profile'
import Register from './user/Register'

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<LoginOnly element={<Profile />} />} />
        <Route path='/post' element={<LoginOnly element={< CreatePost />} />} />
        <Route path='/showpost' element={<LoginOnly element={< Post />} />} />
        {/* <Route  path='/' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
    {/* <Login /> */}
  </>
}
