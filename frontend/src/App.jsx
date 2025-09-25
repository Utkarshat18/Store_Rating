import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
