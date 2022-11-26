import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './PokemonDetails.module.css';

const PokemonDetails = () => {

    const params = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            })
    }, [params.pokemonName]);

    console.log(pokemon);

    return (
        <>
        
            {pokemon != null && <div className={classes.container + ' ' + classes.content}>
                <div className={classes['details-header']}>
                    <img src={pokemon.sprites.other.home.front_default} alt='Pokemon' />
                    <h1>{pokemon.name}</h1>
                    <p>#{pokemon.id}</p>
                    <ul className={classes['pokemon-type']}>
                        {pokemon.types.map((type) => { return <li key={type.type.name}>{type.type.name}</li>})}
                    </ul>
                </div>
                <div className={classes['pokemon-section']}>
                    <h3>Stats</h3>
                    <ul>
                        {pokemon.stats.map((stat) => { return <li key={stat.stat.name}>{stat.stat.name.toUpperCase()}: {stat.base_stat}</li>})}
                    </ul>
                </div>
            </div>}
        </>
    );
};

export default PokemonDetails;