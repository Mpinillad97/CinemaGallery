const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()


    
   
    const objetoMovie = {
        title: form.title.value,
        year: form.year.value,
        director: form.director.value,
        duration: `${form.hour.value} h ${form.minutes.value} m`,
        rating: form.rating.value,
        posterURL: form.posterUrl.value
    }

    for(const key in objetoMovie){
        if(!objetoMovie[key]){
            alert(`El campo ${key} es requerido`)
        }

    if(objetoMovie["genre"].length === 0){
        alert(`${genre}`)
        }
    }

    console.log(objetoMovie);
})

form.addEventListener("reset", () => {
    e.preventDefault();

    
})
