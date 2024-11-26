import { useDispatch } from "react-redux";
import { EMPTY_ARRAY, MOVIE_OPTIONS } from "../constant/constant";
import { addTrailerVideos } from "../component/utills.js/movieSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        MOVIE_OPTIONS
      );
      const json = await data.json();
      const filteredData = json?.results?.filter(
        (video) => video?.type === "Trailer"
      );
      dispatch(addTrailerVideos(filteredData));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, EMPTY_ARRAY);
};
