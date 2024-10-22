const User = require("../models/userModel");

// Get all the Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: `Error in fetching the users, ${error}` });
  }
};

// Create a User
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = new User({ name, email, age });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: `Error in creating the user, ${error}` });
  }
};

// Update User
const updateUser = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    updatedUser.name = name || updatedUser.name;
    updatedUser.email = email || updatedUser.email;
    updatedUser.age = age || updatedUser.age;
    await updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Error in updating user", error });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
};
