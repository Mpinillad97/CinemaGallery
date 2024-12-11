// Importación de dependencias necesarias
const { Router } = require("express"); // Importa el constructor de Router de Express
const { getMoviesController, createMoviesController } = require("../controllers/moviesController"); // Importa los controladores de películas
const { validationMoviesInfo } = require("../middlewares/index"); // Importa el middleware para validar la información de las películas

// Crear una nueva instancia del enrutador para películas
const moviesRouter = Router();

// Definir la ruta GET para obtener películas
moviesRouter.get("/", getMoviesController); // Controlador para obtener todas las películas

// Definir la ruta POST para crear una nueva película con validación
moviesRouter.post("/", validationMoviesInfo, createMoviesController); // Middleware de validación seguido del controlador para crear una película

// Exportar el enrutador de películas para que pueda ser utilizado en otros archivos
module.exports = {
    moviesRouter
};
