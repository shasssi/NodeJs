const { createHmac } = require("crypto");
const User = require("../models/user");
const { createToken } = require("./auth");
const { sendMail, userVerificationOption, mailOption } = require("./email");

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
    if (user?.isVerified !== "Y") {
      return res.status(400).json({
        err: "User is not verified, please contact admin - Shasssi.dev@gmail.com",
      });
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
    // const userPayload = {
    //   id: user?._id,
    //   name,
    //   email,
    // };
    // const token = createToken(userPayload);
    // return res.json({
    //   ...userPayload,
    //   token,
    // });
    sendMail({
      ...userVerificationOption,
      text: process.env.USER_VERIFICATION_URL + user?._id,
    });
    return res.json({
      data: "User successfully registered. You will be notified through mail once verified.",
    });
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

const handleVerifyUser = async (req, res) => {
  try {
    const userId = req?.params?.id;
    console.log("suerId", userId);
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ err: "User not found" });
    await User.findByIdAndUpdate(userId, {
      isVerified: "Y",
    });
    sendMail({
      ...mailOption,
      to: user?.email,
    });
    return res.json({
      data: "User Verified",
    });
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

module.exports = { handleSignIn, handleSignUp, handleVerifyUser };
