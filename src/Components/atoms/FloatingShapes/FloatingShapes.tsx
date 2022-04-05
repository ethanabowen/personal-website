import "./FloatingShapes.css";

function buildFloatingShapes(numberOfFloatingShapes: number) {
  let floatingShapes = [];
  for (let index = 0; index < numberOfFloatingShapes; index++) {
    floatingShapes.push(<div key={`floating-shape-${index}`} className="floating-shape" />);
  }

  return floatingShapes;
}
export default function FloatingShapes() {
  const floatingShapes = buildFloatingShapes(120);
  return (
      <div className="floating-shapes">
        {floatingShapes.map((floatingShape) => {
          return floatingShape;
        })}
      </div>
  );
}
