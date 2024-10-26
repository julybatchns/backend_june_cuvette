const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mernseries:YL6N0GGe6PQAJPlN@todo.cb5ec.mongodb.net/?retryWrites=true&w=majority&appName=todo"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
