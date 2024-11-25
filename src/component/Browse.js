import { Header } from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* Display the movies here */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};
