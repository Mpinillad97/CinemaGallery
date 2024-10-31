const movieService = require("../services/movieService");

const getMoviesController = async (req, res) => {
    const respuesta = await movieService.getMovieServices()
    res.status(200).json({
        message: "Aqui estan todas las peliculas",
        data: respuesta
    })
}

createMoviesController = (req, res) => {
    const respuesta = createMovieService(req.body)
    res.status(201).json({
        message: respuesta,
        data: req.body
    })
}


module.exports = {
    getMoviesController,
    createMoviesController
}