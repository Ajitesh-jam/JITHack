// import React, { useState, useEffect } from "react";
// import {Web3} from "web3";
// import skinMarketABI from "../components/abis/skinMarketABI.json";

// // Function to connect to the skinMarket contract using local Ganache
// export const connectToLocalGanache = async () => {

//   const skinMarketAdd = "0x6c77398C0DA93C6a374319880eCE5fEc6aFba7Eb"; // Ganache address
//   let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")); // Ganache provider

//   return new web3.eth.Contract(skinMarketABI, skinMarketAdd);
// };

// // Function to connect to the skinMarket contract using MetaMask if available
// // export const connectToMetaMask = async () => {
// //   if (window.ethereum) {
// //     const web3 = new Web3(window.ethereum);
// //     const skinMarketAdd = "0x6c77398C0DA93C6a374319880eCE5fEc6aFba7Eb"; // Update to your deployed contract address on Ethereum
    

// //     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

// //     return { contract: new web3.eth.Contract(skinMarketABI, skinMarketAdd), accounts };
// //   } else {
// //     throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
// //   }
// // };

// // Example usage in a React component
// const Web3Connection = () => {
//   const [contract, setContract] = useState(null);
//   const [accounts, setAccounts] = useState([]);
//   const [skins, setSkins] = useState([]);

//   const connectToContract = async () => {
//     try {
//     //let connection;
//     //if (window.ethereum) {
//     //     connection = await connectToMetaMask();
//     //     setAccounts(connection.accounts);
//     //     setContract(connection.contract);
//     //     console.log("Connected to MetaMask:", connection.accounts);
//     //   } else {
//         const contract = await connectToLocalGanache();
//         setContract(contract);
//         console.log("Connected to local Ganache");
//       //}

//       if (contract) {
//         const skins = await contract.methods.getAllSkins().call();
//         setSkins(skins);
//         console.log("Skins:", skins);
//       }
//     } catch (error) {
//       console.error("Connection error:", error);
//     }
//   };

//   useEffect(() => {
//     connectToContract();
//     //connectToLocalGanache();
//   }, []);

//   return (
//     <div>
//       <h1>Web3 Connection Example</h1>
//       {accounts.length > 0 && <p>Connected Account: {accounts[0]}</p>}
//       {contract && <p>Contract Address: {contract.options.address}</p>}
//       {skins.length > 0 && (
//         <div>
//           <h2>Skins</h2>
//           <ul>
//             {skins.map((skin, index) => (
//               <li key={index}>Skin ID: {skin}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Web3Connection;


import React, { useState, useEffect } from "react";
import Web3 from "web3";
import skinMarketABI from "../components/abis/skinMarketABI.json";

// Function to connect to the skinMarket contract using local Ganache
export const connectToLocalGanache = async () => {
  const skinMarketAdd = "0x6c77398C0DA93C6a374319880eCE5fEc6aFba7Eb"; // Ganache address
  const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545")); // Ganache provider

  return new web3.eth.Contract(skinMarketABI, skinMarketAdd);
};

// Function to connect to the local Ganache and get accounts
export const connectWalletToLocalGanache = async () => {
  const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545")); // Ganache provider
  const accounts = await web3.eth.getAccounts();
  return  accounts ;
};

const Web3Connection = () => {
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [skins, setSkins] = useState([]);


  const connectToContract = async () => {
    try {
      const contract = await connectToLocalGanache();
      setContract(contract);
      console.log("Connected to local Ganache");

      if (contract) {
        const skins = await contract.methods.getAllSkins().call();
        setSkins(skins);
        console.log("Skins:", skins);
      }
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const connectWallet = async () => {
    try {accounts = await connectWalletToLocalGanache();
      setAccounts(accounts);
      console.log("Connected to Ganache with accounts:", accounts);
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  useEffect(() => {
    connectToContract();
    connectWallet();
  }, []);

  return (
    <div>
      <h1>Web3 Connection Example</h1>
      {accounts.length > 0 && <p>Connected Account: {accounts[0]}</p>}
      {contract && <p>Contract Address: {contract.options.address}</p>}
      {skins.length > 0 && (
        <div>
          <h2>Skins</h2>
          <ul>
            {skins.map((skin, index) => (
              <li key={index}>Skin ID: {skin}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Web3Connection;
