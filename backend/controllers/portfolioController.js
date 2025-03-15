const { validationResult } = require("express-validator");
const Portfolio = require("../models/Portfolio");
const slugify = require("slugify");

// 🔹 Create Portfolio
exports.createPortfolio = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error("❌ Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log("📌 req.user:", req.user);
    console.log("📌 req.body:", req.body);

    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Unauthorized. User not found." });
    }

    const { title, description, technologies, image, liveLink, githubLink } = req.body;

    // Generate a unique slug
    let slug = slugify(title, { lower: true, strict: true });

    // Check if slug already exists
    let existingPortfolio = await Portfolio.findOne({ slug });
    if (existingPortfolio) {
      slug = `${slug}-${Date.now()}`; // Append timestamp to make it unique
    }

    const newPortfolio = new Portfolio({
      user: req.user.id,
      title,
      slug,
      description,
      technologies,
      image,
      liveLink,
      githubLink,
    });

    const savedPortfolio = await newPortfolio.save();
    console.log("✅ Portfolio created successfully:", savedPortfolio);
    res.status(201).json(savedPortfolio);
  } catch (err) {
    console.error("❌ Error creating portfolio:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};

// 🔹 Get All Portfolios
exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().populate("user", "name email");
    res.json(portfolios);
  } catch (err) {
    console.error("❌ Error fetching portfolios:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// 🔹 Get Portfolio by Slug
exports.getPortfolioBySlug = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ slug: req.params.slug }).populate("user", "name email");
    if (!portfolio) return res.status(404).json({ msg: "Portfolio not found" });
    res.json(portfolio);
  } catch (err) {
    console.error("❌ Error fetching portfolio by slug:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// 🔹 Update Portfolio
exports.updatePortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    // Ensure only the owner can update
    if (portfolio.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, description, technologies, image, liveLink, githubLink } = req.body;

    // Update slug if title changes
    if (title && title !== portfolio.title) {
      let newSlug = slugify(title, { lower: true, strict: true });

      // Ensure the new slug is unique
      let existingPortfolio = await Portfolio.findOne({ slug: newSlug });
      if (existingPortfolio && existingPortfolio._id.toString() !== portfolio._id.toString()) {
        newSlug = `${newSlug}-${Date.now()}`;
      }

      portfolio.slug = newSlug;
    }

    portfolio.title = title || portfolio.title;
    portfolio.description = description || portfolio.description;
    portfolio.technologies = technologies || portfolio.technologies;
    portfolio.image = image || portfolio.image;
    portfolio.liveLink = liveLink || portfolio.liveLink;
    portfolio.githubLink = githubLink || portfolio.githubLink;

    await portfolio.save();
    res.json(portfolio);
  } catch (err) {
    console.error("❌ Error updating portfolio:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// 🔹 Delete Portfolio
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    // Ensure only the owner can delete
    if (portfolio.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await portfolio.deleteOne();
    res.json({ message: "Portfolio deleted" });
  } catch (err) {
    console.error("❌ Error deleting portfolio:", err);
    res.status(500).json({ error: "Server error" });
  }
};
