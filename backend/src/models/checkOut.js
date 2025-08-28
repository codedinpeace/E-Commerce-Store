const mongoose = require('mongoose')

const checkoutSchema = mongoose.Schema({
    address:{
        type:String,
    },
    PhoneNumber:{
        type:Number,
        maxLength:10,
        required:true,
    },
    PinCode:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    State:{
        type:String,
        required:true,
    }
}, {timestamps:true})

module.exports = mongoose.model('CheckOut', checkoutSchema)