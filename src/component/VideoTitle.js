export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 w-96 h-screen p-4 absolute text-white bg-gradient-to-r from-black">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <p>{overview}</p>
      <div className="flex gap-4 mt-2 text-center">
        <button className="bg-gray-400 text-white px-5 py-1.5  rounded-md">
          Play
        </button>
        <button className="bg-gray-400 text-white px-5 py-1.5 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};
