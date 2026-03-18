function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const movieId = getQueryParam("id");
const typeParam = getQueryParam("type");
const detailsContainer = document.getElementById("details");

if (movieId && detailsContainer) {
  const currentType = typeParam || null;
  const filteredMovies = currentType ? movies.filter(m => m.type === currentType) : movies;
  const index = filteredMovies.findIndex(m => m.title === movieId);
  const movie = filteredMovies[index];

  if (movie) {
    const prev = index > 0 ? filteredMovies[index - 1] : null;
    const next = index < filteredMovies.length - 1 ? filteredMovies[index + 1] : null;

    detailsContainer.innerHTML = `
    <div class="movie-full">
      <img src="assets/img/${movie.image}" alt="${movie.title}">
      <div class="details-text">
        <h2>${movie.title} (${movie.year})</h2>
        ${movie.slogan ? `<p class="slogan">"${movie.slogan}"</p>` : ""}
        <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        ${movie.writer ? `<p><strong>Writer:</strong> ${movie.writer}</p>` : ""}
        ${movie.composer ? `<p><strong>Composer:</strong> ${movie.composer}</p>` : ""}
        <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
        <p><strong>Country:</strong> ${movie.country}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        ${movie.releaseDate ? `<p><strong>Release date:</strong> ${movie.releaseDate}</p>` : ""}
        ${movie.budget ? `<p><strong>Budget:</strong> ${movie.budget}</p>` : ""}
        <p><strong>My rating:</strong> ${movie.myRating}/10</p>
        <p><strong>Kinopoisk:</strong> ${movie.kpRating}</p>
        <p class="description">${movie.description}</p>
        ${movie.fact ? `<p class="fact"><em>Interesting fact:</em> ${movie.fact}</p>` : ""}

        <div class="nav-buttons">
          ${prev ? `<button onclick="navigateTo('${prev.title}', '${prev.type}')">&larr; ${prev.title}</button>` : ""}
          ${next ? `<button onclick="navigateTo('${next.title}', '${next.type}')">${next.title} &rarr;</button>` : ""}
        </div>
      </div>
    </div>
    `;
  } else {
    detailsContainer.innerHTML = "<p>Movie or series not found.</p>";
  }
}

function navigateTo(title, type) {
  const url = `details.html?id=${encodeURIComponent(title)}&type=${type}`;
  window.location.href = url;
}
