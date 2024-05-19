const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
};

const createNewUser = async (req, res) => {
  try {
    const body = req?.body;
    const result = await User.create({
      firstName: body?.firstName,
      lastName: body?.lastName,
      email: body?.email,
      gender: body?.gender,
    });
    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const user = await User.findById(id);
    if (!user) return res.status(400).json({ err: "User not found" });
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const id = req?.params?.id;
    const body = req?.body;
    const user = await User.findByIdAndUpdate(id, {
      ...body,
    });
    if (!user) return res.status(400).json({ err: "User not found" });
    const updatedUser = await User.findById(id);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(400).json({ err: "User not found" });
    return res.json({
      id,
      data: "User deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      err: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserDetails,
  deleteUserById,
};
