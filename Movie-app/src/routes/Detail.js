import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Intro from "../components/Intro";

function Detail() {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Intro
        key={id}
        title={movie.title_long}
        rating={movie.rating}
        genre={movie.genres}
        url={movie.url}
      />
    </div>
  );
}
export default Detail;
