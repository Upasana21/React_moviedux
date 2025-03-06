import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css';

import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from "./components/Watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieID) => {
    setWatchlist(prev =>
      prev.includes(movieID) ? prev.filter(id => id !== movieID) : [...prev, movieID]
    )
  }
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />}></Route>
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />}></Route>
          </Routes>
        </Router>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
