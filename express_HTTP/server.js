const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a GET Request to the Homepage");
});

app.post("/submit", (req, res) => {
  const { name, year } = req.body;
  res.statusCode = 201;
  res.send(`Received data - Name: ${name}, Year: ${year}`);
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  // ! res.send(): Sends a response with content (text or HTML).
  // ! res.json(): Sends a JSON response.
  // ! res.status(): Sets the status code of the response.
  res.send(`PUT Request to update resource with ID: ${id}`);
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  res.send(`DELETE request to delete the resource with ID: ${id}`);
});

app.listen(3000, () => {
  console.log("hey! Server is running on Port 3000");
});

// ! HTTP Status

// ? HTTP status codes are three-digit codes used to indicate the status of a response:

// 200: OK (successful request).
// 201: Created (successful resource creation).
// 400: Bad Request (invalid request from the client).
// 404: Not Found (resource not found).
// 500: Internal Server Error (server error).

// * HTTP headers contain metadata about the request and response, like content type, caching, etc.

app.get("/headers", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.set("Custom-Header", "This is a custom header");
  res.send("Check the headers in the response");
});
