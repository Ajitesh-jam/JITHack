const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { connectToLocalGanache } = require("../utils/web"); // Adjust the path as needed
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://Ajitesh:Ajitesh9877@cluster0.yz6u5fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Endpoint to get user skins
app.get("/:username", async (req, res) => {
  const { username } = req.params;

  try {
    // Connect to the smart contract
    const contract = await connectToLocalGanache();

    // Get the skins owned by the username
    const skinIds = await contract.methods.getSkins(username).call();
    console.log(skinIds);

    // Send the response with the skin IDs
    res.json({ skinIds });
  } catch (error) {
    // If an error occurs, return an error response
    console.error("Error fetching user skins:", error);
    res.status(500).json({ message: "Error fetching user skins" });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
