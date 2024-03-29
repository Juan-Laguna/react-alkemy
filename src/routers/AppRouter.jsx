import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';
import DashboardRoute from './DashboardRoute';



const AppRouter = () => {

  return (
    // El BrowseRouter esta en el archivo index abrazando el App.js
    <div>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={DashboardRoute} />
      </Switch>
    </div>

  )
}

export default AppRouter
