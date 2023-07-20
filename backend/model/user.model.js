const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const userSchema = new mongoose.Schema(
  {
    username: reqString,
    email: reqString,
    gender: String,
    password: reqString,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
