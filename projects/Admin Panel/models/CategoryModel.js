const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    // image:{
    //     type:String,
    //     required:true
    // },
    tags: {
        type: String,
        required: false
    },
    status: {
        type: String,
        default: "deactive"
    }
});
module.exports = mongoose.model('category', categorySchema);