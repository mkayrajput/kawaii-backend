const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createOrder,
  fetchOrdersByUser,
  deleteOrder,
  updateOrder,
  fetchAllOrders,
} = require("../controller/Order");

const router = express.Router();

router
  .post("/", protect, createOrder)
  .get("/own", protect, fetchOrdersByUser)
  .delete("/:id", protect, deleteOrder)
  .patch("/:id", protect, updateOrder)
  .get("/", protect, fetchAllOrders);

exports.router = router;
