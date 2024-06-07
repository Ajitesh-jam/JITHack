const express = require("express");
const mongoose = require("mongoose");
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

//____________________________________________-______________________-______________________-______________________-______________________-______________________-

//Server and smart contract  will go hand in hand
//contract me there is one mapping userName--> {userName, skinIds[]}
//contract se data laney ki jaruat nhi as jab bhi buy sell karey hai apney app api call horey hai

//Route to get all skins owned by a specific username
app.get("/:username", async (req, res) => {
  //function to get user skins
  const { username } = req.params;

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
