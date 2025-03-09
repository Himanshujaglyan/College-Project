import React from 'react'
import Navbar from './Navbar'
import MiddleContainer from './MiddleContainer'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import { Routes, Route } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
        <Navbar/>
        <MiddleContainer/>
        <Footer/>
    </div>
  )
}

export default MainContainer