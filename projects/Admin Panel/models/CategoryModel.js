const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:true
    }
});
module.exports = mongoose.model('category',categorySchema);