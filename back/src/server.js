// Importación de dependencias necesarias
const express = require("express"); // Framework de servidor para crear la app
const morgan = require("morgan"); // Middleware para registro de peticiones HTTP
const cors = require("cors"); // Middleware para habilitar CORS
const { router } = require("./routes/index.js"); // Importa las rutas definidas en el archivo routes/index.js

// Crear una nueva instancia de la aplicación Express
const app = express();

// Configuración de middlewares
app.use(morgan("dev")); // Middleware para registrar las peticiones HTTP en formato 'dev'
app.use(cors()); // Habilitar CORS para permitir solicitudes desde diferentes orígenes
app.use(express.json()); // Middleware para parsear los cuerpos de las peticiones en formato JSON

// Configuración de las rutas
app.use(router); // Usar las rutas definidas en el archivo router.js

// Exportar la aplicación para su uso en otros módulos
module.exports = { 
    app 
};

