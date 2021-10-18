import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import HeroList from './components/HeroList';
import AppRouter from './routers/AppRouter';
import HeroScreen from './components/HeroScreen';


const App = () => {

  const [searchText, setsearchText] = useState('');
  const [superHeroData, setsuperHeroData] = useState([]);

  const token = 10158842005488462;

  // const searchSuperHeroes = async () => {
  //     const response = await fetch(`https://superheroapi.com/api/${token}/search/${searchText}`)
  //     const data = await response.json()
  //     console.log(data);

  //     setsuperHeroData(data.results)
  // }

  const searchSuperHeroes = async () => {
    const response = await axios.get(`https://superheroapi.com/api/${token}/search/${searchText}`)
    // console.log(response.data.results)
    setsuperHeroData(response.data.results)
  }


  const onChange = e => {
    const searchTerm = e.target.value

    setsearchText(searchTerm);

    if (searchTerm.length < 3) {
      setsuperHeroData([]);
    }

    if (searchText.length > 3) {
      searchSuperHeroes();
    }
  }

  

  return (
    <div>
      <AppRouter onChange={onChange} searchText={searchText} />
      <HeroList
        superHeroData={superHeroData}
      />
      {/* <HeroScreen 
          superHeroData={superHeroData}
      /> */}
    </div>
  )
}

export default App
