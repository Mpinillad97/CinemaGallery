// Cargar las variables de entorno desde el archivo .env
require("dotenv").config()

// Importar mongoose para interactuar con la base de datos MongoDB
const mongoose = require("mongoose");

// Función para establecer la conexión a la base de datos
const dbConnection = async () => {
    // Conectar a MongoDB utilizando las credenciales y detalles almacenados en las variables de entorno
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.oqdwi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Prueba`)
    // La función se asegura de que se realice la conexión correctamente
}

// Exportar la función dbConnection para ser utilizada en otros archivos
module.exports = {
    dbConnection
}



