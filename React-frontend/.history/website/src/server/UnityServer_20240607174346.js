const express = require("express");
const mongoose = require("mongoose");
const OwnedSkin = require("./model.js");
const cors = require("cors");
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

  try {
    // Find all the skins owned by the specified username
    const ownedSkins = await OwnedSkin.find({ username: username });
    // Return the owned skins as JSON response

    res.json(ownedSkins[0].skinId);
  } catch (error) {
    // If an error occurs, return an error response
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
