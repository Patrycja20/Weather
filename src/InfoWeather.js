import React from "react";



fetch('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=1bb722974d0bd948183d73bdff9c8456&units=metric')
  .then(resp => {
    resp.json()
      .then(json => {  console.log(json.main.temp);})
  })

class InfoWeather extends React.Component {
  render() {
    return <div>Weather information<br/>

    </div>
  }
}

export default InfoWeather;