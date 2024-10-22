const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mernseries:RfPKMkWUB174Idrh@crudwithmongodb.9r8uf.mongodb.net/?retryWrites=true&w=majority&appName=CrudWithMongoDB"
    );
    console.log("MongoDB Database for CRUD Project");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
