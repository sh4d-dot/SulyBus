import Home from './Components/Home'
import Map from './Components/Map'
import SignUp from "./Components/SignUp"
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './index.css'
import About from './Components/About'
import AuthForm from './Components/AuthForm';
function App() {
  
  return (


     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/authform' element={<AuthForm />} />
    </Routes>

   
  )
}

export default App
