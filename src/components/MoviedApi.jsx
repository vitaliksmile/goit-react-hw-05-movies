import axios from 'axios';
const API_KEY = '35c9323b204760b5af2587bbf9b07e41';
const BASE_URL = 'https://api.themoviedb.org/3';

export function GetTrending() {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    });
}

export function GetSearchMovies(query) {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    )
    .then(response => {
      return response.data.results;
    });
}
export function GetMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      return response.data;
    });
}
export function GetMovieCredits(movieId) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(response => {
      return response.data.cast;
    });
}
export function GetMovieReviews(movieId) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => {
      return response.data.results;
    });
}
