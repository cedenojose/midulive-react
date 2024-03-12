import { useEffect, useRef, useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  // Validar utilizando Effect
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula que solo contenga numeros");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
};

export default useSearch;
