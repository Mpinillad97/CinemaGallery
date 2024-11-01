const validationMoviesInfo = (req, res, next) => {
    const fields = ["title", "year", "director", "duration", "genre", "rate", "poster"]

    const missingFields = fields.filter(field => !req.body[field])

    if(missingFields.length > 0){
        res.status(400).json({
            message: `falta información para crear la pelicula: ${missingFields.join(",")}`,
        })
    } else {
        next()
    }
}

module.exports = {
    validationMoviesInfo
}