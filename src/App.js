import { useState } from 'react';
import './App.css';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import MainPage from './Components/Views/MainPage';
import PokemonDetails from './Components/Views/PokemonDetails';

function App() {

  const [view, setView] = useState('index');
  const [pokemonUrl, setPokemonUrl] = useState('');

  const handleSearchPokemon = (pkmnUrl) => {
    if (pkmnUrl != null) {
      setPokemonUrl(pkmnUrl);
      setView('pokemon-details');
    } else {
      setPokemonUrl('');
      setView('pokemon-not-found');
    }
  };

  const changeView = (v) => {
    switch (view) {
      case 'index':
        return <MainPage onSearchPokemon={handleSearchPokemon} />
      case 'pokemon-details':
        return <PokemonDetails url={pokemonUrl} />
      case 'pokemon-not-found':
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header onSearchPokemon={handleSearchPokemon} />
      <main>
        {changeView(view)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
