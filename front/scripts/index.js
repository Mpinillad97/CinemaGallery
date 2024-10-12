const createMovieCard = require("./createMovieCard");
const axios = require("axios");

const fetchData = async () => {
  try {
    const data = await axios.get("https://students-api.up.railway.app/movies")
    Response.data.forEach(createMovieCard);
  } catch (err) {
    alert("Pagina en mantenimiento, por favor vuelva mas tarde.")
  }
}

fetchData();



