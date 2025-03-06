import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css';

import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from "./components/Watchlist";

function App() {
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
            <Route path="/" element={<MoviesGrid />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
