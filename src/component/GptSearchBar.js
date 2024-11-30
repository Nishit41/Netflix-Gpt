import { useSelector } from "react-redux";
import { LANGUAGE_PLACEHOLDER } from "../constant/constant";
import { useRef } from "react";
import openai from "./utills.js/openai";

export const GptSearchBar = () => {
  const { lang } = useSelector((store) => store.config);
  const searchText = useRef(null);
  const handleSearch = async () => {
    console.log("search", searchText.current.value);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText?.current?.value }],
      model: "gpt-3.5-turbo",
    });
    console.log("chatCompletion", chatCompletion);
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
