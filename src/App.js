import React, { Component } from 'react';
import Clouds from './Clouds.jpg';
import Temperature from './Temperature';
import Precipitation from './Precipitation';
import City from './City';
import './Style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Title"><h1>What's the weather?</h1></div>
        <img src={Clouds}  className="Image" width="100%" height="30%"/>
        <table><tr><td>Temperature</td><td>Precipitation</td><td>City</td></tr>
          <tr><td><Temperature/></td><td><Precipitation/></td><td><City/></td></tr></table>
      </div>
    );
  }
}

export default App;
