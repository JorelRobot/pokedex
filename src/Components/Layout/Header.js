import FormSearcher from './FormSearcher';
import classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes['main-header']}>
            <div className={classes['header-logo']}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"}
                    alt="Page" />
                <h1>Pokedex</h1>
            </div>
            <FormSearcher />
        </header>
    );
};

export default Header;