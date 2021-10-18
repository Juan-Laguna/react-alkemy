import React from 'react';
import HeroCard from './HeroCard';
import HeroScreen from './HeroScreen'

const HeroList = ({ superHeroData }) => {

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
