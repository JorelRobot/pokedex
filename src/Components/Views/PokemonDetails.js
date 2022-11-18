import classes from './PokemonDetails.module.css';

const PokemonDetails = () => {
    return (
        <>
            <div className={classes.container + ' ' + classes['details-header']}>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png' alt='Pokemon' />
                <h1>Pikachu</h1>
                <p>#25</p>
                <ul className={classes['pokemon-type']}>
                    <li>Type</li>
                    <li>Type</li>
                    <li>Type</li>
                </ul>
                <div className={classes['pokemon-section']}>
                    <h3>Moves</h3>
                    <ul>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                        <li>Move X</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PokemonDetails;