// Importar los servicios relacionados con las películas
const { getMovieServices, createMovieService } = require("../services/movieService");

// Controlador para obtener todas las películas
const getMoviesController = async (req, res) => {
    try {
        // Llamar al servicio que obtiene todas las películas
        const respuesta = await getMovieServices();

        // Enviar respuesta con el estado 200 y las películas obtenidas
        res.status(200).json({
            message: "Aquí están todas las películas",
            data: respuesta
        });
    } catch (error) {
        // Si ocurre un error, responder con un estado 500 y el mensaje de error
        res.status(500).json({
            message: error.message
        });
    }
};

// Controlador para crear una nueva película
const createMoviesController = async (req, res) => {
    try {
        // Llamar al servicio que crea una nueva película, pasando los datos del cuerpo de la solicitud
        const respuesta = await createMovieService(req.body);

        // Enviar respuesta con el estado 201 y los detalles de la película creada
        res.status(201).json({
            message: "Película creada con éxito",
            data: respuesta
        });
    } catch (error) {
        // Si ocurre un error, responder con un estado 500 y el mensaje de error
        res.status(500).json({
            message: error.message
        });
    }
};

// Exportar los controladores para que puedan ser usados en las rutas
module.exports = {
    getMoviesController,
    createMoviesController
};
