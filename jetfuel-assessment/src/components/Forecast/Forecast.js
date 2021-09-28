import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

  //We expect the future value to be JSON so setting the start value to empty object
  let [responseObj, setResponsObj] = useState({});
  function getForecast() {
    //weather data fetch fuction retrieves information from the weather API
    
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle%2C%20USA&lang=null&units=imperial", {
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
      {/* <div>
        {JSON.stringify(responseObj)}
      </div> */}
      <button onClick={getForecast}>Get Forcast</button>
      <Conditions
        responseObj={responseObj}
        />
    </div>
    )
  }
  export default Forecast;