const createMovieCard = require("./createMovieCard");

$.get("https://students-api.up.railway.app/movies", (data) => {
  data.forEach(createMovieCard);
})



