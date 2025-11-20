import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import DashBoard from './Components/DashBoard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={DashBoard}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}