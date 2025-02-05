const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
const topicRouter = require("./routes/topic");
const { verifyToken } = require("./middlewares/auth");

const app = express();

app.use(cors());

// Middleware
// this middleware use to bind the form-data into req body object
app.use(express.urlencoded({ extended: false }));
// this middleware use to bind the json-data into req body object
app.use(express.json());
// serve uploads folder public
app.use("/uploads", express.static("public"));

// Routes
app.use("/api/users", verifyToken, userRouter);
app.use("/api", loginRouter);
app.use("/api/topics", verifyToken, topicRouter);

module.exports = app;
