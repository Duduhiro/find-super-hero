import './App.css';
import './reset.css';
import React, { useState, useEffect } from 'react';
import { fetchSH } from './SearchHero';

function App() {
  return (
    <div className="d-flex wrapper">
      <Search />
      <Card />
    </div>
  );
}

function Search(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Call the fetchSH function with the inputValue
  };

  return(
    <div className="d-flex search-div">
      <div className="d-flex search">
        <h1>Search a hero</h1>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search" />
      </div>
      <button onClick={handleButtonClick} className="find-button">Find</button>   
    </div>
  );
}

function Card() {

  const [stats, setStats] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  });

  // Fetch data using fetchSH and update stats state accordingly

  const fetchData = async () => {
    try {
      const data = await fetchSH('batman'); // Assuming fetchSH returns an object with stat values
      setStats(data.results[0].powerstats); // Update stats state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts (or based on your logic)
  }, []);

  return(
    <div className="card">
      <div className="d-flex card-header">
        <p className="id">1</p>
        <p>Batman</p>
      </div>
      <div className="d-flex hero-infos">
        <div className="hero-img">
          <img src="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/639.jpg" alt="sei la"/>
        </div>
        <div className="d-flex hero-stats">
          <Stat statName="Intelligence" statPercent={stats.intelligence} statColor="red" />
          <Stat statName="Strength" statPercent={stats.strength} statColor="green" />
          <Stat statName="Speed" statPercent={stats.speed} statColor="yellow" />
          <Stat statName="Durability" statPercent={stats.durability} statColor="purple" />
          <Stat statName="Power" statPercent={stats.power} statColor="pink" />
          <Stat statName="Combat" statPercent={stats.combat} statColor="blue" />
        </div>
      </div>
    </div>
  );
}

function Stat(props) {
  
  return(
    <div className="stat">
      <p>{ props.statName }</p>
      <div className="bar">
        <div style={{width:props.statPercent + '%', backgroundColor:props.statColor}} className="bar-filler">
        </div>
      </div>
    </div>
  );
}

export default App;
