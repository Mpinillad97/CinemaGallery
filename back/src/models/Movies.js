// Importar mongoose para interactuar con la base de datos MongoDB
const mongoose = require("mongoose");

// Definición de la estructura del objeto película (movieObject)
const movieObject = {
    title: {
        type: String,
        required: true, // El título es obligatorio
        unique: true // El título debe ser único
    },
    year: {
        type: Number,
        required: true // El año de la película es obligatorio
    },
    director: {
        type: String,
        required: true // El director es obligatorio
    },
    duration: {
        type: String,
        required: true // La duración de la película es obligatoria
    },
    genre: {
        type: [String], // El género es un arreglo de strings
        required: true // El género es obligatorio
    },
    rate: {
        type: Number,
        required: true // La calificación es obligatoria
    },
    poster: {
        type: String,
        required: true // La URL del póster es obligatoria
    }
};

// Crear el esquema de mongoose con la estructura definida
const movieSchema = new mongoose.Schema(movieObject);

// Crear el modelo de película utilizando el esquema definido
const Movie = mongoose.model("Movie", movieSchema);

// Exportar el modelo para ser usado en otros archivos
module.exports = {
    Movie
};
