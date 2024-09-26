const movieContainer = document.querySelector('.movieContainer');

//Funcion para crear cada tarjeta
function createMovieCard(movie) {
    return `
    <div class="card">
      <div class="movie-info">
        <a href="#" class="movie-title">${movie.title}</a> <!-- Enlace vacío -->
      </div>
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-details">
        <p><strong>Año:</strong> ${movie.year}</p> <!-- Año de la película aquí -->
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>
        <div class="rating-box"><strong>Rating:</strong> ${movie.rate}</div>
      </div>
    </div>
  `;
}


movieContainer.innerHTML = tempData.map(createMovieCard).join('');