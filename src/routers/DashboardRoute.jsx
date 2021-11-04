import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import NavBar from '../components/NavBar';
import HeroScreen from '../components/HeroScreen';
import HeroSearch from '../components/HeroSearch';
import Home from '../components/Home';



const DashboardRoute = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/herosearch" component={HeroSearch} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoute
