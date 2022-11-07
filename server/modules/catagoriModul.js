const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const categorModel = mongoose.model("Post", category);
module.exports = categorModel;
