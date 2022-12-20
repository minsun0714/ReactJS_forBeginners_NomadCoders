import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Intro from "../components/Intro";
<<<<<<< HEAD
=======
import styles from "./Detail.module.css";
>>>>>>> 6cb3564 (📝 에러 해결: git init)

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
<<<<<<< HEAD
        <h1>Loading for detail</h1>
=======
        <h1>Loading..</h1>
>>>>>>> 6cb3564 (📝 에러 해결: git init)
      ) : (
        <Intro
          key={id}
          bgImg={movie.large_cover_image}
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
