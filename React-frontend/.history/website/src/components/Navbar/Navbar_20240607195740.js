import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import skinImg from "../assets/images/hero-bg.jpg";
function Navbar() {
  return (
    <div class="navbar-container">
    <nav class="navbar">
  <div class="navbar-left">
    <div class="navbar-text">
      <h1>Say Yes to Creativity</h1>
      <img src="https://source.unsplash.com/random" alt="Random Image"></img>
      <p>Welcome to our marketplace, where creativity meets convenience. Explore an array of meticulously crafted skins and rifles designed by independent artists, offering a solution to the time constraints of creativity.<br></br> With the added security of blockchain technology, indulge in an unhindered exchange of unique commodities unlike any other.</p>
      
      
    </div>
  </div>
  <div class="navbar-right">
    <div class="nav-dropdown">
      <button class="dropdown-button">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
    </div>
    <div class="nav-logo">
    <img src="https://source.unsplash.com/random" alt="Random Image"></img>
      <span class="nav-name">Company Name</span>
    </div>
  </div>
</nav>
</div>

  );
}

export default Navbar;