import classes from './PokemonCard.module.css';

const PokemonCard = (props) => {
    return (
        <div className={classes['pokemon-card'] + ' ' + classes[props['bg-color']]}>
            <div className='content-center'>
                <img src={props["pokemon-img"]} alt='Pokemon image'/>
            </div>
            <div className='content-center'>
                <h2>{props['pokemon-name']}</h2>
                <a href='#'>More Info</a>
            </div>
        </div>
    );
};

export default PokemonCard;