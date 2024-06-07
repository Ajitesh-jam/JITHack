import React from "react";
import "./Navbar.css"; // Import the CSS file for styling
import skinImg from "../assets/images/hero-bg.jpg";
function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-text">
            <h1>Say Yes to Creativity</h1>
            <img
              src="https://source.unsplash.com/random"
              alt="Random Image"
            ></img>
            <p>
              Welcome to our marketplace, where creativity meets convenience.
              Explore an array of meticulously crafted skins and rifles designed
              by independent artists, offering a solution to the time
              constraints of creativity.<br></br> With the added security of
              blockchain technology, indulge in an unhindered exchange of unique
              commodities unlike any other.
            </p>
          </div>
        </div>
        <div className="navbar-right">
          <div className="nav-dropdown">
            <button className="dropdown-button">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
          <div className="nav-logo">
            <img
              src="https://source.unsplash.com/random"
              alt="Random Image"
            ></img>
            <span className="nav-name">Company Name</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
