    const express = require('express')
    const router = express.Router()
    const createCartFunction = require('../controllers/cart-controller.js')

    router.post("/cart", createCartFunction)

    module.exports = router