import React, { useState, useEffect, use } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

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

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        let filteredMovies = data;

        if (rating !== "All Ratings") {
          if (rating === "8+") {
            filteredMovies = filteredMovies.filter(
              (movie) => movie.rating >= 8
            );
          } else if (rating === "5-7.9") {
            filteredMovies = filteredMovies.filter(
              (movie) => movie.rating >= 5 && movie.rating < 8
            );
          } else if (rating === "Below 5") {
            filteredMovies = filteredMovies.filter((movie) => movie.rating < 5);
          }
        }

        setMovies(filteredMovies);
      });
  }, [rating]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredMovies =
          genre === "All Genres"
            ? data
            : data.filter((movie) => movie.genre === genre);

        setMovies(filteredMovies);
      })
      .catch((err) => console.error("Failed to load movies.json:", err));
  }, [genre]);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All Genres">All Genres</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="All Ratings">All Ratings</option>
          <option value="8+">Good</option>
          <option value="5-7.9">Ok</option>
          <option value="Below 5">Bad</option>
        </select>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
