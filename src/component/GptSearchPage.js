import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { GptSearchBar } from "./GptSearchBar";

export const GptSearchPage = () => {
  return (
    <div className="bg-gray-200">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
