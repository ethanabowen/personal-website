import "./Background.css";

function buildStars(numberOfStars: number) {
  let stars = [];
  for (let index = 0; index < numberOfStars; index++) {
    stars.push(<div className="star" />);
  }

  return stars;
}
export default function Background() {
  const stars = buildStars(120);
  return (
    <div className="stars">
      {stars.map((star) => {
        return <>{star}</>
      })}
    </div>
  );
}
