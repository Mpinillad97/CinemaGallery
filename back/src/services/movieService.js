// Importar el modelo Movie para interactuar con la base de datos
const { Movie } = require("../models/Movies");

// Servicio para obtener todas las películas de la base de datos
const getMovieServices = async () => {
    // Usar el modelo Movie para encontrar todas las películas en la base de datos
    return await Movie.find(); 
};

// Servicio para crear una nueva película en la base de datos
const createMovieService = async (movie) => {
    // Usar el modelo Movie para crear una nueva película con los datos proporcionados
    return await Movie.create(movie);
};

module.exports = {
    getMovieServices,
    createMovieService
};


