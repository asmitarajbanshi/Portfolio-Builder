const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("🔑 Decoded Token:", decoded); 

      // Attach user to request
      req.user = await User.findById(decoded.user?.id).select("-password");
      console.log("👤 User Found:", req.user);
//       console.log("Decoded Token:", decoded);
// console.log("User Found:", req.user);


      next();
    } catch (error) {
      console.error("❌ Invalid token:", error.message);
      return res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = { protect }; // ✅ Fixed Export