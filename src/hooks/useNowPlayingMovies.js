import { useDispatch, useSelector } from "react-redux";
import { EMPTY_ARRAY, MOVIE_OPTIONS } from "../constants/constant";
import { addNowPlayingMovies } from "../component/utils/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((store)=>store?.movies?.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => !nowPlayingMovies && getNowPlayingMovies, EMPTY_ARRAY);
};
