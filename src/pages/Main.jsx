import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const UNFILTERED =
  "https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f";

const FILTERED =
  "https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query=";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(FILTERED + searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    getMovies(UNFILTERED);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <input
          className="search-input"
          type="searc"
          placeholder="Search a movie.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="btn btn-primary" type="submit" value="Search">
          Search
        </button>
      </form>
      <div className="movie-container">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
