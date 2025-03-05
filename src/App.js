import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid'
import './styles.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
