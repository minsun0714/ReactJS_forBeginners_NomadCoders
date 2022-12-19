import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, year }) {
  console.log(summary);
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`}>{title + " (" + year + ")"}</Link>
      </h2>
      <ul className={styles.genre}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h3>{summary.length > 400 ? summary.length === 400 : summary}</h3>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
