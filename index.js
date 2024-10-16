// ? Reading Files with Node.js (Using the fs Module)

const math = require("./math");

const sum = math.add(10, 5);
const difference = math.subtract(10, 5);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);

// const fs = require("fs");

// Read a file
// fs.readFile("./files/example.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.error("Error in reading file:", error);
//     return;
//   }
//   console.log("File contents:", data);
// });

// Write a file

// const content =
//   "We are learning MERN, we need to build E-Commerce Project for our upcoming Jobs!";

// fs.writeFile("./files/output.txt", content, (error) => {
//   if (error) {
//     console.error("Error in writing file:", error);
//     return;
//   }
//   console.log("File written successfully");
// });

// Append content into existing file

// const contentToAppend = "We should practice coding daily!";

// fs.appendFile("./files/example.txt", contentToAppend, (error) => {
//   if (error) {
//     console.error("Error in appending contents in file:", error);
//     return;
//   }
//   console.log("File appneded with contents successfully");
// });

// Delete a file

// fs.unlink("./files/example.txt", (error) => {
//   if (error) {
//     console.error("Error in appending contents in file:", error);
//     return;
//   }
//   console.log("File deleted successfully");
// });

// !  Simple Server with HTTP module ! //

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello Everyone from June Batch 2024!");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port as ${PORT}`);
// });

// http://localhost:5000
// // cross-origin-resourcse-sharing
