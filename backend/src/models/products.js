const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        maxLength:10,
        required:true
    },

    productDescription:{
        type:String,
        required:true
    },

    productImage : {
        type:String,
    },

    category:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Product", productSchema)