import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";
import AuthContext from "../contexts/AuthContext";

const UNFILTERED = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

const FILTERED = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;

export default function Main() {
  let content;
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  let searchBtn;
  const { login } = useContext(AuthContext);

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

  login
    ? (searchBtn = "btn btn-outline-secondary font-weight-bold ")
    : (searchBtn = "btn btn-outline-primary");

  const handleSubmit = (e) => {
    e.preventDefault();

    login
      ? getMovies(FILTERED + searchTerm)
      : alert("Please log in to make a search");

    setSearchTerm("");
  };

  useEffect(() => {
    getMovies(UNFILTERED);
  }, []);

  if (loading) {
    content = <Loading />;
  } else if (notFound) {
    content = <NotFound />;
  } else {
    content = (
      <div className="movie-container">
        {movies.map((movie) => (
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

        <button className={searchBtn} type="submit" value="Search">
          Search
        </button>
      </form>
      {content}
    </React.Fragment>
  );
}

// REACT_APP_API_KEY=cb3474c672bd70d204dd4ab6d178f560
