import Home from './Home'
import Map from './Map'
import SignUp from "./SignUp"
import Mob from './Mob';
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signup' element={<SignUp />} />
      <Route path="mob" element={< Mob />} />
    </Routes>
  )
}

export default App
