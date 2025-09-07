const express = require('express')
const router = express.Router()
const {signup, login, logout, check} = require('../controllers/Auth-Controllers.js')
const protectedRouteMiddleware = require('../middlewares/protectedRoutes.js')

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/check", protectedRouteMiddleware, check)

module.exports = router;