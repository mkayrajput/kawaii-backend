const express = require("express");
const protect = require("../middleware/authMiddleware")
const { fetchCategories, createCategory } = require("../controller/Category");

const router = express.Router();

router.get("/",protect, fetchCategories).post("/",protect, createCategory);

exports.router = router;
