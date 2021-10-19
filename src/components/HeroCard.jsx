
import React, { useState } from 'react';


const HeroCard = ({ superHero }) => {

    const { id, name, image, powerstats, biography } = superHero;

    const [team, setteam] = useState([]);

    const handleClick = () => {

        // console.log(`id${id}, nombre:${name}`);
        // const currentSuperHero = superHero ;
        // debugger
        setteam(
           [...team,
            team
           ])

        console.log(superHero);
    }

    return (
        <>
            {/* <div className="container"> */}
            <div className="row row-cols-1 row-cols-md-2 g-4" >
                <div className="col">

                    <img src={image.url} className="card-img-top" alt="superHero" />

                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Strengh: {powerstats.strength}</li>
                            <li className="list-group-item">Speed: {powerstats.speed}</li>
                            <li className="list-group-item">Power: {powerstats.power}</li>
                            <li className="list-group-item">Publisher: {biography.publisher}</li>
                        </ul>
                        <div className="card-body">
                            <button
                                className="btn btn-danger"
                                onClick={handleClick}
                            >
                                Agregar al equipo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default HeroCard
