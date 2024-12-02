const express = require("express");
const router = express.Router();

// Define a GET route for /hii
router.get("/", (req, res) => {
  res.send("Hello from the /hii route!");
});

module.exports = router;
