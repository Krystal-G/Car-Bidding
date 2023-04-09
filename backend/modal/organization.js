const mongoose = require("mongoose");

// Organization Schema
const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  rides: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
    },
  ],
});

module.exports = mongoose.model("Organization", organizationSchema);
