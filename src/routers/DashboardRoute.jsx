import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import HeroScreen from '../components/HeroScreen';


const DashboardRoute = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoute
