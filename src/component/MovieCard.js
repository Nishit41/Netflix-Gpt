import { IMG_CDN } from "../constant/constant";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="m-2 py-4 w-72">
      <img
        alt="Movie Card"
        src={IMG_CDN + posterPath}
        className="w-52 max-w-none"
      />
    </div>
  );
};
