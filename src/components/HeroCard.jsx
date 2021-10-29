
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApp } from '../context/ContextProvider';


const HeroCard = ({ superHero }) => {

    const { team, setTeam } = useContext(ContextApp);

    const { id, name, image, powerstats, biography } = superHero;


    console.log(team);

    const handleClick = () => {
   
        setTeam([
            ...team,
            superHero,
        ])
       
    }

    console.log(team);



    return (
        <>
            {/* <div className="container"> */}
            <div className="card" style={{ width: '18rem' }}>
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
                            <div>
                                <Link to={`./hero/${id}`}>Ver mas...</Link>
                            </div>
                            <hr />
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
