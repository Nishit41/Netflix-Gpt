import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackGround } from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="w-full">
      <VideoTitle title={original_title} overview={overview}/>  
      <VideoBackGround movieId={id} /> 
    </div>
  );
};
export default MainContainer;
