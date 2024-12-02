import { MOVIE_OPTIONS } from "../constants/constant";

export const fetchMovie = async (movie) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    MOVIE_OPTIONS
  );
  const json = await data.json();
  return json.results;
};
