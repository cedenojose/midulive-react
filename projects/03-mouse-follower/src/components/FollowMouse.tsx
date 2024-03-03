import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}
const FollowMouse = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  // Pointer move
  useEffect(() => {
    console.log("efecto ", { enabled });
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    // Limpiar el efect anterior antes de ejecutar el nuevo
    // Se ejecuta cuando se desmonta el componente o
    // Cuando cambian las dependencias
    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // change body className
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  const handleClick = (): void => {
    setEnabled(!enabled);
  };
  return (
    <>
      {enabled && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0, .5)",
            borderRadius: "50%",
            border: "1px solid #fff",
            opacity: 0.8,
            pointerEvents: "none",
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      )}
      <button
        type="button"
        onClick={handleClick}
      >
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

export default FollowMouse;
