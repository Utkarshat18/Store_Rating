import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Store-Rating 🛒</h1>
      <div className="navbar-buttons">
        <button type="button" className="btn btn-primary"  onClick={() => navigate("/login")}>Login</button>
        <button type="button" className="btn btn-danger"  onClick={handleLogout}>LogOut</button>
      </div>
    </nav>
  );
}

export default Navbar;