const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createUser,
  loginUser,
  checkAuth,
  logout,
} = require("../controller/Auth");

const router = express.Router();

router
  .post("/signup", createUser)
  .post("/login", loginUser)
  .get("/check", protect, checkAuth)
  .get("/logout", logout);

exports.router = router;
