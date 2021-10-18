import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';
import HeroSearch from '../components/HeroSearch';
import NotFoundPage from '../components/NotFoundPage';
import DashboardRoute from './DashboardRoute';
import HeroCard from '../components/HeroCard';


const AppRouter = ({ onChange, searchText }) => {
  return (
    // El BrowseRouter esta en el archivo index abrazando el App.js
    <div>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/herosearch"> <HeroSearch onChange={onChange} searchText={searchText} /></Route>
        <Route path="/" component={DashboardRoute} />
      </Switch>
    </div>

  )
}

export default AppRouter
