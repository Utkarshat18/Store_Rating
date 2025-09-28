import React from "react";
import { useEffect, useState } from "react";
import "./adminhomepage.css";
import Addstore from "../../components/Addstore/Addstore";

const Adminhomepage = () => {
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
        console.error("Error fetching stores:", err);
      }
    };
    fetchStores();
  }, []);

  return (
     <div className="admin-container">
      {/* Welcome Section */}
      <div className="admin-header">
        <h1>Welcome Admin 🎉</h1>
        <p>This is the admin page. Only admins can access this page.</p>
      </div>

      {/* Add Store Section */}
      <div className="add-store-section">
        <h2>Add a New Store 🏬</h2>
        <Addstore />
      </div>

      {/* Stores with Ratings */}
      <div>
        <h2>All Stores & Ratings ⭐</h2>
        {stores.length === 0 ? (
          <p>No stores added yet.</p>
        ) : (
          <div className="store-grid">
            {stores.map((store) => (
              <div className="store-card" key={store._id}>
                <h3>{store.name}</h3>
                <p>{store.description}</p>
                <p>
                  <strong>Location:</strong> {store.location}
                </p>

                {/* Ratings */}
                <div className="ratings">
                  <strong>Ratings:</strong>{" "}
                  {store.ratings && store.ratings.length > 0 ? (
                    <p>
                      Avg:{" "}
                      {(
                        store.ratings.reduce((acc, r) => acc + r.rating, 0) /
                        store.ratings.length
                      ).toFixed(1)}{" "}
                      ⭐ ({store.ratings.length} reviews)
                    </p>
                  ) : (
                    <p>No ratings yet</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
};

export default Adminhomepage;
