import { IMG_CDN } from "../constant/constant";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="m-2 w-44  py-4" >
      <img alt="Movie Card" src={IMG_CDN + posterPath}/>
    </div>
  );
};
