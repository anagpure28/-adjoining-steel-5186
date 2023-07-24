import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Products from '../Pages/Products'
import SingleProductsPage from '../Pages/SingleProductsPage'
import SignUp from '../Pages/SignUp'
import Login from "../Pages/Login"
import NotFound from '../Pages/NotFound'
import AdminLogin from '../Admin/AdminLogin'
import SavedPage from '../Pages/SavedPage'
import ProfilePage from '../Pages/ProfilePage'
import { AdminPage } from '../Admin/AdminPage'
import { AdminDashboard } from '../Admin/AdminDashboard'

export const AllRoutes = () => {
  return (

    <Routes>
      {/* Users */}
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/recipes' element={<Products/>} />
      <Route path='/savedrecipes' element={<SavedPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/recipes/:id' element={<SingleProductsPage/>} />
      <Route path='/register' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<NotFound/>} />

      {/* Admin */}
      <Route path='/adminlogin' element={<AdminLogin/>} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/admindashboard' element={<AdminDashboard/>} />
    </Routes>

  )
}
