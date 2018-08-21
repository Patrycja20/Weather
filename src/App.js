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
        <div className="Background" width="100%" height="30%"><img src={Clouds}  className="Image" width="100%" height="100%"/></div>
        <div className="Package"><div className="Block"><City/></div><div className="Block"><Precipitation/></div><div className="Block"><Temperature/></div></div>

      </div>
    );
  }
}

export default App;
