const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Blog', blogSchema);