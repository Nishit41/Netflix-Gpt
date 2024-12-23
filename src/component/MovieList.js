import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div>
        <h1 className="text-2xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};
