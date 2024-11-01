const tempData = [
    {
      id: 1,
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Harry Potter and the Deathly Hallows: Part 2",
      year: 2011,
      director: "David Yates",
      duration: "2h 10min",
      genre: ["Adventure", "Drama", "Fantasy"],
      rate: 8.1,
      poster:
        "https://i.ebayimg.com/images/g/k34AAOSw3ydV35lN/s-l1200.jpg",
    },
    {
      id: 5,
      title: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",
      duration: "2h 55min",
      genre: ["Crime", "Drama"],
      rate: 9.2,
      poster:
        "https://hips.hearstapps.com/hmg-prod/images/gabz-godfather-1646152137.png",
    },
    {
      id: 6,
      title: "Ready Player One",
      year: 2018,
      director: "Steven Spielberg",
      duration: "2h 20min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      rate: 7.4,
      poster:
        "https://image.tmdb.org/t/p/original/2iuVrtC5IpwLtSFSgkIIIKLs0Zq.jpg",
    }
  ];

let id = 7;

const getMovieServices = () => {
   return tempData;
};

const createMovieService = (movie) => {
    movie.id = id
    id++
    tempData.push(movie);
    return "Se creo la pelicula correctamente"
}


module.exports = {
    getMovieServices,
    createMovieService
};

