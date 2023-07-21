const UserModel = require("../model/user.model");

const adminAuth = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.body.userID });
    if (user.role === "admin") {
      next();
    } else {
      return res
        .status(404)
        .json({ msg: "user not authorised to do such operations" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = adminAuth;
