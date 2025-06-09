
const listContainer = document.getElementById("movie-list");
const isFilmPage = location.pathname.includes("films.html");
const isSeriesPage = location.pathname.includes("series.html");


if (listContainer) {
  const type = isFilmPage ? "film" : isSeriesPage ? "series" : null;

  if (type) {
    const filtered = movies.filter(movie => movie.type === type);

    filtered.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="assets/img/${movie.image}" alt="${movie.title}">
        <h3>${movie.title} (${movie.year})</h3>
        <p><strong>Жанры:</strong> ${movie.genres.join(", ")}</p>
        <p><strong>Моя оценка:</strong> ${movie.myRating}/10</p>
        <p><strong>Кинопоиск:</strong> ${movie.kpRating}</p>
        <p class="description">${movie.description}</p>
      `;

      card.addEventListener("click", () => {
        window.location.href = `details.html?id=${encodeURIComponent(movie.title)}&type=${movie.type}`;
      });

      listContainer.appendChild(card);
    });
  }
}


const toggleButton = document.getElementById("theme-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}
