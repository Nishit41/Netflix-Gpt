import { useEffect } from "react";
import { Header } from "./Header";
import { MOVIE_OPTIONS } from "../constant/constant";

export const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/changes?page=1",
      MOVIE_OPTIONS
    );
    const json = await data.json();
    console.log("json=>",json);
  };

  useEffect(() => getNowPlayingMovies, []);

  return (
    <>
      <Header />
    </>
  );
};
