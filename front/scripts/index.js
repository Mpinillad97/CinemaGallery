const { createMovieCard } = require("./createMovieCard");
const axios = require("axios");
const { tempData } = require("./tempData")
const { formJs } = require("./form")

const pathname = location.pathname;

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const movies = response.data.data; 
    movies.forEach(createMovieCard);
  } catch (err) {
    alert("Página en mantenimiento, mostrando peliculas de respaldo.");
    tempData.forEach(createMovieCard);
  }
}

if (pathname.includes("/index") || pathname === "/front" || pathname === "/") fetchData();
if (pathname === "/pages/Form/index.html" || pathname.includes("/form")) formJs();










