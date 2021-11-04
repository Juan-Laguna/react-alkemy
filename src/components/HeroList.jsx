import React, { useContext } from 'react';
import { ContextApp } from '../context/ContextProvider';
import HeroCard from './HeroCard';


const HeroList = () => {

    const { superHeroData } = useContext(ContextApp);

    return (
        <div className="row">
            {
                superHeroData.map(superHero => (
                    <HeroCard
                        key={superHero.id}
                        superHero={superHero}
                    />
                ))
            }
        </div>
    )
}

export default HeroList;
