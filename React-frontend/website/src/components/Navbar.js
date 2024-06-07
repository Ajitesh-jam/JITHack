import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="nav-logo">
          <img src="hero-bg.jpg" alt="Logo" />
          <span className="nav-name" style={{ fontFamily: 'Montserrat' }}>DropShip</span>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">Button 1</button>
          <button className="nav-button">Button 2</button>
          <button className="nav-button">Button 3</button>
          <button className="nav-button">Button 4</button>
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
      </div>
    </nav>
  );
}

export default Navbar;