const form = document.querySelector("form");
const clearForm = document.querySelector("#clearForm");

form.addEventListener("submit", (e) => {
    e.preventDefault()
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
    }
    for(const key in objetoMovie){
        if(!objetoMovie[key]){
            alert(`El campo ${key} es requerido`)
            return
        }
        if(objetoMovie["genre"].length === 0){
            alert(`Debe seleccionar minimo un genero`)
            return
        }
    }
    console.log(objetoMovie);
})

clearForm.addEventListener("click", () => {
    form.reset()
})

