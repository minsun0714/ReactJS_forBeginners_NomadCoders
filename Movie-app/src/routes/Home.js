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
<<<<<<< HEAD
    <div>
      <h1 className={styles.banner}>Jasmine movie room</h1>
      <h2 className={styles.num}>movies ready for you : {movies.length}</h2>
      <hr></hr>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            year={movie.year}
          />
        ))
      )}
=======
    <div className={styles.bg}>
      <h1 className={styles.banner}>Jasmine movie room</h1>
      <h2 className={styles.num}>
        number of movies ready for you ({movies.length})
      </h2>
      <hr className={styles.hr}></hr>
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
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
              />
            </div>
          ))
        )}
      </div>
>>>>>>> 6cb3564 (📝 에러 해결: git init)
    </div>
  );
}
export default Home;
