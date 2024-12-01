import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { GptSearchBar } from "./GptSearchBar";

export const GptSearchPage = () => {
  return (
    <>
      {" "}
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};
