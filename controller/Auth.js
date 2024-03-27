const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../model/User");

const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User aleady exists");
  }

  const user = await User.create({
    email,
    password,
  });
  if (user) {
    
    const token = generateToken(res, user.id);
    res.status(201).json({
      id: user.id,
      role: user.role,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(res, user.id);
    res.status(200).json({
      id: user.id,
      role: user.role,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged out" });
});

const checkAuth = asyncHandler(async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
});

module.exports = { createUser, loginUser, logout, checkAuth };
