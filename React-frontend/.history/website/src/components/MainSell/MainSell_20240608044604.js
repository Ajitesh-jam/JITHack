import React from "react";
import "./MainSell.css";
import productImage from "../assets/images/hero-bg.jpg"; // Adjust the path based on your file structure

const MainSell = (props) => {
  const username = props.username;
  // async function sell(price) {
  //   //check if the skin is unique by comparing metadata

  //   // Call the buy function in the smart contract
  //   //connect to ploygon contarcts byawait polygonContract();
  //   // connect to polygon accounts

  //   const gas = await contract.methods
  //     .buySkin(index, username)
  //     .estimateGas({ from: accounts[0], value: price });

  //   const transaction = await contract.methods
  //     .buySkin(index, username)
  //     .send({ from: accounts[0], value: price, gas: gas });
  //   console.log(
  //     "Successfully buyed skin ,Transaction Hash: ",
  //     transaction.transactionHash
  //   );
  // }
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
