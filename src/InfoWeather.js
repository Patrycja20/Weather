import React from "react";


class InfoWeather extends React.Component {

  constructor(){
    super();
    this.state = { data: null};
  }
  componentDidMount(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.props.the_city+'&APPID=1bb722974d0bd948183d73bdff9c8456&units=metric')
      .then(resp => {
        resp.json()
          .then(json => {
            console.log(json);
            this.setState({data: json}

            )})
      })
  }
  componentWillReceiveProps(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.props.the_city+'&APPID=1bb722974d0bd948183d73bdff9c8456&units=metric')
    .then(resp => {
      resp.json()
        .then(json => {
          console.log(json);
          this.setState({data: json}

          )})
    })
}

  render() {
    if(this.state.data === null) {
      return <div>Loading...</div>
    }

    return <div>Weather information<br/><br/>
      <div className="Temperature">{this.state.data.main.temp}&deg;C<br/>
      </div><div className="Partition">Partition:
      <img src={`http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`} alt='' height="75" width="75"/>
      </div>
    </div>
  }
}

export default InfoWeather;