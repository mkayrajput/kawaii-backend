const express = require("express");
const protect = require("../middleware/authMiddleware")
const {
  addToCart,
  fetchCartByUser,
  updateCart,
  deleteFromCart,
} = require("../controller/Cart");

const router = express.Router();

router
  .post("/", protect, addToCart)
  .get("/", protect, fetchCartByUser)
  .patch("/:id", protect, updateCart)
  .delete("/:id", protect, deleteFromCart)

exports.router = router;
