const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const user = require("../models/user");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { name, email, phone, password, userRole } = req.body;
  const existantUser = await User.findOne({ email });
  if (existantUser)
    return res.status(409).json({ msg: "User already exists!" });
  try {
    const newUser = new User({
      name,
      email,
      phone,
      password,
      userRole,
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      },
    });
    //res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "coordonnes ghaltin" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "coordonnes ghaltin" });
    const payload = {
      id: user._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.userRole,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};
