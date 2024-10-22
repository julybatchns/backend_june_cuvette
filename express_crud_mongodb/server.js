const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// ! JSON <==> JS Object
// Frontend <= => Media => <= Backend (DB)

const app = express();

app.use(bodyParser.json());

connectDB();

app.use("/api/users", userRoutes);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
