//Importacion de módulos y dependencias
const { createMovieCard } = require("./createMovieCard"); // Función para crear tarjetas de películas
const axios = require("axios"); // Librería para realizar solicitudes HTTP
const { tempData } = require("./tempData") // Datos temporales de respaldo
const { formJs } = require("./form") // Función para manejar el formulario

// Obtener la ruta actual de la página
const pathname = location.pathname;

/**
 * Función para obtener los datos de las películas desde el backend.
 * Si hay un error (p. ej., servidor no disponible), se usan datos de respaldo.
 */
const fetchData = async () => {
  try {
    // Solicitud HTTP para obtener las peliculas desde el backend
    const response = await axios.get("http://localhost:3000/movies");
    const movies = response.data.data; 
    movies.forEach(createMovieCard);
  } catch (err) {
    // Manejo de errores: mostrar mensaje y cargar datos de respaldo
    alert("Página en mantenimiento, mostrando peliculas de respaldo.");
    tempData.forEach(createMovieCard);
  }
}

// Validar la ruta actual y ejecutar la funcion correspondiente entre el index y el form. 
if (pathname.includes("/index") || pathname === "/front" || pathname === "/") fetchData();
if (pathname === "/pages/Form/index.html" || pathname.includes("/form")) formJs(); 










