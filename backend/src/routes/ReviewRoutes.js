const express = require('express')
const router = express.Router()
const createReview = require('../controllers/createReview.js')

router.post("/", createReview)

module.exports = router