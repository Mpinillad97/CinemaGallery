const axios = require("axios");


const formJs = () => {
    console.log("formJs está siendo ejecutado");

    const form = document.querySelector("form");
    const clearForm = document.querySelector("#clearForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        const genresChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        const genresList = Array.from(genresChecked).map(checkbox => checkbox.value);
        const objetoMovie = {
            title: form.title.value,
            year: form.year.value,
            director: form.director.value,
            duration: `${form.hour.value} h ${form.minutes.value} m`,
            genre: genresList,
            rate: form.rate.value,
            poster: form.posterUrl.value
        };

        // Validar si todos los campos están llenos
        for (const key in objetoMovie) {
            if (!objetoMovie[key]) {
                alert(`El campo ${key} es requerido`);
                return; // Detener la ejecución del formulario si algún campo está vacío
            }
        }

        // Validar si al menos un género está seleccionado
        if (objetoMovie["genre"].length === 0) {
            alert("Debe seleccionar al menos un género");
            return; // Detener la ejecución del formulario si no se selecciona un género
        }

        // Si todas las validaciones pasaron, enviar la solicitud POST
        axios.post("http://localhost:3000/movies", objetoMovie)
            .then((respuesta) => {
                alert("Pelicula creada con éxito");
                form.reset();
            })
            .catch((error) => {
                alert("Error al crear la pelicula");
            });
    });

    clearForm.addEventListener("click", () => {
        form.reset();
    });
};

module.exports = {
    formJs
};


