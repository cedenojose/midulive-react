import PropTypes from "prop-types";
const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies?.map((movie) => {
        return (
          <li
            className="movie"
            key={movie.id}
          >
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img
              src={movie.poster}
              alt={`Poster of ${movie.title}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p>No se encontraron películas para esta búsqueda</p>;
};

const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return (
    <>{hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />}</>
  );
};
const MoviesProps = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      year: PropTypes.string,
      title: PropTypes.string,
      poster: PropTypes.string,
    }).isRequired
  ),
};
ListOfMovies.propTypes = MoviesProps;
Movies.propTypes = MoviesProps;

export default Movies;
