// Importa el contenedor principal
const movieContainer = document.querySelector('.movieContainer');

// Función principal para crear cada tarjeta de película.
function createMovieCard(movie) {
  // Crear la tarjeta principal
  const card = document.createElement('div');
  card.classList.add('card'); // Clase principal de la tarjeta

  // Sección de información básica de la película
  const movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-info');

  const movieTitle = document.createElement('a');
  movieTitle.classList.add('movie-title');
  movieTitle.href = "#"; // Enlace vacío como marcador
  movieTitle.textContent = movie.title; // Texto del título de la película

  movieInfo.appendChild(movieTitle); // Agregar título a la información de la película

  // Poster de la película
  const moviePoster = document.createElement('img');
  moviePoster.src = movie.poster; // URL del póster
  moviePoster.alt = movie.title; // Texto alternativo del póster
  moviePoster.classList.add('movie-poster'); // Clase para estilos del póster

  // Sección de detalles de la película
  const movieDetails = document.createElement('div');
  movieDetails.classList.add('movie-details');

  const movieYear = document.createElement('p');
  movieYear.innerHTML = `<strong>Año:</strong> ${movie.year}`;

  const movieDirector = document.createElement('p');
  movieDirector.innerHTML = `<strong>Director:</strong> ${movie.director}`;

  const movieDuration = document.createElement('p');
  movieDuration.innerHTML = `<strong>Duración:</strong> ${movie.duration}`;

  const movieGenre = document.createElement('p');
  movieGenre.innerHTML = `<strong>Géneros:</strong> ${movie.genre.join(', ')}`;

  const ratingBox = document.createElement('div');
  ratingBox.classList.add('rating-box');
  ratingBox.innerHTML = `<strong>Rating:</strong> ${movie.rate}`;

  // Ensamblar los detalles de la película
  movieDetails.appendChild(movieYear);
  movieDetails.appendChild(movieDirector);
  movieDetails.appendChild(movieDuration);
  movieDetails.appendChild(movieGenre);
  movieDetails.appendChild(ratingBox);

  // Ensamblar la tarjeta completa
  card.appendChild(movieInfo); // Información básica
  card.appendChild(moviePoster); // Póster
  card.appendChild(movieDetails); // Detalles de la película

  // Agregar la tarjeta al contenedor principal
  movieContainer.appendChild(card);
}

// Exportar la función para su uso en otros módulos
module.exports = { createMovieCard };