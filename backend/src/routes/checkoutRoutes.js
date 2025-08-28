const express = require('express')
const router = express.Router()
const checkOut = require('../controllers/checkout-Controller')

router.post('/checkout', checkOut)

module.exports = router