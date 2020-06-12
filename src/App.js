import React, {useState, useEffect} from 'react';
import WeatherCard from './components/WeatherCard/Component'

import './App.css';

function App() {

  const[query, setQuery] = useState('london, gb')
  const[weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  })
 

  const data = async(q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=70874bf3c19c9eb4e8a7483d70f2d1e9`
    );
    const resJSON = await apiRes.json();
    return resJSON
  }
  const handleSearch= e =>{
    e.preventDefault()
    data(query).then(res => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    })
  }

    useEffect(() => {
      data(query).then((res) => {
        setWeather({
          temp: res.main.temp,
          city: res.name,
          condition: res.weather[0].main,
          country: res.sys.country,
        });
      });
    }, []);

  return (
    <div className="App">
      <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country} />
      <form action="">
        <input value={query} onChange={e => setQuery(e.target.value)}/>
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
