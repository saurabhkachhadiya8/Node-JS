const movieModel = require('../models/MovieModel');
const movieApi = require('../config/movieApi.json');

const index = async(req,res)=>{
    try{
        const movies = await movieApi.movies;
        return res.render('index',{
            movies
        });
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    index
}