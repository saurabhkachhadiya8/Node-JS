const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    // image:{
    //     type:String,
    //     required:true
    // },
    tags:{
        type:Array,
        required:false
    }
});
module.exports = mongoose.model('category',categorySchema);