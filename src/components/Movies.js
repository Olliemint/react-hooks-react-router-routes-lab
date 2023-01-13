import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div className="card">
      {movies.map((movie) => (
        <div className="movie-card">
          <div className="section">
            <h4>{movie.title}</h4>
            <span>
              Duration <strong>{movie.time} Mins</strong>
            </span>
          </div>
          <div className="genres">
            {movie.genres.map((genre) => (
              <button>{genre}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
