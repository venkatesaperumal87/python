
import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Discover Your <span>Perfect Rental</span></h1>
      <p>Rent Houses, PG and Buy the plots, flats, and House</p>
      <div className="search-bar">
        <input type="text" placeholder="Property type" />
        <input type="text" placeholder="Select Location" />
        <button>🔍</button>
      </div>
      <button className="register-btn">Register</button>
    </div>
  );
}



