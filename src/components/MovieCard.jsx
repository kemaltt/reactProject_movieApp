import React, { useContext } from "react";
import Overview from "../pages/Overview";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function MovieCard({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  key,
}) {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTrailer = () => {
    if (login) {
      navigate("/overview");
    } else {
      alert("Please log in to make a search");
    }
  };
  return (
    <div className="movie">
      <a className=" text-decoration-none" href="/overview ">
        <img src={IMG_API + poster_path} alt="" />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)} `}>
            {vote_average}
          </span>
        </div>
      </a>

      <div className="movie-over">
        <h2> {title}</h2>
        <h5>
          <a
            className="trailer"
            onClick={handleTrailer}
            target="_blank"
            rel="noreferrer"
          >
            Watch the Trailer
          </a>
        </h5>
        <p>{overview}</p>
        <h5>Release Date : {release_date}</h5>
      </div>
    </div>
  );
}
