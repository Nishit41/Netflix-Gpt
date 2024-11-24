import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackGround = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideos = useSelector((store) => store?.movies?.trailerVideos);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideos?.[0]?.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
