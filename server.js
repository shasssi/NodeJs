require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;

// Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MonogDB - connected successfully"))
  .catch((err) => console.log("MonogDB - connection error", err));

app.listen(PORT, () =>
  console.log(`Server started and running at port : ${PORT}`)
);
