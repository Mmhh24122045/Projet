const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title:{
        type : String,
        required:true, 
    },
    description:{
        type:String,
        required:true,
    },
    imageUrl:String,
    category:{
        type:String,
        required:true,
    },
    quantity:Number
})

module.exports = Product = mongoose.model('Product',productSchema)