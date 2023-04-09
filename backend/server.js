const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Parse request bodies as JSON
app.use(express.json());
app.use("/routes",routes);

const DB_URL = process.env.DB_URL
// Connect to MongoDB
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


