<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthForm from "./Components/AuthForm";
import Home from "./Components/Home";
import About from "./Components/About";

=======
import Home from './Components/Home'
import Map from './Components/Map'
import SignUp from "./Components/SignUp"
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './index.css'
import About from './Components/About'
import AuthForm from './Components/AuthForm';
>>>>>>> 68cccd538d61fceb6c56c9a20105c53d27586866
function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage if already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
<<<<<<< HEAD
    <Routes>
      {/* Login / Register */}
      <Route path="/login" element={<AuthForm setUser={setUser} />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/about"
        element={user ? <About /> : <Navigate to="/login" />}
      />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
=======


     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/authform' element={<AuthForm />} />
    </Routes>

   
  )
>>>>>>> 68cccd538d61fceb6c56c9a20105c53d27586866
}

export default App;