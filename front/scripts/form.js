//Importación de dependencias
const axios = require("axios"); // Librería para realizar solicitudes HTTP

/**
 * Función principal que maneja la lógica del formulario.
 * Configura eventos y realiza las validaciones necesarias.
 */
const formJs = () => {
    console.log("formJs está siendo ejecutado");

    // Selección de elementos del DOM
    const form = document.querySelector("form");
    const clearForm = document.querySelector("#clearForm");

    /**
     * Evento "submit" del formulario.
     * Maneja el envío del formulario, validaciones, y el envío de datos al backend.
     */
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        // Obtener géneros seleccionados
        const genresChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        const genresList = Array.from(genresChecked).map(checkbox => checkbox.value);
        const objetoMovie = {
            title: form.title.value, //Titulo de la pelicula
            year: form.year.value, //Año de estreno
            director: form.director.value, //Director de la pelicula
            duration: `${form.hour.value} h ${form.minutes.value} m`, //Duración en horas y minutos
            genre: genresList, //Lista de géneros seleccionados
            rate: form.rate.value, //Calificación
            poster: form.posterUrl.value //URL del póster
        };

        // Validación: Verificar que todos los campos estén completos
        for (const key in objetoMovie) {
            if (!objetoMovie[key]) {
                alert(`El campo ${key} es requerido`); // Mostrar alerta si un campo está vacío
                return; // Detener el envío del formulario
            }
        }

        // Validación: Verificar que al menos un género esté seleccionado
        if (objetoMovie["genre"].length === 0) {
            alert("Debe seleccionar al menos un género");
            return; // Detener el envío del formulario si no hay géneros seleccionados
        }

        // Enviar datos al backend usando una solicitud POST
        axios.post("http://localhost:3000/movies", objetoMovie)
            .then((respuesta) => {
                alert("Pelicula creada con éxito"); // Notificar éxito
                form.reset(); // Limpiar el formulario
            })
            .catch((error) => {
                alert("Error al crear la pelicula"); // Notificar error
            });
    });

    /**
     * Evento "click" del botón para limpiar el formulario.
     * Resetea todos los campos del formulario.
     */
    clearForm.addEventListener("click", () => {
        form.reset(); // Limpiar el formulario
    });
};

// Exportar la función para ser utilizada en otros archivos
module.exports = {
    formJs
};


