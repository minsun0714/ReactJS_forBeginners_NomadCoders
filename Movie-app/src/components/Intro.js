import { Link } from "react-router-dom";

function Intro({ title, summary, url }) {
  console.log(summary);
  return (
    <div>
      <h2>
        <Link to={url}>{title}더 보기</Link>
      </h2>
      <p> {summary}</p>
    </div>
  );
}
export default Intro;
