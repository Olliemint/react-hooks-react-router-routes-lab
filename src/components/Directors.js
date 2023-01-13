import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div className="card">
      {directors.map((director) => (
        <div className="movie-card">
          <div className="section">
            <h4>{director.name}</h4>
            
          </div>
          <div className="genres">
            {director.movies.map((movie) => (
              <button>{movie}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Directors;
