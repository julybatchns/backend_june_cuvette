const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mernseries:C0Br4bk2sttXJ6ma@authapp.u4mmn.mongodb.net/?retryWrites=true&w=majority&appName=authApp"
  )
  .then(() => console.log("mongoDB Connected..."))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
