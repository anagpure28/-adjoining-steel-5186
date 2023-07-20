import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Products from '../Pages/Products'
import SingleProductsPage from '../Pages/SingleProductsPage'

export const AllRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/recipes' element={<Products/>} />
      <Route path='/recipes/:id' element={<SingleProductsPage/>} />
    </Routes>

  )
}
