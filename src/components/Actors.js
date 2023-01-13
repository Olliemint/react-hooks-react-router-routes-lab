import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div className="card">
      {actors.map((actor) => (
        <div className="movie-card">
          <div className="section">
            <h4>{actor.name}</h4>
          </div>
          <div className="genres">
            {actor.movies.map((movie) => (
              <button>{movie}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Actors;
