import React, { useContext } from 'react';
import { ContextApp } from '../context/ContextProvider';
import HeroCard from './HeroCard';


const HeroList = () => {

    const { superHeroData } = useContext(ContextApp);

    return (
        <div className="row">
            <h1>Super Heroes</h1>
            <hr />
            {superHeroData.map(superHero => (
                <>
                    {/* {console.log(superHero)} */}
                    <HeroCard
                        key={superHero.id}
                        superHero={superHero}
                    />

                </>
            ))}
        </div>
    )
}

export default HeroList;
