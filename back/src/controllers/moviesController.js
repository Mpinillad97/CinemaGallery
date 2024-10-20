const movieService = require("../services/movieService");

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.json(movies);
        } catch (error) {
            res.status(500).send("Error al obtener las películas");
        }
    },
}