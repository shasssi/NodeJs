const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;
const tokenExpiresIn = process.env.JWT_EXPIRES_IN;

const createToken = (user) => {
  const token = jwt.sign(user, secretKey, {expiresIn: tokenExpiresIn});
  return token;
};

const validateToken = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = { createToken, validateToken };
