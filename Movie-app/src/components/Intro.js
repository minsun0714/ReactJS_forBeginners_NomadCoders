import { Link } from "react-router-dom";

function Intro({ title, summary, url, genre, rating, bgImg }) {
  return (
    <div>
      <img src={bgImg} alt={title} />
      <h2>{title}</h2>

      <ul>{genre && genre.map((g) => <li key={g}>{g}</li>)}</ul>
      <h3>평점: {rating}점</h3>
      <a href={url} target='_blank'>
        MORE
      </a>
      <p> {summary}</p>
    </div>
  );
}
export default Intro;
