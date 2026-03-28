import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthForm from "./Components/AuthForm";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage if already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
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
}

export default App;