// Importación de las dependencias necesarias
const { app } = require("./src/server");
const { dbConnection } = require("./src/config/dbConfig")

// Función para iniciar el servidor y la conexión a la base de datos
const serverOn = async () => {
    try {
        // Intentar conectar a la base de datos
        await dbConnection()
        console.log("Conexion a la DB exitosa");
        // Si la conexión es exitosa, iniciar el servidor en el puerto definido
        app.listen(3000, () => {
            console.log("Server Listening on port 3000");
    });
    } catch (error) {
        // Si hay un error al conectar a la base de datos, mostrar un mensaje de error
        console.error("Error al conectar a la DB", error);
        throw error; //Lanzar el error para que se detenga el proceso
    }
}

// Llamada a la función que inicia el servidor
serverOn()