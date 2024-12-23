const movieModel = require('../models/MovieModel');

const index = async(req,res)=>{
    try{
        return res.render('index');
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    index
}