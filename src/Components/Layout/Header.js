import { Link } from 'react-router-dom';
import FormSearcher from './FormSearcher';
import classes from './Header.module.css';

const Header = (props) => {

    return (
        <header className={classes['main-header']}>
            <Link to="/" className={classes['header-logo']}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"}
                    alt="Page" />
                <h1>Pokedex</h1>
            </Link>
            <FormSearcher id='header-searcher' />
        </header>
    );
};

export default Header;