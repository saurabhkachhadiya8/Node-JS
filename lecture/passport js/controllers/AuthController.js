const userModel = require('../models/UserModel');

const loginPage = (req,res) => {
    return res.render('login');
}
const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    loginPage
}