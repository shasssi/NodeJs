const jwt = require("jsonwebtoken");
const { validateToken } = require("../controllers/auth");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const userPayload = validateToken(token);
    req.userId = userPayload.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
