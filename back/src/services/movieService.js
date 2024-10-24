const Movie = require("./movie");

module.exports = {
    getMovies: async () => {
        try {
            const response = await fetch("https://students-api.up.railway.app/movies");
            if (!response.ok) {
                throw new Error(`Error al obtener las películas: ${response.statusText}`);
            }
            const data = await response.json();  
            const movies = data.map(movieData => {
                return new Movie({
                    title: movieData.title,
                    poster: movieData.poster,
                    director: movieData.director,
                    year: movieData.year, 
                    duration: movieData.duration, 
                    genre: movieData.genre, 
                    rate: movieData.rate 
                });
            });
            return movies;

        } catch (error) {
            console.error("Error al obtener las películas: ", error);
            throw error;
        }
    },
};