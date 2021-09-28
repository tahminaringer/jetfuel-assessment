import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forcast.css';


const Forecast = () => {

  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  //We expect the future value to be JSON so setting the start value to empty object
  let [responseObj, setResponsObj] = useState({});
const uriEncodeCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();
    //weather data fetch fuction retrieves information from the weather API
    
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodeCity}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "8dc75344c5mshe85009142aa7aa1p1c158cjsn8838f68c04d1"
      }
    })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.error(err);
    // });
.then(response => {console.log("response", response);return response.json()})

.then(response => {
  setResponsObj(response)
})
.catch(err => {
	console.error(err);
});
}
  //renders weather data from API to page
  return (
    <div>
      <h2> Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
        type='text'
        placeholder='Enter City'
        maxLength='50'
        className={classes.textInput}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
          type='radio'
          name='units'
          checked={unit === 'metric'}
          value='metric'
          onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <label className={classes.Radio}>
          <input
          type='radio'
          name='units'
          checked={unit === 'imperial'}
          value='imperial'
          onChange={(e) => setUnit(e.target.value)}
          />
          Farenheit
        </label>
        <button className={classes.Button} type='submit'>Get Forcast</button>
      </form>
      <Conditions
        responseObj={responseObj}
        />
    </div>
    )
  }
  export default Forecast;