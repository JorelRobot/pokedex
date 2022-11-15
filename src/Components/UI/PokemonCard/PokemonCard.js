import classes from './PokemonCard.module.css';

const PokemonCard = (props) => {
    return (
        <div className={classes['pokemon-card'] + ' ' + classes[props['bg-color']]}>
            <div className={classes['content-center']}>
                <img src={props['pokemon-img']} alt="The choosen pokemon"/>
            </div>
            <div className={classes['content-center']}>
                <h2>{props['pokemon-name']}</h2>
                <a href='www.google.com'>More Info</a>
            </div>
        </div>
    );
};

export default PokemonCard;