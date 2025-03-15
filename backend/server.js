require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const sitesRoutes = require("./routes/sites");

const app = express();

// ✅ Required Environment Variables (Removed Facebook & Apple)
const REQUIRED_ENV_VARS = ["MONGO_URI", "JWT_SECRET", "FRONTEND_URL", "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"];
REQUIRED_ENV_VARS.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ ERROR: ${envVar} is missing in .env file!`);
    process.exit(1);
  }
});

// ✅ Connect to MongoDB
connectDB().catch((err) => {
  console.error("❌ MongoDB Connection Failed:", err.message);
  process.exit(1);
});

// ✅ Security Enhancements
app.use(helmet());

// ✅ Dynamic CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL.split(","), // Allow multiple frontend origins from .env
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ Session Middleware for JWT (Removed Passport Session)
app.use(cookieParser());

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/portfolios", portfolioRoutes);
app.use("/api/sites", sitesRoutes);

// ✅ API Test Route
app.get("/", (req, res) => res.json({ message: "✅ API is working fine!" }));

// ✅ Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Gracefully Handle Uncaught Errors & Rejections
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
