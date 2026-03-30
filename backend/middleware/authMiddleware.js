const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ✅ Check header exists
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  // ✅ Check correct format: Bearer <token>
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  const token = authHeader.split(" ")[1];

  // ✅ Extra safety check
  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // ✅ Attach user to request
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT Error:", err.message); // 👈 helpful for debugging

    return res.status(403).json({
      error: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;