require("dotenv").config();
const express = require("express");
const serverless = require('serverless-http');
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("../routes/user");
const loginRouter = require("../routes/login");
const topicRouter = require("../routes/topic");
const { verifyToken } = require("../middlewares/auth");

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// Middleware
// this middleware use to bind the form-data into req body object
app.use(express.urlencoded({ extended: false }));
// this middleware use to bind the json-data into req body object
app.use(express.json());
// serve uploads folder public
app.use(express.static("../uploads"));

// Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MonogDB - connected successfully"))
  .catch((err) => console.log("MonogDB - connection error", err));

// Routes
app.use("/.netlify/functions/api/users", verifyToken, userRouter);
app.use("/.netlify/functions/api", loginRouter);
app.use("/.netlify/functions/api/topics", verifyToken, topicRouter);

module.exports.handler = serverless(app);
