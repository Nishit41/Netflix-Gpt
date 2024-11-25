import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  return (
    <div>
      <MovieList movies={movies?.nowPlayingMovies} title={movies?.nowPlayingMovies?.original_title}/>
      <MovieList movies={movies?.nowPlayingMovies} title={movies?.nowPlayingMovies?.original_title}/>
      <MovieList movies={movies?.nowPlayingMovies} title={movies?.nowPlayingMovies?.original_title}/>
      <MovieList movies={movies?.nowPlayingMovies} title={movies?.nowPlayingMovies?.original_title}/>
    </div>
  );
};
