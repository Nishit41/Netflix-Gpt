import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log(movies , title);
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};
