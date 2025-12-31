import React, { useState, useEffect, use } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      fetch("movies.json")
        .then((response) => response.json())
        .then((data) => setMovies(data));
    } else {
      fetch("movies.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredMovies = data.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setMovies(filteredMovies);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
