import { useDispatch, useSelector } from "react-redux";
import {
  GEMINI_API_KEY,
  LANGUAGE_PLACEHOLDER,
} from "../constant/constant";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { fetchMovie } from "../hooks/useFetchMovies";
import { filteredMovies } from "./utils/movieSlice";


export const GptSearchBar = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((store) => store.config);
  const searchText = useRef(null);
  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(gptQuery);
    const gptMovies = result?.response
      ?.text()
      .split(",")
      .map((movie) => fetchMovie(movie));
    const searchedMovies = await Promise.all(gptMovies);
    dispatch(filteredMovies(searchedMovies))
  };
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/3 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="py-2 p-2 m-2 col-span-9"
          placeholder={LANGUAGE_PLACEHOLDER?.[lang]?.placeholder}
          ref={searchText}
        />
        <button
          className="py-1 px-4 bg-red-900 text-white rounded-md col-span-3"
          onClick={handleSearch}
        >
          {LANGUAGE_PLACEHOLDER?.[lang]?.searchText}
        </button>
      </form>
    </div>
  );
};
