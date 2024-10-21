# Cuvette - Backend Session

- 1. Node JS - JS Runtime Environment.
- 2. Express JS - Web API Framework.
- 3. MongoDB - NoSQL Document Database.
- 4. CRUD - Creation (), Reading, Updating, Deleting.
- 5. Server - API - Database.

## Important Topics?

- 1. What is backend in web development?
- 2. What is database?
- 3. What is an API?
- 4. What is Node JS Runtime Environment?
- 5. Install and Configure Node JS?
- 6. Execute JS outside your browser.
- 7. Core Features of Node.js.
- 8. Non-blocking I/O.
- 9. Single-threaded.
- 10. Modules.
- 11. Setting Up a Basic Node.js Server.
- 12. Core Modules - file system(fs) - read, write.
- 13. Creating a Simple API with Express.js.
- 14. Setting Up a Basic Express Server.
- 15. What are Middlewares?
- 16. Using Middlewares in Express.
- 17. HTTP (Hypertext transfer Protocol)

## Packages under NPM - nodemon

#### Node JS

- 1.  Node.js is a runtime environment that allows you to run JavaScript on the server side, outside of a browser. It uses the V8 JavaScript engine (the one that powers Google Chrome), enabling JavaScript to perform backend operations like reading files, handling requests, interacting with databases, etc.

- 2. Non-blocking I/O: Node.js uses an event-driven, non-blocking architecture, which makes it ideal for building scalable network applications.

- 3. Single-threaded: Node.js uses a single thread to handle multiple requests concurrently by using asynchronous programming.

- 4. Modules: Node.js uses the CommonJS module system to import and export code between files.

### HTTP

- 1. HTTP (HyperText Transfer Protocol) is the foundation of any data exchange on the web and a key concept when working with Express.js, a web framework for Node.js. In Express, you will often deal with requests and responses that conform to the HTTP protocol.

- 2. HTTP Methods

* GET: Retrieve information.
* POST: Submit data to be processed.
* PUT: Update a resource.
* DELETE: Remove a resource.
* PATCH: Partially update a resource.

### A View Engine in Node.js allows you to render HTML pages dynamically using template engines. It lets you insert server-side data into HTML templates before sending the final HTML to the client. Commonly used view engines include EJS (Embedded JavaScript), Pug (formerly Jade), and Handlebars.

## <%= %>: Used to insert a variable’s value directly into the HTML.

## <% %>: Used for control flow statements (e.g., forEach, if).

## Benefits of Using a View Engine

- 1. Separation of Concerns: Logic and presentation are separated. The server handles the logic, and EJS templates handle the UI.

- 2. Reusability: You can reuse parts of HTML by including partial templates, which reduces redundancy.

- 3. Data Binding: Dynamic data can be inserted into HTML pages, making it easier to create dynamic websites.

#### MongoDB

#### MongoDB is a popular NoSQL database designed for handling large volumes of unstructured data. Unlike traditional SQL databases that use tables and rows, MongoDB stores data in flexible, JSON-like documents, making it ideal for modern web applications where data structures can change over time.

<!-- MongoDB stores data as documents in BSON (Binary JSON) format. -->
<!-- Each document is a key-value pair structure, similar to JSON. -->
<!-- The _id field is unique for each document and is automatically created by MongoDB if not provided. -->

{
"\_id": "12345",
"name": "John Doe",
"email": "john@example.com",
"age": 30
}

# Documents are stored in collections. A collection is a group of MongoDB documents, similar to a table in relational databases.

# Collections do not enforce a schema, allowing documents with different structures to be stored together.

# A MongoDB database is a container for collections, similar to databases in SQL. Multiple databases can exist in a MongoDB instance.

# MongoDB is schema-less, meaning there is no predefined structure, and documents in the same collection can have different fields and data types.

Create: Insert documents into a collection.
Read: Retrieve documents from a collection using queries.
Update: Modify existing documents.
Delete: Remove documents from a collection.
