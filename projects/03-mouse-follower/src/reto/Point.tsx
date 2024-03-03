import { Position } from "./definition";

type Point = {
  widthPointer: number;
  positionPoint: Position;
  stylesCommun: React.CSSProperties;
};
const Point = ({ widthPointer, positionPoint, stylesCommun }: Point) => {
  return (
    <div
      id="point"
      style={{
        ...stylesCommun,
        left: `${positionPoint.x}%`,
        top: `${positionPoint.y}%`,
        width: widthPointer,
        height: widthPointer,
      }}
    />
  );
};
export default Point;
