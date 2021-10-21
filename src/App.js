import React from 'react';
import Provider from './context/ContextProvider';

import HeroList from './components/HeroList';
import AppRouter from './routers/AppRouter';



const App = () => {



  return (
    <Provider>
      <AppRouter />
      <HeroList />
    </Provider>
  )
}

export default App
