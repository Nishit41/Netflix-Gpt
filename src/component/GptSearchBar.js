export const GptSearchBar = () => {
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/3 bg-black grid grid-cols-12">
        <input type="text" 
        className="py-2 p-2 m-2 col-span-9"
        placeholder="what would you like to watch today?" />
        <button className="py-1 px-4 bg-red-900 text-white rounded-md col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};
