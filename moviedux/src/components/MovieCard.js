import React from "react";
import "../styles.css";

const getRatingClass = (rating) => {
  if (rating >= 8) return "rating-good";
  if (rating >= 5) return "rating-ok";
  return "rating-bad";
};

export default function MovieCard({ movie, isWatchlisted, tooggleWatchlist }) {
  const [genre, setGenre] = React.useState("All Genres");
  const [rating, setRating] = React.useState("All Ratings");

  return (
    <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title"> {movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => tooggleWatchlist(movie.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
