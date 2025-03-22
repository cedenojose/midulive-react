import { useEffect } from "react";
import Link from "../Link";

const Buscador = ({ routeParams }) => {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`;
  }, []);
  return (
    <div>
      <h1>Buscador</h1>
      <h3>
        Estas buscando <strong>{routeParams.query}</strong>
      </h3>
      <Link to={"/"}>Volver a la Home</Link>
    </div>
  );
};
export default Buscador;
