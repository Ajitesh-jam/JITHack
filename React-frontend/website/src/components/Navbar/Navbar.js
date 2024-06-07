import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import skinImg from "../assets/images/hero-bg.jpg";
function Navbar() {
  return (
    <>

      <div class="navbar-container">

        <nav class="navbar">
          <img src="../assets/images/hero-bg.jpg" align="center"></img>
          <h1 align="center" >Company Name</h1>

          <div class="navbar-left">
            <div class="navbar-text">
              <span class="nav-name">Company Name</span>
            </div>
          </div>
          <div class="navbar-right">
            <div class="navbar">
              

              <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                  <a href="#">Buy</a>
                  <a href="#">Sell</a>
                  <a href="#">Log Out</a>
                </div>
              </div>
              <div class="nav-logo">
                {/* <img src="https://source.unsplash.com/random" alt="Random Image"></img>  */}

              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;




<button class="dropdown-button">Dropdown</button>