const { Router } = require("express");
const { handleSignIn, handleSignUp } = require("../controllers/login");

const router = Router();

router.post("/signin", handleSignIn);

router.post("/signup", handleSignUp);

module.exports = router;
