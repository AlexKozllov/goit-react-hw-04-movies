import axios from "axios";

const API_KEY = "6d4314c3991bf14e2dde598365e18999";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrending = async () => {
  try {
    return await axios
      .get("/trending/movie/day")
      .then((response) => response.data.results);
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    return await axios
      .get(`/search/movie?`, {
        api_key: API_KEY,
        params: {
          language: "en-US",
          query,
          page: 1,
          include_adult: false,
        },
      })
      .then((response) => response.data.results);
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const getMovieDetails = async (movie_id) => {
  try {
    return await axios
      .get(`/movie/${movie_id}`, {
        params: {
          language: "en-US",
        },
      })
      .then((response) => response.data);
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const getMovieCredits = async (movie_id) => {
  try {
    return await axios
      .get(`/movie/${movie_id}/credits`, {
        params: {
          language: "en-US",
        },
      })
      .then((response) => response.data.cast);
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export const getMovieReviews = async (movie_id, page = 1) => {
  try {
    return await axios
      .get(`/movie/${movie_id}/reviews`, {
        params: {
          language: "en-US",
          page,
        },
      })
      .then((response) => response.data.results);
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};
// export const getTrending = async (search) => {
//   return await axios
//     .get(`/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
//     .then((response) => response.data.results);
// };

// export const searchMovies = async (search) => {
//   return await axios
//     .get(
//       `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
//     )
//     .then((response) => response.data.results);
// };

// export const getMovieDetails = async (movieId) => {
//   return await axios
//     .get(
//       `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//     )
//     .then((response) => response.data);
// };

// export const getMovieCredits = async (movieId) => {
//   return await axios
//     .get(`/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
//     .then((response) => response.data.cast);
// };

// export const getMovieReviews = async (movieId) => {
//   return await axios
//     .get(`/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
//     .then((response) => response.data.results);
// };
