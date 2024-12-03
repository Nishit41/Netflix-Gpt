import { IMG_CDN } from "../constants/constant";

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="m-2 py-4 w-72 h-72">
      <img
        alt="Movie Card"
        src={IMG_CDN + posterPath}
        className="w-52 max-w-none"
      />
    </div>
  );
};
