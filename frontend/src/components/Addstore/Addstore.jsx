import React from "react";
import "./Addstore.css";
import { useNavigate } from "react-router-dom";

const Addstore = () => {
    const navigate = useNavigate();
  return (
    <div className="addstore-container">
      <div className="addstore-icon">
        <span onClick={()=>navigate("/addstore")} className="material-symbols-outlined">add_business</span>
      </div>
      <p className="addstore-text">Add New Store</p>
    </div>
  );
};

export default Addstore;
