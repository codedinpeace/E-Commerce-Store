const express = require('express')
const Cart = require('../models/cart.js')

const createCartFunction = async (req,res)=>{

    const userId = req.user._id
  const {productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1; // increment if exists
    } else {
      cart.items.push({ productId, quantity: 1 }); // add new product
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

module.exports = createCartFunction
