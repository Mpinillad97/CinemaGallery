const { getMovieServices, createMovieService } = require("../services/movieService");

const getMoviesController = async (req, res) => {
    try {
        const respuesta = await getMovieServices()
        res.status(200).json({
        message: "Aqui estan todas las peliculas",
        data: respuesta
    })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    
}

const createMoviesController = async (req, res) => {
    try {
        const respuesta = await createMovieService(req.body)
        res.status(201).json({
        message: respuesta,
        data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al crear la pelicula"
        })
    }
    
}


module.exports = {
    getMoviesController,
    createMoviesController
}