import './FormSearcher.module.css';

const FormSearcher = () => {
    
    return (
        <form>
            <input type='text' placeholder='Type a pokemon name here' />
            <button type='submit'>Search</button>
        </form>
    );
};

export default FormSearcher;