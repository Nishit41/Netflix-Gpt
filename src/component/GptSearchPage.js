import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { GptSearchBar } from "./GptSearchBar";

export const GptSearchPage = () => {
  return (
    <div className="bg-gray-300">
      {" "}
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
