const { Movie } = require("../models/Movies")


const getMovieServices = async () => {
      return await Movie.find(); 
};

const createMovieService = async (movie) => {
    const newMovie = new Movie(movie);
    return await newMovie.save()
}


module.exports = {
    getMovieServices,
    createMovieService
};

