import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Intro from "../components/Intro";

function Detail() {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading for detail</h1>
      ) : (
        <Intro
          key={id}
          bgImg={movie.background_image}
          title={movie.title_long}
          rating={movie.rating}
          genre={movie.genres}
          url={movie.url}
        />
      )}
    </div>
  );
}
export default Detail;
