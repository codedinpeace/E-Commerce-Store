const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxLength:20,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minLength:6,
        required:true,
    },
    profilePicture:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

module.exports = mongoose.model("User", userSchema)