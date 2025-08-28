const jwt = require('jsonwebtoken')

const generateToken = (userId, res) =>{
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        })
        res.cookie("token",token, {
            httpOnly:true,
            secure:true,
            sameSite:"Lax",
            maxAge:7 * 24 * 60 * 60 * 1000
        })
    } catch (error) {
        res.status(400).json({message:"Something went wrong while creating the token"})
    }
}

module.exports = generateToken  