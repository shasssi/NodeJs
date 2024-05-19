const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");

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
app.use("/api/users", userRouter);
app.use("/api", loginRouter);

app.listen(PORT, () =>
  console.log(`Server started and running at port : ${PORT}`)
);
