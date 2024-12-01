import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const GptMovieSuggestion = () => {
  const { filteredMovies } = useSelector((store) => store.movies);
  return (
    <>
      {filteredMovies?.map((movies, index) => (
        <div className="px-2">
          <MovieList
            title={movies[index]?.title}
            movies={filteredMovies[index]}
          />
        </div>
      ))}
    </>
  );
};
