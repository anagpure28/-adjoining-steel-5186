const jwt = require("jsonwebtoken");
const BlacklistModel = require("../model/blacklist.model");
require("dotenv").config();

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    if (token) {
      let existingToken = await BlacklistModel.find({
        blacklist: { $in: token },
      });
      if (existingToken.length) {
        return res.status(400).json({ error: "Please Login Again..!!!" });
      }
      const decoded = jwt.verify(token, process.env.secret);
      req.body.userID = decoded.userID;
      req.body.username = decoded.username;
      next();
    } else {
      return res
        .status(201)
        .json({ msg: "not authorised to do this operation" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = auth;
