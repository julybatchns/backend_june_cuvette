const express = require("express");
const app = express();

// Build a Simple API
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/items", (req, res) => {
  res.send({ key: "hello", key2: "bye" });
});

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
