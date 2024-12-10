const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    userpass:{
        type:String,
        required:true
    }
});

const user = mongoose.model("user",userSchema);
module.exports = user;