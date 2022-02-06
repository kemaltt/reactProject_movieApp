import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";

const UNFILTERED = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

const FILTERED = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;

export default function Main() {
  let content;
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        setMovies(res.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 700);
        if (res.data.results.length == 0) {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(FILTERED + searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    getMovies(UNFILTERED);
    console.log(process.env.REACT_APP_API_KEY);
  }, []);

  if (loading) {
    content = <Loading />;
  } else if (notFound) {
    content = <NotFound />;
  } else {
    content = (
      <div className="movie-container">
        {movies.map((movie) => (
          //console.log(movie);
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            overview={movie.overview}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </div>
    );
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="search">
        <input
          className="search-input"
          type="searc"
          placeholder=" Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="btn btn-outline-primary"
          type="submit"
          value="Search"
        >
          Search
        </button>
      </form>
      {content}
    </React.Fragment>
  );
}
