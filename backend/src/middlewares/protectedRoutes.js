    const jwt = require('jsonwebtoken')
    const express = require('express')
    const User = require('../models/userModel')

    async function protectedRouteMiddleware (req,res,next){
        console.log("middleware reached")
        try {
            const cookie = req.cookies.token
            const verifiedToken = jwt.verify(cookie, process.env.JWT_SECRET_KEY)
        if(!verifiedToken) return res.json({message:"Something went wrong"})
            const user = await User.findById(verifiedToken.userId).select("-password")
            req.user = user
            next()
        } catch (error) {
            res.status(400).json({message:"something went wrong"})
        }
    }

    module.exports = protectedRouteMiddleware   