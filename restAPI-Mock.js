const express = require("express");
const mongoose = require("mongoose");
const usersData = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
// this middleware use to bind the form-data into req body object
app.use(express.urlencoded({ extended: false }));
// this middleware use to bind the json-data into req body object
app.use(express.json());

// Routes
app
  .route("/api/users")
  .get((req, res) => {
    return res.json(usersData);
  })
  .post((req, res) => {
    const body = req?.body;
    const newUser = { id: usersData.length + 1, ...body };
    usersData.push(newUser);
    return res.json(newUser);
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req?.params?.id;
    const user = usersData.find((u) => u?.id === Number(id)) || {};
    return res.json(user);
  })
  .patch((req, res) => {
    const id = req?.params?.id;
    const body = req?.body;
    const userIdx = usersData.findIndex((u) => u?.id === Number(id));
    let updatedUserData = {};
    if (userIdx !== -1) {
      updatedUserData = {
        ...usersData[userIdx],
        ...body,
      };
      usersData[userIdx] = updatedUserData;
    }
    return res.json(updatedUserData);
  })
  .delete((req, res) => {
    const id = req?.params?.id;
    const userIdx = usersData.findIndex((u) => u?.id === Number(id));
    if (userIdx !== -1) {
      usersData.splice(userIdx, 1);
    }
    return res.json({
      id,
      data: "User deleted successfully",
    });
  });

app.listen(PORT, () =>
  console.log(`Server started and running at port : ${PORT}`)
);
