const mongoose = require("mongoose");
const subcategorySchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
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
module.exports = mongoose.model('subcategory', subcategorySchema);