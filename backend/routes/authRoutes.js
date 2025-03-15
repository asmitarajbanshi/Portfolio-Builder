const express = require("express");
const { body } = require("express-validator");
const { signup, login } = require("../controllers/authController");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register Route
router.post(
  "/signup",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  signup
);

// Login Route
router.post("/login", login);

// Signup API Test Route
router.get("/signup", (req, res) => {
  res.send("✅ Signup API is working! But use POST instead.");
});

// ===== OAuth Authentication ===== //

// Google Authentication
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);
});

// Facebook Authentication
router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));
router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/" }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);
});

// Apple Authentication
router.get("/apple", passport.authenticate("apple"));
router.get("/apple/callback", passport.authenticate("apple", { failureRedirect: "/" }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);
});

module.exports = router;
