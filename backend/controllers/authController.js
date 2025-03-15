const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/User");

/// Register User
exports.signup = async (req, res) => {
  console.log("Signup request received:", req.body); // ✅ Log the request body

  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });

    await user.save();

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("User registered successfully:", user); // ✅ Log the created user

    res.json({ token });
  } catch (err) {
    console.error("Signup Error:", err); // ✅ Log errors
    res.status(500).send("Server Error");
  }
};

// Login User
exports.login = async (req, res) => {
  console.log("Login request received:", req.body); // ✅ Log the request body

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email); // ✅ Log if user doesn't exist
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match for email:", email); // ✅ Log if password is incorrect
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("User logged in successfully:", user); // ✅ Log successful login

    res.json({ token });
  } catch (err) {
    console.error("Login Error:", err); // ✅ Log errors
    res.status(500).send("Server Error");
  }
};

