import FormSearcher from '../Layout/FormSearcher';
import PokemonCard from '../UI/PokemonCard/PokemonCard';
import classes from './MainPage.module.css';

const MainPage = (props) => {

    return (
        <>
            <div className={classes.hero}>
                <div className={classes['hero-content']}>
                    <h1>Search information about your favorite pokemon</h1>
                    <FormSearcher id='hero-searcher' />
                </div>
            </div>
            <h1 className={classes['section-title']}>Try it with the unforgetable initial pokemons</h1>
            <div className={classes['pokemon-cards']}>
                <PokemonCard
                    pokemon-img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'
                    bg-color='bg-grass'
                    pokemon-name='Bulbasaur'
                />
                <PokemonCard
                    pokemon-img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png'
                    bg-color='bg-fire'
                    pokemon-name='Charmander'
                />
                <PokemonCard
                    pokemon-img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png'
                    bg-color='bg-water'
                    pokemon-name='Squirtle'
                />
            </div>
        </>
    );
};

export default MainPage;