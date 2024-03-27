const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controller/Products");

const router = express.Router();

router
  .get("/", protect, fetchAllProducts)
  .post("/", protect, createProduct)
  .get("/:id", protect, fetchProductById)
  .patch("/:id", protect, updateProduct);

exports.router = router;
