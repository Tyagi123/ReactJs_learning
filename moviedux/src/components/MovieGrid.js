import React, { useState, useEffect, use } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  const [genre, setGenre] = useState("All Genres");
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState("All Ratings"); // fixed

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const onChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const onChangeRating = (e) => {
    setRating(e.target.value);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    if (rating === "All Ratings") return true;
    if (rating === "8+") return movie.rating >= 8;
    if (rating === "5-7.9") return movie.rating >= 5 && movie.rating < 8;
    if (rating === "Below 5") return movie.rating < 5;
    return false;
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterdMovies = movies
    .filter((movie) => matchesGenre(movie, genre))
    .filter((movie) => matchesRating(movie, rating))
    .filter((movie) => matchesSearchTerm(movie, searchTerm));

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchTerm}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <select
            name="Genre"
            value={genre}
            onChange={onChangeGenre}
            className="filter-dropdown"
          >
            <option value="All Genres">All Genres</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
          </select>
        </div>

        <div className="filter-slot">
          <select
            value={rating}
            onChange={onChangeRating}
            className="filter-dropdown"
          >
            <option value="All Ratings">All Ratings</option>
            <option value="8+">Good</option>
            <option value="5-7.9">Ok</option>
            <option value="Below 5">Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filterdMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
