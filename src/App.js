import React from 'react';

import WeatherEngine from './components/WeatherEngine'

import './App.css';

function App() {

  
  return (
    <div className="App">
      <WeatherEngine location="sydney" />
      <WeatherEngine location="Dhaka" />
      <WeatherEngine location="oymyakon" />
      <WeatherEngine location="riyad" />
    </div>
  );
}

export default App;
