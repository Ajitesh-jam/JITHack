import React from "react";
import "./MainSell.css";
import productImage from "../assets/images/hero-bg.jpg"; // Adjust the path based on your file structure
import { polygonContract, connectWalletToPolygon } from "../../utils/web";
const MainSell = (props) => {
  const username = props.username;
  async function sell(price) {
    try {
      // Connect to Polygon and obtain the contract instance
      const contract = await polygonContract();

      // Connect the wallet to Polygon to get the user's account
      const accounts = await connectWalletToPolygon();
      const account = accounts[0]; // Assuming there's only one account

      // Estimate the gas required for the transaction
      const gas = await contract.methods
        .sellSkin(price, username)
        .estimateGas({ from: account });

      // Call the sellSkin function in the contract with the appropriate parameters
      const transaction = await contract.methods
        .sellSkin(price, username)
        .send({ from: account, gas: gas });

      console.log(
        "Transaction successful. Transaction Hash:",
        transaction.transactionHash
      );
    } catch (error) {
      console.error("Error selling skin:", error);
    }
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
