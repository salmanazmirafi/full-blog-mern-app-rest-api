const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    category: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
