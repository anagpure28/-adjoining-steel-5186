import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/Contact'
import About from '../Pages/About'

export const AllRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />


    </Routes>

  )
}
