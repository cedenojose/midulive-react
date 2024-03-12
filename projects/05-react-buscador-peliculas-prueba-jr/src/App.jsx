import { useCallback, useEffect, useState } from "react";

import useMovies from "./hooks/useMovies";
import Movies from "./components/Movies";
import useSearch from "./hooks/useSearch";
import debounce from "just-debounce-it";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  useEffect(() => {
    console.log("useEffect");
  }, [getMovies]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });

    // Utilizando JS para leer el DOM
    // const fields = new window.FormData(event.target);
    // const query = fields.get("query");
  };

  const debounceGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getMovies({ search });
    }, 500),
    [getMovies]
  );

  const handleChange = (event) => {
    const newQuery = event.target.value;
    // Pre-validacion
    if (newQuery.startsWith(" ")) {
      return;
    }
    setSearch(newQuery);

    debounceGetMovies(newQuery);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            type="text"
            name="search"
            id="search"
            placeholder="Avengers, The Matrix, Robocop..."
            value={search}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="sort"
            id="sort"
            checked={sort}
            onChange={handleSort}
          />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando......</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
