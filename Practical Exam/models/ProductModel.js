const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quentity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('product',productSchema);