import React from "react";
import homepageimg from "../assets/homepagereview.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
    <img src={homepageimg} alt="Error" style={{ width: "500px", marginTop: "50px",marginLeft:"200px"}}/>
    <div className="homepage-content">
      <h3>"Discover the Best Products with Real User Ratings"</h3>
      <p>Welcome to Store-Rating! Explore top-rated products, read honest reviews, 
and make smarter shopping choices. Our platform helps you find quality products 
that fit your needs. Join thousands of satisfied shoppers today!</p>
    </div>
    </div>
  );
}

export default Homepage;