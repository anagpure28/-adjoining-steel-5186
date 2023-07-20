const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqBoolean = { type: Boolean, required: true };

const userSchema = new mongoose.Schema(
  {
    username: reqString,
    email: reqString,
    gender: String,
    password: reqString,
    isActive: reqBoolean,
    role: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
