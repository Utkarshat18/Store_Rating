import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Store-Rating 🛒</h1>
      <div className="navbar-buttons">
        <button type="button" className="btn btn-primary"  onClick={() => navigate("/login")}>Login</button>
        <button type="button" className="btn btn-primary" onClick={()=>navigate("/register")}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;