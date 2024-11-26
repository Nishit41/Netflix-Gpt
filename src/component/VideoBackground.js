import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackGround = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideos = useSelector((store) => store?.movies?.trailerVideos);

  return (
    <div className="w-full flex justify-center items-center">
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideos?.[0]?.key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
  );
};
