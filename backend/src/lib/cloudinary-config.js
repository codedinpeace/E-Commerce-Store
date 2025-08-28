const cloudinary = require('cloudinary').v2
require('dotenv').config()

console.log("Cloudinary name :", process.env.CLOUDINARY_NAME)
console.log("Cloudinary api secret :", process.env.CLOUDINARY_SECRET_KEY)
console.log("Cloudinary api key :", process.env.API_KEY)

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    api_key: process.env.CLOUDINARY_API_KEY
})

module.exports = cloudinary