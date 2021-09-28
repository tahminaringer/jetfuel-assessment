import React from "react";


//accessing data from the responseObj inside the props obj
// only diplay if response is 200 otherwise dispay error
const Conditions = (props) => {
  return (
    // JSON.stringify(props.responseObj)
    <div>
      {props.responseObj.cod !== undefined ?
        <div>
          {console.log("console logging props",props)}
          <p><strong>{props.responseObj.name}</strong></p>
          <p> It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
        </div>
      : null  
      }
    </div>
  )
}

export default Conditions;
