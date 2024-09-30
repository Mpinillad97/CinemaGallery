const movieContainer = document.querySelector('.movieContainer');

//Funcion para crear cada tarjeta
function createMovieCard(movie) {
  // Crear los elementos principales
  const card = document.createElement('div');
  card.classList.add('card');
  
  const movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-info');
  
  const movieTitle = document.createElement('a');
  movieTitle.classList.add('movie-title');
  movieTitle.href = "#";  // Enlace vacío
  movieTitle.textContent = movie.title;  // Título de la película
  
  const moviePoster = document.createElement('img');
  moviePoster.src = movie.poster;  // Poster de la película
  moviePoster.alt = movie.title;
  moviePoster.classList.add('movie-poster');

  const movieDetails = document.createElement('div');
  movieDetails.classList.add('movie-details');
  
  const movieYear = document.createElement('p');
  movieYear.innerHTML = `<strong>Año:</strong> ${movie.year}`;
  
  const movieDirector = document.createElement('p');
  movieDirector.innerHTML = `<strong>Director:</strong> ${movie.director}`;
  
  const movieDuration = document.createElement('p');
  movieDuration.innerHTML = `<strong>Duration:</strong> ${movie.duration}`;
  
  const movieGenre = document.createElement('p');
  movieGenre.innerHTML = `<strong>Genre:</strong> ${movie.genre.join(', ')}`;
  
  const ratingBox = document.createElement('div');
  ratingBox.classList.add('rating-box');
  ratingBox.innerHTML = `<strong>Rating:</strong> ${movie.rate}`;
  
  // Construir la estructura jerárquica
  movieInfo.appendChild(movieTitle);
  movieDetails.appendChild(movieYear);
  movieDetails.appendChild(movieDirector);
  movieDetails.appendChild(movieDuration);
  movieDetails.appendChild(movieGenre);
  movieDetails.appendChild(ratingBox);
  
  card.appendChild(movieInfo);
  card.appendChild(moviePoster);
  card.appendChild(movieDetails);
  
  // Agregar la tarjeta al contenedor de películas
  movieContainer.appendChild(card);
}

tempData.forEach(createMovieCard);