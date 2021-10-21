import react, {useState} from 'react';
import { createContext } from 'react';
import axios from 'axios';

// Crear el Context
export const ContextApp = createContext();

// Provider donde se encuentran las funciones y state
const Provider = (props) => {

    // Crear el state del context
    const [searchText, setsearchText] = useState('');
    const [superHeroData, setsuperHeroData] = useState([]);

   const [team, setteam] = useState([]);

    
    const token = 10158842005488462;

    const searchSuperHeroes = async () => {
        const response = await axios.get(`https://superheroapi.com/api/${token}/search/${searchText}`)
        // console.log(response.data.results)
        setsuperHeroData(response.data.results)
    }


    const onChange = e => {
        const searchTerm = e.target.value

        setsearchText(searchTerm);

        if (searchTerm.length < 3) {
            setsuperHeroData([]);
        }

        if (searchText.length > 3) {
            searchSuperHeroes();
        }
    }



    return (
        <ContextApp.Provider
            value={{
                onChange,
                searchText,
                superHeroData,
                team,
                setteam
            }}
        >
            {props.children}
        </ContextApp.Provider>
    )
}

export default Provider;