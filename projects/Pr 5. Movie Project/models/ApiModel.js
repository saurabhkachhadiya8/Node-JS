const mongoose = require('mongoose');
const movieApiSchema = mongoose.Schema({
    id: Number,
    name: String,
    country_name: String,
    genre: [String],
    writers: [String],
    release: {
        date: Number,
        month: String,
        year: Number
    },
    thumbnail: String,
    description: String,
    movie_language: String,
    director: [
        {
            name: String,
            image: String
        }
    ],
    hero: [
        {
            name: String,
            image: String
        }
    ],
    heroine: [
        {
            name: String,
            image: String
        }
    ],
    other_characters: [
        {
            name: String,
            image: String
        }, {
            name: String,
            image: String
        }, {
            name: String,
            image: String
        }
    ],
    released: Boolean
});
const movieApi = mongoose.model('movieApi',movieApiSchema);
module.exports = movieApi;