import React from "react";
import "./Navbar.css"; // Import the CSS file for styling
import skinImg from "../assets/images/auth-bg.jpg";
import Img from "../assets/images/logo.svg"
function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* <img
              src="https://source.unsplash.com/random"
              alt="Random Image"
              align="center"
            ></img> */}
        <h1 align="center" font="Chewy" >DropShip</h1>

        <div className="navbar-left">
          <div className="nav-logo" align="left" >
            <img
              src={Img}
              alt="Random Image"
            ></img>
          </div>
          <div className="navbar-text">



          </div>
          <div className="navbar-right">
            <div className="navbar-dropdown">
              <button className="dropdown-btn">Menu</button>
              <div className="dropdown-content">
                <a href="http://localhost:3000/:username/Buy">Buy</a>
                <a href="http://localhost:3000/:username/Sell">Sell</a>
                <a href="http://localhost:3000/Login">Login</a>

              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
