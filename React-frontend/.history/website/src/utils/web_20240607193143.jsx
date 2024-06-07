import React,{useState} from "react";
import Web3 from "web3";
import skinMarketABI from "../components/abis/skinMarketABI.json";

// Function to connect to the skinMarket contract using local Ganache
export const connectToLocalGanache = async () => {
  const skinMarketAdd = "0x6c77398C0DA93C6a374319880eCE5fEc6aFba7Eb"; // Ganache address
  const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545")); // Ganache provider

  return new web3.eth.Contract(skinMarketABI, skinMarketAdd);
};

// Function to connect to the skinMarket contract using MetaMask if available
export const connectToMetaMask = () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const skinMarketAdd = "0x6c77398C0DA93C6a374319880eCE5fEc6aFba7Eb"; // Update to your deployed contract address on Ethereum

    return new web3.eth.Contract(skinMarketABI, skinMarketAdd);
  } else {
    throw new Error("MetaMask is not installed. Please install MetaMask and try again.");
  }
};

// Example usage in a React component
const Web3ConnectionExample = async () => {
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const connectToContract = async () => {
    try {
      // Try to connect to MetaMask first
    //   if (window.ethereum) {
    //     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    //     setAccounts(accounts);
    //     const contract = connectToMetaMask();
    //     setContract(contract);
    //     console.log("Connected to MetaMask:", accounts);
    //   }
    //    else {
        // Fallback to local Ganache if MetaMask is not available
        const contract = await connectToLocalGanache();

       const skins= await contract.methods.getAllSkins().call();
       console.log(skins);
        
        setContract(contract);
        console.log("Connected to local Ganache with contract : ",contract);
      //}
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  return (
    <div>
      <h1>Web3 Connection Example</h1>
      <button onClick={connectToContract}>Connect to Contract</button>
      {accounts.length > 0 && <p>Connected Account: {accounts[0]}</p>}
      {contract && <p>Contract Address: {contract.options.address}</p>}
    </div>
  );
};

export default Web3ConnectionExample;
