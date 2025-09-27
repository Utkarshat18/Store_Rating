import React, { useState } from "react";
import "./Addstoreform.css";
import { useNavigate } from "react-router-dom";

const Addstoreform = () => {
    const navigate = useNavigate();
  const [storeData, setStoreData] = useState({
    name: "",
    location: "",
    description: "",
    category: "",
    storeowner: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    const copystoredata={...storeData};
    copystoredata[name]=value;
    setStoreData(copystoredata);
  };

  const handleCancel=()=>{
    navigate("/admin");
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {name,location,description,category,storeowner}=storeData;
    if(!name || !location || !description || !category || !storeowner){
        alert("Please fill all the fields");
        return;
    }
    try{
        const url="http://localhost:8000/store/addstore";
        const response=await fetch(url,{method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(storeData)
        });

        const result=await response.json();
        const {success,message}=result;
        if(success){
            setTimeout(() => {
                alert("Store added successfully"); 
            },);
            navigate("/admin");
        }
        setTimeout(() => {
            alert(message);
        },);
    }catch(err){
        alert("something went wrong");
    }
  }

  return (
    <div className="addstore-form-container">
        <button className="cancel-btn" onClick={handleCancel}>✖</button>
      <h2>Add New Store 🛒</h2>
      <form className="addstore-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Store Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter store name"
            value={storeData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter store location"
            value={storeData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter store description"
            value={storeData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={storeData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Store Owner</label>
          <input
            type="text"
            name="storeowner"
            placeholder="Enter owner's name"
            value={storeData.storeowner}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Add Store</button>
      </form>
    </div>
  );
};

export default Addstoreform;
