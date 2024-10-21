const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const data = {
    title: "Welcome to My EJS Project",
    user: {
      name: "Shubham",
      age: 28,
      hobbies: ["Travelling", "Reading", "coding", "Dancing"],
    },
  };
  res.render("index", data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
