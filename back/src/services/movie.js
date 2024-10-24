class Movie {
    constructor({ title, poster, director, year, duration, genre, rate }) {
        if (!title || !poster || !director) {
            throw new Error("Faltan propiedades necesarias: title, poster, director.");
        }

        this.title = title;
        this.poster = poster;
        this.director = director;
        this.year = year; 
        this.duration = duration; 
        this.genre = genre; 
        this.rate = rate; 
    }
}

module.exports = Movie;