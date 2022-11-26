import { Link } from 'react-router-dom';
import classes from './PokemonCard.module.css';

const PokemonCard = (props) => {
    return (
        <div className={classes['pokemon-card'] + ' ' + classes[props['bg-color']]}>
            <div className={classes['content-center']}>
                <img src={props['pokemon-img']} alt="The choosen pokemon"/>
            </div>
            <div className={classes['content-center']}>
                <h2>{props['pokemon-name']}</h2>
                <Link to={`/pokemon-details/${props['pokemon-name'].toLowerCase()}`}>More Info</Link>
            </div>
        </div>
    );
};

export default PokemonCard;