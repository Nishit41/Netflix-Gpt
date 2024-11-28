import { useSelector } from "react-redux";
import { LANGUAGE_PLACEHOLDER } from "../constant/constant";

export const GptSearchBar = () => {
  const language = useSelector((store) => store.config);
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/3 bg-black grid grid-cols-12">
        <input
          type="text"
          className="py-2 p-2 m-2 col-span-9"
          placeholder={LANGUAGE_PLACEHOLDER?.[language]?.placeholder}
        />
        <button className="py-1 px-4 bg-red-900 text-white rounded-md col-span-3">
          {LANGUAGE_PLACEHOLDER?.[language]?.searchText}
        </button>
      </form>
    </div>
  );
};
