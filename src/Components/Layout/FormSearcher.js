import { useEffect, useState } from 'react';
import './FormSearcher.module.css';

const FormSearcher = (props) => {

    const [allPokemons, setAllPokemons] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0')
            .then((response) => response.json())
            .then((data) => {
                setAllPokemons(data);
            })
    }, []);

    console.log(allPokemons);

    return (
        <form>
            <input list={props.id} type='text' placeholder='Type a pokemon name here' />
            <button type='submit'>Search</button>

            <datalist id={props.id}>
                {allPokemons != null ? allPokemons.results.map((pkmn) => {
                    return (
                        <option key={pkmn.name} value={pkmn.name} />
                    );
                }) : null}
            </datalist>
        </form>
    );
};

export default FormSearcher;