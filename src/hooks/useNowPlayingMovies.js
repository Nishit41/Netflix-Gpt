import { useDispatch } from "react-redux";
import { EMPTY_ARRAY, MOVIE_OPTIONS } from "../constant/constant";
import { addNowPlayingMovies } from "../component/utils/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => getNowPlayingMovies, EMPTY_ARRAY);
};
