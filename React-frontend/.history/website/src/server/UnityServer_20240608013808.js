// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const { connectToLocalGanache } = require("../utils/web"); // Adjust the path as needed
// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON bodies

// // MongoDB Connection
// mongoose
//   .connect(
//     "mongodb+srv://Ajitesh:Ajitesh9877@cluster0.yz6u5fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB Connection Error:", err);
//   });

// // Endpoint to get user skins
// app.get("/:username", async (req, res) => {
//   const { username } = req.params;

//   try {
//     // Connect to the smart contract
//     const contract = await connectToLocalGanache();

//     // Get the skins owned by the username
//     const skinIds = await contract.methods.getSkins(username).call();
//     console.log(skinIds);

//     // Send the response with the skin IDs
//     res.json({ skinIds });
//   } catch (error) {
//     // If an error occurs, return an error response
//     console.error("Error fetching user skins:", error);
//     res.status(500).json({ message: "Error fetching user skins" });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
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

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Configure Web3
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545")); // Ganache URL
const contractAddress = "0x6c77398C0DA93C6a374319880eCE5fEc6aFba7Eb"; // Your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Endpoint to get skins for a user
app.get("/getSkins/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const skins = await contract.methods.getSkins(username).call();
    res.json({ skins });
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