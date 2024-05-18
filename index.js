const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const PORT = 8000;

// Middleware
// this middleware use to bind the form-data into req body object
app.use(express.urlencoded({ extended: false }));
// this middleware use to bind the json-data into req body object
app.use(express.json());

// Connection
mongoose
  .connect(
    "mongodb+srv://shasssi:shasssidev@cluster0.isxmzx2.mongodb.net/react-sssi"
  )
  .then(() => console.log("MonogDB - connected successfully"))
  .catch((err) => console.log("MonogDB - connection error", err));

// Routes
app
  .route("/api/users")
  .get(async (req, res) => {
    const allUsers = await User.find({});
    return res.json(allUsers);
  })
  .post(async (req, res) => {
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
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
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
  })
  .patch(async (req, res) => {
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
  })
  .delete(async (req, res) => {
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
  });

app.listen(PORT, () =>
  console.log(`Server started and running at port : ${PORT}`)
);
