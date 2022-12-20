import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

function Intro({ title, summary, url, genre, rating, bgImg }) {
  return (
    <div className={styles.color}>
      <img src={bgImg} alt={title} className={styles.full} />
      <h2 className={styles.white}>{title}</h2>

      <h3 className={styles.white}>{genre.map((g) => `${g}/`)}</h3>
      <h3 className={styles.white}>평점: {rating}</h3>

      <button>
        {" "}
        <a href={url} target='_blank'>
          Click and watch '{title}' now!
        </a>
      </button>
      <p> {summary}</p>
    </div>
  );
}
export default Intro;
