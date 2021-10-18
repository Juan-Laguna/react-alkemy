import React from 'react'
import { useParams } from 'react-router'

const HeroScreen = ({ superHeroData }) => {
    
    const { heroId } = useParams();


    if (superHeroData.length > 3) {
       
        
        const getHeroById = id => {
            return superHeroData.find(hero => hero.id === id);
        }

        const hero = getHeroById(heroId)
        
        console.log(hero);
    
    } else {
        return null
    }



   




    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}

export default HeroScreen
