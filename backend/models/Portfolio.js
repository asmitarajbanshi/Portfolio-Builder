const mongoose = require("mongoose");
const slugify = require("slugify");

const PortfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true }, // ✅ Add slug field
  description: { type: String, required: true },
  technologies: [{ type: String }],
  image: { type: String },
  links: [{ type: String }],
}, { timestamps: true });

// ✅ Pre-save middleware to generate slug
PortfolioSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
module.exports = Portfolio;
