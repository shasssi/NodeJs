const { Router } = require("express");
const {
  handleSignIn,
  handleSignUp,
  handleVerifyUser,
} = require("../controllers/login");

const router = Router();

router.post("/signin", handleSignIn);

router.post("/signup", handleSignUp);

router.get("/verify/:id", handleVerifyUser);

module.exports = router;
