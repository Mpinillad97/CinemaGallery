const { getMovieServices, createMovieService } = require("../services/movieService");

const getMoviesController = (req, res) => {
    const respuesta = getMovieServices()
    res.status(200).json({
        message: "Aqui estan todas las peliculas",
        data: respuesta
    })
}

const createMoviesController = (req, res) => {
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