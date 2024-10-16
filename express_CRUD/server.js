const express = require("express");
const app = express();

// Parse the Incoming Request from Frontend
// (JSON to JS object)
app.use(express.json());

let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
  { id: 3, name: "Item 3", description: "This is item 3" },
  { id: 4, name: "Item 4", description: "This is item 4" },
];
console.log(items);

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.status(201).json(items);
});

app.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (item) {
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemId);
  // console.log(itemIndex);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
