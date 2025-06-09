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
        <p><strong>Жанры:</strong> ${movie.genres.join(", ")}</p>
        <p><strong>Режиссёр:</strong> ${movie.director}</p>
        ${movie.writer ? `<p><strong>Сценарист:</strong> ${movie.writer}</p>` : ""}
        ${movie.composer ? `<p><strong>Композитор:</strong> ${movie.composer}</p>` : ""}
        <p><strong>Актёры:</strong> ${movie.actors.join(", ")}</p>
        <p><strong>Страна:</strong> ${movie.country}</p>
        <p><strong>Продолжительность:</strong> ${movie.duration}</p>
        ${movie.releaseDate ? `<p><strong>Премьера:</strong> ${movie.releaseDate}</p>` : ""}
        ${movie.budget ? `<p><strong>Бюджет:</strong> ${movie.budget}</p>` : ""}
        <p><strong>Моя оценка:</strong> ${movie.myRating}/10</p>
        <p><strong>Кинопоиск:</strong> ${movie.kpRating}</p>
        <p class="description">${movie.description}</p>
        ${movie.fact ? `<p class="fact"><em>Интересный факт:</em> ${movie.fact}</p>` : ""}

        <div class="nav-buttons">
          ${prev ? `<button onclick="navigateTo('${prev.title}', '${prev.type}')">← ${prev.title}</button>` : ""}
          ${next ? `<button onclick="navigateTo('${next.title}', '${next.type}')">${next.title} →</button>` : ""}
        </div>
      </div>
    </div>
    `;
  } else {
    detailsContainer.innerHTML = "<p>Фильм или сериал не найден.</p>";
  }
}

function navigateTo(title, type) {
  const url = `details.html?id=${encodeURIComponent(title)}&type=${type}`;
  window.location.href = url;
}
