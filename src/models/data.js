const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    board: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Data = mongoose.model("data", dataSchema);
module.exports = Data;
