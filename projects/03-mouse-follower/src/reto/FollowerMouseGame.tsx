import { useEffect, useState } from "react";
import Points from "./Points";
import { getRandomNumber } from "./utils";
import { Position } from "./definition";
import Point from "./Point";

const FollowerMouseGame = () => {
  const widthPointer = 30;
  // State
  const [count, setCount] = useState<number>(0);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [positionPoint, setPositionPoint] = useState<Position>(() => {
    return { x: getRandomNumber(5, 95), y: getRandomNumber(5, 95) };
  });
  const [mouseInside, setMouseInside] = useState<boolean>(false);

  // Posicion del Mouse
  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY,
      });
      const botonPosition: DOMRect | undefined = document
        .querySelector("#point")
        ?.getBoundingClientRect();

      // Colision con el boton
      const radioPointer = widthPointer / 2;
      if (
        botonPosition &&
        botonPosition?.left - radioPointer <= clientX &&
        botonPosition?.right + radioPointer >= clientX &&
        botonPosition?.top - radioPointer <= clientY &&
        botonPosition?.bottom + radioPointer >= clientY
      ) {
        if (!mouseInside) {
          setCount((prevCount) => prevCount + 1);
          setPositionPoint({
            x: getRandomNumber(5, 95),
            y: getRandomNumber(5, 95),
          });
          setMouseInside(true);
        }
      } else {
        setMouseInside(false);
      }
    };
    window.addEventListener("pointermove", handleMove);

    // Cleanup
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [mouseInside]);

  const stylesCommun: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    border: "1px solid #fff",
    opacity: 0.8,
  };
  return (
    <>
      <div
        style={{
          ...stylesCommun,
          backgroundColor: "rgba(0, 0, 0, .5)",
          pointerEvents: "none",
          left: -widthPointer / 2,
          top: -widthPointer / 2,
          width: widthPointer,
          height: widthPointer,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      <Point
        stylesCommun={{ ...stylesCommun, backgroundColor: "#D40C7E" }}
        positionPoint={positionPoint}
        widthPointer={widthPointer / 3}
      />

      <Points>Puntos: {count}</Points>
    </>
  );
};
export default FollowerMouseGame;
