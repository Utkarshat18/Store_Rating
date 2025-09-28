import React from "react";
import { useEffect } from "react";

const Userdashboard = () => {
  const [stores,setstores]=React.useState([]);

  useEffect(()=>{
    const fetchstores=async()=>{
      try{
        const response=await fetch('http://localhost:8000/store/getallstore');
        const data=await response.json();
        console.log(data);
        if(data.success){
          setstores(data.stores);
        }

      }catch(err){
        console.log(err);
      }
    }
    fetchstores();
  },[]);


  return (<div>
  <h2>Available Stores 🏬</h2>
  {stores.length === 0 ? (
        <p>No stores available yet.</p>
      ) : (
        <ul>
          {stores.map((store) => (
            <li key={store._id}>
              <h3>{store.name}</h3>
              <p>{store.location}</p>
              <form
  onSubmit={async (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/rating/${store._id}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ rating })
      });
      const data = await res.json();
      if (data.success) {
        alert("Review added successfully!");
        window.location.reload(); // or re-fetch stores
      } else {
        alert(data.message || "Failed to add review");
      }
    } catch (err) {
      console.error(err);
    }
  }}
>
  <select name="rating" required>
    <option value="">Rate this store</option>
    <option value="1">⭐</option>
    <option value="2">⭐⭐</option>
    <option value="3">⭐⭐⭐</option>
    <option value="4">⭐⭐⭐⭐</option>
    <option value="5">⭐⭐⭐⭐⭐</option>
  </select>
  <button type="submit">Submit</button>
</form>

            </li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Userdashboard;