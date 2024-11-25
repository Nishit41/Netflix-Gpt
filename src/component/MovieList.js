import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log(movies)
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="flex">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} posterPath={movie?.poster_path} />
      ))}
      </div>

    </div>
  );
};
