const mongoose = require("mongoose");

const movieObject = {
    title: {
        type: String,
        required:true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    director: String,
    duration: String, 
    genre: [String],
    rate: Number,
    poster: String
}


const movieSchema = new mongoose.Schema(movieObject)

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
    Movie
}