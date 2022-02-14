import React from "react";
import Overview from "../pages/Overview";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function MovieCard({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
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
        <p>{overview}</p>
        <h5>Release Date : {release_date}</h5>
      </div>
    </div>
  );
}
