const { app } = require("./src/server");
// const { dbConnection } = require("./src/config/dbConfig")


// const dbConnection = async () => {
//     try {
//         console.log("Conexion a la DB exitosa");
//         app.listen(3000, () => {
//         console.log("Server Listening on port 3000");
//     });
//     } catch (error) {
//         console.error("Error al conectar a la DB", error);
//         throw error;
//     }
// }


// dbConnection();


app.listen(3000, () => {
    console.log("Server Listening on port 3000");
});
