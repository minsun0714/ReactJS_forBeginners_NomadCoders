import { Link } from "react-router-dom";

function Intro({ title, summary, url }) {
  return (
    <div>
      <h2>{title}</h2>
      <a href={url} target='_blank'>
        MORE
      </a>
      <p> {summary}</p>
    </div>
  );
}
export default Intro;
