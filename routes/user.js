const express = require("express");
const {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserDetails,
  deleteUserById,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(getAllUsers).post(createNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserDetails)
  .delete(deleteUserById);

module.exports = router;
