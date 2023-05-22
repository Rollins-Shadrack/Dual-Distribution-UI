import React, {useState} from 'react'
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Buyer from './Pages/Buyer'
import Home from './Pages/Home'
import Retailer from './Pages/Retailer'
import Wholeseller from "./Pages/Wholeseller"
import Dashboard from "./Pages/Dashboard"
import Checkout from "./Pages/Checkout"
import Admin from './Pages/AdminDashboard'
import AdminLogin from './Pages/AdminLogin'
import Undefined from './Pages/Undefined'
import AdminProducts from './Component/Products'
import AdminUsers from './Component/Users'

const App = () => {
  const [user, setUser] = useState('')
   //getting the token
   const token = localStorage.getItem('token')
   const admintoken = localStorage.getItem('admintoken')
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/wholeseller' element={<Wholeseller/>}/>
        <Route path='/retailer' element={<Retailer/>}/>
        <Route path='/buyer' element={<Buyer/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cashout' element={<Checkout/>}/>
        {admintoken && <Route path='/admin' element={<Admin/>}/>}
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/manage/products' element={<AdminProducts/>}/>
        <Route path='/manage/users' element={<AdminUsers/>}/>
        <Route path='*' element={<Undefined/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
