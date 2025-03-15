const express = require("express");
const { body, validationResult } = require("express-validator");
const { protect } = require("../middleware/authMiddleware");
const {
  createPortfolio,
  getPortfolios,
  getPortfolioBySlug, 
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

const router = express.Router();

// Middleware for validation errors
const validatePortfolio = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// ✅ Create Portfolio
router.post("/", protect, validatePortfolio, createPortfolio);

// ✅ Get All Portfolios (Make this protected if needed)
router.get("/", getPortfolios);

// ✅ Get Single Portfolio by Slug (Recommended)
router.get("/:slug", getPortfolioBySlug);

// ✅ Update Portfolio (Use PATCH for partial updates)
router.patch("/:id", protect, validatePortfolio, updatePortfolio);

// ✅ Delete Portfolio
router.delete("/:id", protect, deletePortfolio);

module.exports = router;
