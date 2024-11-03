const { Movie } = require("../models/Movies")


const getMovieServices = async () => {
      return await Movie.find(); 
};

const createMovieService = async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
}


module.exports = {
    getMovieServices,
    createMovieService
};

