const express = require("express");
const mongoose = require("mongoose");
const OwnedSkin = require("./model.js");
const cors = require("cors");
const { GanacheContract } = require("../utils/web.jsx");
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

app.get("/:username", async (req, res) => {
  //function to get user skins
  const { username } = req.params;

  const contract = await GanacheContract();
  const skinIds = await contract.methods.getSkins(username).call();
  console.log(skinIds);

  try {
  } catch (error) {
    // If an error occurs, return an error response
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
