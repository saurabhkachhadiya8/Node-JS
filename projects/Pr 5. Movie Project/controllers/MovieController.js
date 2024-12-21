const movieModel = require('../models/MovieModel');

const index = (req,res)=>{
    return res.render('index');
}

module.exports = {
    index
}