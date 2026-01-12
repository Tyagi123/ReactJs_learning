import React from "react";
import "../styles.css";

const getRatingClass = (rating) => {
  if (rating >= 8) return "rating-good";
  if (rating >= 5) return "rating-ok";
  return "rating-bad";
};

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title"> {movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
