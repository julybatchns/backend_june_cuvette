const express = require("express");
const app = express();

// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID is: ${userId}`);
// });

app.get("/users/:userId/books/:bookId", (req, res) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;

  res.send(`User ID is: ${userId}, Book ID is: ${bookId}`);
});

app.get("/users/:id?", (req, res) => {
  const userId = req.params.id || "No user ID provided";
  res.send(`User Id is ${userId}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
