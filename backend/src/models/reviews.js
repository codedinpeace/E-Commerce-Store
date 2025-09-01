const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    rating:{
        type:String,
        maxLength:1
    },
    review:{
        type:String,
        maxLength:60,   
    }
})

module.exports = mongoose.model("Review", reviewSchema)