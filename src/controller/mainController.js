import Header from "../components/header.js";
import Search from "../components/search.js";
import MovieCard from "../components/movie-card.js";

import { searchMovie } from '../models/movie.js';

const MainController = {
  init() {
    Header.setUp(document.querySelector('header'));
    Search.setUp(document.querySelector('.search'))
    .on('@search', (evt) => { this.search(evt.detail); });
    MovieCard.setUp(document.querySelector('.movie-card'));
  },
  
  async search({query}) {
    const movieData = await searchMovie(query);
    MovieCard.render(movieData);
  }
};

export default MainController;
