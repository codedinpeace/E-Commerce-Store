    const jwt = require('jsonwebtoken')
    const express = require('express')

    function protectedRouteMiddleware (req,res,next){
        console.log("middleware reached")
        try {
            const cookie = req.cookies.token
            const verifiedToken = jwt.verify(cookie, process.env.JWT_SECRET_KEY)
        if(!verifiedToken) return res.json({message:"Something went wrong"})
            req.user = verifiedToken
        
            next()
        } catch (error) {
            res.status(400).json({message:"something went wrong"})
        }
    }

    module.exports = protectedRouteMiddleware