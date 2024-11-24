import { Header } from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* Display the movies here */}
      <MainContainer/>
    </div>
  );
};
