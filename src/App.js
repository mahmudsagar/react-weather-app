import React from 'react';
import WeatherCard from './components/WeatherCard/Component'

import './App.css';

function App() {

  return (
    <div className="App">
      <WeatherCard temp={-20} condition="Clear" city="New York" country="USA" />
      <WeatherCard temp={15} condition="Cloudy" city="Sydney" country="AU" />
      <WeatherCard temp={40} condition="Tornado" city="London" country="UK" />
    </div>
  );
}

export default App;
