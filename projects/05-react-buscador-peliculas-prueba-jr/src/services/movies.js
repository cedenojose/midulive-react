const API_KEY = "a792afb9";
const searchMovies = async (search) => {
  if (search === "") {
    return null;
  }

  const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
  try {
    const response = await fetch(URL_API);
    const data = await response.json();

    const movies = data.Search;

    return movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      };
    });
  } catch (error) {
    throw new Error("Error Searching movies");
  }
};

export default searchMovies;
