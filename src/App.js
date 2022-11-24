import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import MainPage from './Components/Views/MainPage';
import PokemonDetails from './Components/Views/PokemonDetails';

function App() {

  return (
    <BrowserRouter >
      <Header />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/pokemon-details/:pokemonName' element={<PokemonDetails />} />
        <Route path='/pokemon-not-found' element={<h1>No existe ese pokemon :/</h1>} />
        <Route path='*' element={<h1>Error 404 - NOT FOUND :\</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
