import React from 'react';
import WeatherCard from './components/WeatherCard/Component'

import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-5}/>
      <WeatherCard temp={-10}/>
      <WeatherCard temp="40"/>
    </div>
  );
}

export default App;
