const express = require("express");
const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const BlacklistModel = require("../model/blacklist.model");
require("dotenv").config();
const auth = require("../middleware/auth.middleware");

const userRouter = express.Router();

// password validation function
function passValidator(password) {
  // Password should have at least 1 uppercase letter
  const hasUppercase = /[A-Z]/.test(password);

  // Password should have at least 1 lowercase letter
  const hasLowercase = /[a-z]/.test(password);

  // Password should have at least 1 special character from the provided set
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  // Password should be at least 8 characters long
  const isLengthValid = password.length >= 8;

  // Return true if all criteria are met, otherwise return false
  return hasUppercase && hasLowercase && hasSpecialChar && isLengthValid;
}

// only for admin checking with role
userRouter.get("/", auth, async (rea, res) => {
  const { userID } = req.body;
  try {
    const user = await UserModel.findOne(userID);
    if (user && user.role === "admin") {
      const allUser = await UserModel.find();
      return res.status(200).json({ Users: allUser });
    } else {
      return res.status(404).json({ error: "User not Found...!!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// new user registration (takes all user details from req.body)
userRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // checking password criteria  passValidator function
    if (!passValidator(password)) {
      return res
        .status(400)
        .json({ msg: "Password does not matches criteria" });
    }

    // checks if user is already present with the email
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(200).json({ msg: "user already present" });
    } else {
      // after hasshing the password it get stored in the databas (MongoDB)
      bcrypt.hash(password, 5, async (err, hash) => {
        if (hash) {
          const user = await UserModel({
            ...req.body,
            password: hash,
            isActive: true,
          });

          await user.save();
          return res.status(200).json({ msg: "user created successfully" });
        }
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// user login route (takes password ans email from user)
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // first checks user is present or not then move next
    const user = await UserModel.findOne({ email });
    if (user && user.isActive) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          // after gatting proper user details creates token for the user and send in response
          const token = jwt.sign(
            { userID: user._id, username: user.username },
            process.env.secrate
          );
          return res.status(200).json({ msg: "Login Successfull", token });
        } else {
          return res.status(404).json({ msg: "Wrong Cridentials" }); // if any error in password
        }
      });
    } else {
      // if we dont find user with email
      return res.status(404).json({ error: "User not Found...!!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// user logout with blacklist route (BlacklistModel)
userRouter.get("/logout", async (req, res) => {
  try {
    // if token present push to Blacklist
    const token = req.headers.authorization?.split(" ")[1] || null;
    token &&
      (await BlacklistModel.updateMany({}, { $push: { blacklist: [token] } }));
    return res.status(200).json({ msg: "Logout Successfull" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = userRouter;
