import classes from './PokemonDetails.module.css';

const PokemonDetails = () => {
    return (
        <>
            <div className='details-header'>
                <img src='' alt='Pokemon' />
                <h1>Pokemon name</h1>
                <ul className='pokemon-type'>
                    <li>Type</li>
                    <li>Type</li>
                    <li>Type</li>
                </ul>
                <p>Pokemon number</p>
            </div>
        </>
    );
};

export default PokemonDetails;