import common from "./common.js";

const MovieCard = Object.create(common);

MovieCard.setUp = function (el) {
  this.init(el);
  this.hide();

  return this;
};

MovieCard.render = function (movieData) {
  let html = "";
  movieData.forEach((x) => {
    html += this.createMovieCard(x);
  });
  this.el.innerHTML = html;
  this.show();
};

MovieCard.createMovieCard = function (movie) {
  let html = '<div class="card">';
  html += `<span class="card__title"> ${movie.title} </span>`;
  html += `<img src="${movie.poster_path}" />`;
  html += '</div>';

  return html;
};

MovieCard.bindEvent = function () {
  this.on("submit", (evt) => evt.preventDefault());
  this.input.addEventListener("keydown", (evt) => {
    this.onInput(evt);
  });
};

export default MovieCard;
