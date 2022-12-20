import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, year }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
          {title}
        </Link>
      </h2>
      <h3 className={styles.genre}>
        {genres.map((g) =>
          g === genres[genres.length - 1] ? `${g}` : `${g}/`
        )}
      </h3>
      <h3 className={styles.sum}>
        {summary.length > 250
          ? summary.split("").splice(0, 250).join("") + ".."
          : summary}
      </h3>
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
