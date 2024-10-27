const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const jwtSecret = "your_jwt_secret_key";
const jwtExpiresIn = "1h";

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: jwtExpiresIn });
};

// User Registration
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).json({ success: true, token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ success: false, message: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: true, token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ success: false, message: "Error logging in user" });
  }
};
