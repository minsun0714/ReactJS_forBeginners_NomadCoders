function Intro({ title, summary, url }) {
  console.log(summary);
  return (
    <div>
      <h2>{title}</h2>
      <a href={url}>click for detail</a>
      <p> {summary}</p>
    </div>
  );
}
export default Intro;
