"use strict";

// SINGIN FUCTIONAL

const elLogoutBtn = document.querySelector(".logout");
const localToken = window.localStorage.getItem("token");

if (!localToken) {
  window.location.replace("login.html");
}

elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");

  window.location.replace("login.html");
});
// SINGIN FUCTIONAL

// TMDB API RESPONSE FUCTIONAL
let headers = document.querySelector(".headers");

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "cff296e9a491db50c4b2db6668d0dc80";
let fetchNetflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
let fetchTrending = `/trending/all/week?api_key=${API_KEY}&languages=en-US`;
let fetchTopRated = `/movie/top_rated?api_key=${API_KEY}&languages=en-US`;
let fetchActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
let fetchComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
let fetchHorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
let fetchRomanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
let fetchDocumentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
let trailerQuery = `/videos?api_key=${API_KEY}`;

// Trending movie functinol
let trindingMovie = document.querySelector(".trindingMovie");

function setData() {
  fetch(`${baseURL}${fetchTrending}`)
    .then((data) => data.json())
    .then((item) => movieTmdbTrend(item.results));
}
setData();

function movieTmdbTrend(data) {
  data.map((item) => {
    console.log(item);

    const card = document.createElement("div");

    card.innerHTML = `

    <div class="movieCard">
    <img class="movieImg" src=${`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="${
      item.title
    }">
    <h3 class="movieName">${item.title}</h3>
    </div>
  `;

    trindingMovie.append(card);
  });
}

// TopRated MOVIE funtional

let tmdbmovies = document.querySelector(".tmdbmovies");

function setDatas() {
  fetch(`${baseURL}${fetchTopRated}`)
    .then((data) => data.json())
    .then((item) => tmdvTopRated(item.results));
}
setDatas();

function tmdvTopRated(data) {
  data.map((movie) => {
    console.log(movie);

    const cards = document.createElement("div");

    cards.innerHTML = `

    <div class="moviesCard">
    <img class="movieImgs" src=${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="${
      movie.title
    }">
    <h3 class="movieName">${movie.title}</h3>
    </div>
  `;

    tmdbmovies.append(cards);
  });
}

// Action MOVIE funtional
let tmdbmoviesAction = document.querySelector(".tmdbmoviesAction");

function setDatasAction() {
  fetch(`${baseURL}${fetchActionMovies}`)
    .then((data) => data.json())
    .then((item) => tmdvAction(item.results));
}
setDatasAction();

function tmdvAction(data) {
  data.map((movie) => {
    console.log(movie);

    const cardsAction = document.createElement("div");

    cardsAction.innerHTML = `

    <div class="moviesCard">
    <img class="movieImgs" src=${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="${
      movie.title
    }">
    <h3 class="movieName">${movie.title}</h3>
    </div>
  `;

    tmdbmoviesAction.append(cardsAction);
  });
}

// Comedy movies function

let tmdbComedyMovies = document.querySelector(".tmdbComedyMovies");

function setDatasComedy() {
  fetch(`${baseURL}${fetchComedyMovies}`)
    .then((data) => data.json())
    .then((item) => tmdComed(item.results));
}
setDatasComedy();

function tmdComed(data) {
  data.map((movie) => {
    console.log(movie);

    const cardComedy = document.createElement("div");

    cardComedy.innerHTML = `

    <div class="ComedyMoviesCard">
    <img class="ComedyMoviesImg" src=${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="${
      movie.title
    }">
    <h3 class="movieName">${movie.title}</h3>
    </div>
  `;

    tmdbComedyMovies.append(cardComedy);
  });
}

// HORROR MOVIES FUNCTIONAL
let chHorrorMovies = document.querySelector(".fetchHorrorMovies");

function setDatasHorror() {
  fetch(`${baseURL}${fetchHorrorMovies}`)
    .then((data) => data.json())
    .then((item) => tmdHorror(item.results));
}
setDatasHorror();

function tmdHorror(data) {
  data.map((movie) => {
    console.log(movie);

    const cardHorror = document.createElement("div");

    cardHorror.innerHTML = `

    <div class="fetchHorrorMoviesCard">
    <img class="fetchHorrorMoviesImg" src=${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="${
      movie.title
    }">
    <h3 class="movieName">${movie.title}</h3>
    </div>
  `;

    chHorrorMovies.append(cardHorror);
  });
}
// ROMANCE MOVIES FUNCTIONAL
let RomanceMovies = document.querySelector(".fetchRomanceMovies");

function setDatasRomance() {
  fetch(`${baseURL}${fetchRomanceMovies}`)
    .then((data) => data.json())
    .then((item) => tmdRomance(item.results));
}
setDatasRomance();

function tmdRomance(data) {
  data.map((movie) => {
    console.log(movie);

    const cardRomance = document.createElement("div");

    cardRomance.innerHTML = `

    <div class="fetchRomanceMoviesCard">
    <img class="fetchRomanceMoviesImg" src=${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="${
      movie.title
    }">
    <h3 class="movieName">${movie.title}</h3>
    </div>
  `;

    RomanceMovies.append(cardRomance);
  });
}

// Documentaries MOVIES FUNCTIONAL
let documenrariesMovies = document.querySelector(".DocumentariesMovies");

function setDatasDocumentary() {
  fetch(`${baseURL}${fetchDocumentaries}`)
    .then((data) => data.json())
    .then((item) => tmdDocumentary(item.results));
}
setDatasDocumentary();

function tmdDocumentary(data) {
  data.map((movie) => {
    console.log(movie);

    const cardDocumentary = document.createElement("div");

    cardDocumentary.innerHTML = `

    <div class="DocumentariesMoviesCard">
    <img class="DocumentariesMoviesImg" src=${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="${
      movie.title
    }">
    <h3 class="movieName">${movie.title}</h3>
    </div>
  `;

    documenrariesMovies.append(cardDocumentary);
  });
}

// const sorov = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//     trailerQuery: `/videos?api_key=${API_KEY}`,
// }

// export default sorov;
