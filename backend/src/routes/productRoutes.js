const express = require('express')
const router = express.Router()
const {add, remove, edit} = require('../controllers/Product-Controller.js')

router.post("/create", add)
router.post("/delete", remove)
router.post("/editProduct", edit)

module.exports = router
