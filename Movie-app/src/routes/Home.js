import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.bg}>
      <h1 className={styles.banner}>명작 Cinema </h1>
      <h2 className={styles.num}>
        number of 명작s ready for you ({movies.length})
      </h2>
      <div className={styles.grid}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((movie) => (
            <div>
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title_long}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Home;
