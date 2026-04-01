import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import AuthForm from "./Components/AuthForm";
import Home from "./Components/Home";
import About from "./Components/About";
import Account from "./Components/Account"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/login"
        element={!user ? <AuthForm setUser={setUser} /> : <Navigate to="/home" />}
      />

      {/* Protected */}
      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/about"
        element={user ? <About /> : <Navigate to="/login" />}
      />

      <Route 
      path="/account" 
      element={user ? <Account /> : <Navigate to="/login" />}/>

      {/* Default route */}
      <Route
        path="/"
        element={<Navigate to={user ? "/home" : "/login"} />}
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to={user ? "/home" : "/login"} />} />

      
    </Routes>
  );
}

export default App;