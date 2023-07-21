import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Products from '../Pages/Products'
import SingleProductsPage from '../Pages/SingleProductsPage'
import SavedPage from '../Pages/SavedPage'
import ProfilePage from '../Pages/ProfilePage'

export const AllRoutes = () => {
  return (

    <Routes>
      <Route path='/Home' element={<HomePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/recipes' element={<Products/>} />
      <Route path='/savedrecipes' element={<SavedPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/recipes/:id' element={<SingleProductsPage/>} />
    </Routes>

  )
}
