import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import skinImg from "../assets/images/hero-bg.jpg";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <div className="nav-logo">
          <img src={skinImg} alt="Example" />

          <span className="nav-name" style={{ fontFamily: 'Chewy, sans-serif' }}>DropShip</span>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">Buy</button>

        </div>
      </div>
      <div className="navbar-right">
        <div className="nav-dropdown">
          <button className="dropdown-button">Dropdown</button>
          <div className="dropdown-content">
            <a href="https://github.com/Ajitesh-jam/JITHack">Dropdown Item 1</a>
            <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQVwwwNdptcgPlbKwkrvBWqbKDr">Dropdown Item 2</a>
            <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQVwwwNdptcgPlbKwkrvBWqbKDr">Dropdown Item 3</a>
          </div>
        </div>
        <div className="navbar-image-container">
        <img src="https://source.unsplash.com/random/1920x1080" alt="Navbar Background" className="navbar-image" />
        <div className="navbar-text">
          <h1>Heading</h1>
          <p>Line 1</p>
          <p>Line 2</p>
          
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;