const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const hiiRoute = require("./routes/hii");

// Base route
app.get("/", (req, res) => res.send("Express on Vercel"));

// Use routes
app.use("/hii", hiiRoute);


// Export the app
module.exports = app;
