require("dotenv").config()

const mongoose = require("mongoose");

const dbConnection = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.oqdwi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Prueba`)
}

module.exports = {
    dbConnection
}



