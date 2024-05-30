const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

const createToken = (user) => {
  const token = jwt.sign(user, secretKey);
  return token;
};

const validateToken = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = { createToken, validateToken };
