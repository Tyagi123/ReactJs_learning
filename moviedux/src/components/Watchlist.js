import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, tooggleWatchlist }) {
  return (
    <div>
      <h1 className="title"> Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((movieId) => {
          const movie = movies.find((m) => m.id === movieId);
          return (
            <MovieCard
              movie={movie}
              key={movieId}
              tooggleWatchlist={tooggleWatchlist}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
