import { useDispatch, useSelector } from "react-redux";
import { EMPTY_ARRAY, MOVIE_OPTIONS } from "../constants/constant";
import { addTrailerVideos } from "../component/utils/movieSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
  const trailerVideos = useSelector((store) => store?.movie?.trailerVideos);
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
    !trailerVideos && getMovieVideos();
  }, EMPTY_ARRAY);
};
