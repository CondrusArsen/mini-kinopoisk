# MiniKinopoisk

An interactive mini website with a personal selection of favorite movies and TV series. It was built as a frontend learning project with a multi-page structure, filtering, a light/dark theme, and detailed movie cards.

## Features

- Separate pages for movies and TV series
- Cards with posters, genres, ratings, and short descriptions
- A dedicated details page for each movie or series with director, cast, facts, and navigation
- Light and dark theme toggle
- Previous / next navigation directly inside `details.html`
- Responsive layout for mobile devices

## Project Structure

```text
project/
|-- data/
|   `-- movies.js             # Array with movie and series descriptions
|-- scripts/
|   |-- main.js               # Renders cards on the movies / series pages
|   `-- details.js            # Builds the detailed page for each title
|-- styles/
|   `-- main.css              # Shared styles and theme rules
|-- assets/
|   `-- img/
|       |-- *.jpg             # Movie and series posters
|       `-- demo.gif          # Project demo GIF
|-- index.html                # Home page
|-- films.html                # Movies page
|-- series.html               # Series page
`-- details.html              # Details page
```

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, variables)
- JavaScript (Vanilla JS)
- Git / GitHub

## Demo Preview

![MiniKinopoisk demo](./assets/demo.gif)

## Live Demo

[Open the site on GitHub Pages](https://condrusarsen.github.io/mini-kinopoisk/)

## Author

**Arseniy Atrokhov**

_An independent learning project built while studying frontend development and UX/UI._
