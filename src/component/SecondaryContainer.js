import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  return (
    <div className="bg-black text-white pt-2 -mt-96">
      <MovieList movies={movies?.nowPlayingMovies} title={"Now Playing Movies"}/> 
    </div>
  );
};
