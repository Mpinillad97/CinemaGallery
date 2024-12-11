// Middleware para validar la información de la película
const validationMoviesInfo = (req, res, next) => {
    // Definir los campos requeridos para crear una película
    const fields = ["title", "year", "director", "duration", "genre", "rate", "poster"];

    // Filtrar los campos que faltan en la solicitud
    const missingFields = fields.filter(field => !req.body[field]);

    // Si faltan campos, enviar una respuesta de error con los campos faltantes
    if (missingFields.length > 0) {
        res.status(400).json({
            message: `Falta información para crear la película: ${missingFields.join(", ")}`,
        });
    } else {
        // Si no faltan campos, continuar con la siguiente función en la cadena de middlewares
        next();
    }
};

// Exportar el middleware para ser usado en otros archivos
module.exports = {
    validationMoviesInfo
};
