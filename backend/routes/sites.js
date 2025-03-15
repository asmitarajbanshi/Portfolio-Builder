const express = require("express");
const router = express.Router();

// Sample sites data (Replace with Database query)
const sites = [
  { id: 1, name: "My Portfolio", description: "A creative portfolio site." },
  { id: 2, name: "Photography", description: "Showcase of my photography." },
  { id: 3, name: "UX/UI Work", description: "My UX/UI design projects." }
];

// Get all sites
router.get("/", (req, res) => {
  res.json(sites);
});

module.exports = router;
