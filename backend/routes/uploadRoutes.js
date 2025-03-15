const express = require("express");
const upload = require("../middleware/multer");

const router = express.Router();

// Upload Image Route
router.post("/", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: req.file.path, // Cloudinary image URL
    });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image" });
  }
});

module.exports = router;
