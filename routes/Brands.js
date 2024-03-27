const express = require("express");
const protect = require("../middleware/authMiddleware")
const { fetchBrands, createBrand } = require("../controller/Brand");

const router = express.Router();

router.get("/", protect, fetchBrands).post("/", protect, createBrand);

exports.router = router;
