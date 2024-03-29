import React, {useContext} from 'react';
import { ContextApp } from '../context/ContextProvider';

const HeroSearch = () => {

    const {onChange, searchText} = useContext(ContextApp);

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Ingresa el nombre del SuperHeroe" 
                            aria-label="Search" 
                            onChange={onChange}
                            value={searchText}
                        />
                        <button className ="btn btn-outline-success" type ="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default HeroSearch;
  