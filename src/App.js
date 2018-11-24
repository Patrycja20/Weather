import React, { Component } from 'react';
import Clouds from './Clouds.jpg';
import InfoWeather from './InfoWeather';
import City from './City';
import './Style.css';
import { changeCity } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  selectCity = (event) => {
    this.setState({ selected_city: event.target.value });
    this.props.changeCity(event.target.value);
  }

  constructor() {
    super();
    this.state = {
      cities: [
        { name: 'Warsaw', x: '52.2296465', y: '21.0087952' },
        { name: 'London', x: '51.5089147', y: '-0.1287456' },
        { name: 'Paris', x: '48.8602691', y: '2.3380865' },
        { name: 'Berlin', x: '52.5120187', y: '13.4178676' },
        { name: 'Madrid', x: '40.4043547', y: '-3.6962885' }],
      selected_city: 'Warsaw',
    }
  }

  render() {

    let city = this.state.cities.filter(value => this.state.selected_city === value.name);

    return (
      <div className="App">
        <div className="Title"><h1>What's the weather?</h1></div>
        <div className="Background" width="100%" height="30%"><img src={Clouds} className="Image" width="100%"
                                                                   height="100%"/></div>
        <div className="Package">
          <div className="Block"><City x_city={city[0].x} y_city={city[0].y} setCity={this.selectCity}/></div>
          <div className="Block">
            <div className="Info"><InfoWeather the_city={city[0].name}/></div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    changeCity: (city) => dispatch(changeCity(city)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);