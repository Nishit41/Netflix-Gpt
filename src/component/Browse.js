import { Header } from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { GptSearchPage } from "./GptSearchPage";
import { useSelector } from "react-redux";

export const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  useNowPlayingMovies();

  return (
    <div className="w-full">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <div className="w-full">
            <SecondaryContainer />
          </div>
        </>
      )}
    </div>
  );
};
