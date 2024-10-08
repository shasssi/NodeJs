const { Router } = require("express");
const {
  handleSignIn,
  handleSignUp,
  handleVerifyUser,
} = require("../controllers/login");
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets/images/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
const upload = multer();

const router = Router();

router.post("/signin", handleSignIn);

router.post("/signup", upload.single("profileImg"), handleSignUp);

router.get("/verify/:id", handleVerifyUser);

module.exports = router;
