import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./pages/Homepage";
import Adminhomepage from "./pages/Adminpage/adminhomepage";
import Userdashboard from "./pages/Userdashboard/userdashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={ 
            <ProtectedRoute role="admin">
            <Adminhomepage />
            </ProtectedRoute>} />
          <Route path="/user" element={
            <ProtectedRoute role="user">
            <Userdashboard />
            </ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
