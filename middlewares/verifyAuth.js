const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const User = require("../models/user");

const verifyAuth = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    const decoded = await jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "invalid token" });
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(400).json({ msg: "unauthorized" });
    else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = verifyAuth;
