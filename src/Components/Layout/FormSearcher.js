import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormSearcher.module.css';

const FormSearcher = (props) => {

    const [allPokemons, setAllPokemons] = useState(null);
    const pokemonToSearch = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0')
            .then((response) => response.json())
            .then((data) => {
                setAllPokemons(data);
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        let pokemonObject = allPokemons.results.find(pkmn => pkmn.name === pokemonToSearch.current.value);

        if (pokemonObject != null) {
            navigate(`/pokemon-details/${pokemonObject.name}`);
        } else {
            navigate('/pokemon-not-found');
        }
        
    };


    //console.log(allPokemons);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input list={props.id} type='text' ref={pokemonToSearch} placeholder='Type a pokemon name here' />
                <button type='submit'>Search</button>
            </form>

            <datalist id={props.id}>
                {allPokemons != null ? allPokemons.results.map((pkmn) => {
                    return (
                        <option key={pkmn.name} value={pkmn.name} />
                    );
                }) : null}
            </datalist>
        </>
    );
};

export default FormSearcher;