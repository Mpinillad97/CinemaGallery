const { createMovieCard } = require("./createMovieCard");
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get("https://students-api.up.railway.app/movies");
    response.data.forEach(createMovieCard);
  } catch (err) {
    alert("Pagina en mantenimiento, por favor vuelva más tarde.");
  }
}

fetchData();




