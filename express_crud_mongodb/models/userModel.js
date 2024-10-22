const mongoose = require("mongoose");

// Schema => Model => use these model

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
    },
    age: {
      type: Number,
      // required: true,
      default: 23,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
