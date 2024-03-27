const express = require("express");
const protect = require("../middleware/authMiddleware");
const { updateUser, fetchUserById } = require("../controller/User");

const router = express.Router();
//  /users is already added in base path
router.get("/own", protect, fetchUserById).patch("/:id", protect, updateUser);

exports.router = router;
