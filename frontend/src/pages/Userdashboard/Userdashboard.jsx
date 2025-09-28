import React, { useEffect, useState } from "react";
import "./Userdashboard.css";

const Userdashboard = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("http://localhost:8000/store/getallstore");
        const data = await response.json();
        if (data.success) {
          setStores(data.stores);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchStores();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Available Stores 🏬</h2>
      {stores.length === 0 ? (
        <p className="no-stores">No stores available yet.</p>
      ) : (
        <div className="store-list">
          {stores.map((store) => (
            <div key={store._id} className="store-card">
              <h3 className="store-name">{store.name}</h3>
              <p className="store-description">{store.description}</p>
              <p className="store-location">📍 {store.location}</p>

              <form
                className="rating-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const rating = e.target.rating.value;
                  try {
                    const token = localStorage.getItem("token");
                    const res = await fetch(
                      `http://localhost:8000/rating/${store._id}/rate`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ rating }),
                      }
                    );
                    const data = await res.json();
                    if (data.success) {
                      alert("Review added successfully!");
                      window.location.reload();
                    } else {
                      alert(data.message || "Failed to add review");
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <select name="rating" required className="rating-select">
                  <option value="">⭐ Rate this store</option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <button type="submit" className="rating-btn">
                  Submit
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Userdashboard;
