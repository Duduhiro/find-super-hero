import React, { useState } from 'react';
import './reset.css'
import './index.css'
import './App.css';
import { fetchSH } from './SearchHero';

function App() {
  
  return (
    <>
      <SuperHeroCard />
    </>
  );
}

function SuperHeroCard(props) {
  const [hero, setHero] = useState(
    {
      'id': 0,
      'name': '',
      'intelligence': '0',
      'strength': '0',
      'speed': '0',
      'durability': '0',
      'power': '0',
      'combat': '0',
      'image': ''
    }
  )

  let superHeroName = ''

  const handleInputChange = (event) => {
    superHeroName = (event.target.value);
  }

  const findHero = async () => {
    const stats = await fetchSH(superHeroName);
    if (stats.response === 'error') {
      alert('Hero not found');
      return;
    }
    setHero({
      'id': stats.results[0].id,
      'name': stats.results[0].name,
      'intelligence': stats.results[0].powerstats.intelligence,
      'strength': stats.results[0].powerstats.strength,
      'speed': stats.results[0].powerstats.speed,
      'durability': stats.results[0].powerstats.durability,
      'power': stats.results[0].powerstats.power,
      'combat': stats.results[0].powerstats.combat,
      'image': stats.results[0].image.url
    });
  }

  return (
    <div className='app'>
      <div>
        <input id="heroInput" placeholder='Find Super Hero' onChange={handleInputChange} type='text' ref={props.inputRef} />
        <button id="findSH-button" onClick={() => findHero()}>Find</button>
      </div>
      <Card hero={hero} />
    </div>
    
  );
}

function Card(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        <p className='hero-id'>{props.hero.id}</p>
        <p>{props.hero.name}</p>
      </div>
      <div className='card-info'>
        <div className='hero-img-wrapper'>
          <img src={props.hero.image} alt='hero-img'/>
        </div>
        <div className='hero-stats'>
          <Stat statName="Intelligence" width={props.hero.intelligence} />
          <Stat statName="Strength" width={props.hero.strength} color="green" />
          <Stat statName="Speed" width={props.hero.speed} color="yellow" />
          <Stat statName="Durability" width={props.hero.durability} color="pink" />
          <Stat statName="Power" width={props.hero.power} color="blue" />
          <Stat statName="Combat" width={props.hero.combat} color="purple" />
        </div>
      </div>
    </div>
  );
}

function Stat(props) {
  return (
    <div className='stat'>
      <p>{props.statName}</p>
      <div className='out-bar'>
        <div className='filler' style={{width: props.width + '%', backgroundColor: props.color}}></div>
      </div>
    </div>
  );
}

export default App;