import React from "react";
import "./MainSell.css";
import productImage from "../assets/images/hero-bg.jpg"; // Adjust the path based on your file structure

const MainSell = () => {
  function sellSkin() {
    console.log("Selling Skin");
  }
  return (
    <div className="main-sell-container">
      <div className="card">
        <img src={productImage} alt="Product" className="product-image" />
        <div className="attributes">
          <p className="attribute">Name</p>
          <p className="attribute">Average selling price</p>
          <p className="attribute">set price</p>
          <p className="attribute">Attribute 4</p>
        </div>
        <div className="buttons">
          <button className="button">Verify</button>
          <button className="button">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default MainSell;
