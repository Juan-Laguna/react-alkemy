import React, {useContext} from 'react';
import { ContextApp } from '../context/ContextProvider';
import {useParams, Redirect} from 'react-router-dom';


const HeroScreen = () => {
    
    const {superHeroData} = useContext(ContextApp);
    
    const getHeroById = id => {
    
        return superHeroData.find( hero => hero.id === id);
    }

    const {heroId} = useParams();
    
    const hero = getHeroById(heroId);

    if(!hero) {
        return <Redirect to="/" />
    }
  
    // const {id, name, image, powerstats, biography} = hero;

    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}

export default HeroScreen
