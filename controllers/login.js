const { createHmac } = require("crypto");
const User = require("../models/user");
const { createToken } = require("./auth");

const handleSignIn = async (req, res) => {
  try {
    const email = req?.body?.email;
    const password = req?.body?.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ err: "Incorrect username or password" });
    }
    const hashedPassword = createHmac("sha256", user?.salt)
      .update(password)
      .digest("hex");
    if (hashedPassword !== user?.password) {
      return res.status(400).json({ err: "Incorrect username or password" });
    }
    const userPayload = {
      id: user?._id,
      name: user?.name,
      email: user?.email,
    };
    const token = createToken(userPayload);
    return res.json({
      ...userPayload,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

const handleSignUp = async (req, res) => {
  try {
    const name = req?.body?.name;
    const email = req?.body?.email;
    const password = req?.body?.password;
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.json({
      id: user?._id,
      name: user?.name,
      email: user?.email,
    });
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

module.exports = { handleSignIn, handleSignUp };
