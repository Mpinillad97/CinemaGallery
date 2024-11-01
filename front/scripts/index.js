const { createMovieCard } = require("./createMovieCard");
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const movies = response.data.data; 
    movies.forEach(createMovieCard);
  } catch (err) {
    alert("Página en mantenimiento, por favor vuelva más tarde.");
  }
}

fetchData();








