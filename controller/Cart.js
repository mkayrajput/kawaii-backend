const Cart = require("../model/Cart");

async function fetchCartByUser(req, res) {
  const { id } = req.user;
  try {
    const cartItems = await Cart.find({ user: id })
      .populate("user")
      .populate("product");
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function addToCart(req, res) {
  const { id } = req.user;
  const cart = new Cart({ ...req.body, user: id });
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
}

const deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const result = await cart.populate("product");
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  fetchCartByUser,
  addToCart,
  deleteFromCart,
  updateCart,
};
