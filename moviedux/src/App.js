import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect, use } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const tooggleWatchlist = (movieId) => {
    if (watchlist.includes(movieId)) {
      setWatchlist(watchlist.filter((id) => id !== movieId));
    } else {
      setWatchlist([...watchlist, movieId]);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header> </Header>
        <Router>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  movies={movies}
                  watchlist={watchlist}
                  tooggleWatchlist={tooggleWatchlist}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  tooggleWatchlist={tooggleWatchlist}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default App;
