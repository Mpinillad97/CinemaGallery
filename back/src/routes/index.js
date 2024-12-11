// Importación de dependencias necesarias
const { Router } = require("express"); // Importa el constructor de Router de Express
const { moviesRouter } = require("./moviesRouter"); // Importa el enrutador de películas

// Crear una nueva instancia del enrutador
const router = Router();

// Definición de las rutas principales
router.use("/movies", moviesRouter); // Rutas para manejar solicitudes relacionadas con películas

// Exportar el enrutador para su uso en el servidor principal
module.exports = { 
    router 
};
