const express = require("express");
const cors = require("cors");
const Web3 = require("web3");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Configure Web3 for Polygon
const polygonRPC = "https://rpc-amoy.polygon.technology/"; // Example of a public Polygon RPC URL
const web3 = new Web3(new Web3.providers.HttpProvider(polygonRPC));

// Update the contract address to your deployed contract address on Polygon
const contractAddress = "0xAc2B7C887C99432eFA14236C7834675832F686a4"; // Replace with your contract address

const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_skinId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
    ],
    name: "buySkin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_skinId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
    ],
    name: "editSkin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
    ],
    name: "sellSkin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allSkins",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSkins",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "getSkins",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "OwnerOfSkin",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "walletAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerSkins",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// Initialize the contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Helper function to convert BigInt to string
const bigIntToString = (bigIntArray) => bigIntArray.map((bi) => bi.toString());

// Endpoint to get skins for a user
app.get("/getSkins/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const skins = await contract.methods.getSkins(username).call();
    const skinsAsString = skins.map((skin) => skin.toString()); // Convert BigInts to strings
    res.json(skinsAsString);
  } catch (error) {
    console.error("Error fetching skins:", error);
    res.status(500).json({ error: "An error occurred while fetching skins." });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
