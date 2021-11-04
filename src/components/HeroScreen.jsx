import React, { useContext } from 'react'
import { Redirect, useParams } from 'react-router'
import { ContextApp } from '../context/ContextProvider';
import HeroSearch from '../components/HeroSearch';


const HeroScreen = ({ history }) => {

    const { superHeroData, setsuperHeroData } = useContext(ContextApp)

    const { heroId } = useParams();
    console.log(heroId);

    const getHeroById = id => {
        return superHeroData.find(hero => hero.id === id);
    }

    const hero = getHeroById(heroId);

    if (!hero) {
        return <Redirect to="/" />
    }


    const { name, image, powerstats, biography } = hero;
    console.log(hero);


    const handleReturn = () => {
        // Validacion para que no me saque fuera de la aplicacion si pegamos una ruta en el navedador
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={image.url}
                    className="img-thumbnail"
                    alt={name}
                />
            </div>

            <div className="col-8">
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alineacion: </b>{biography.alignment}</li>
                    <li className="list-group-item"><b>Editora: </b> {biography.publisher}</li>
                    <li className="list-group-item"><b>Aliados: </b> {biography.aliases}</li>
                </ul>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Volver
                </button>
            </div>
        </div>
    )
}

export default HeroScreen
