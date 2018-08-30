import React from "react";

class City extends React.Component {

  render() {
    let maps="https://www.google.com/maps/embed/v1/place?key=AIzaSyDn5TU07R040YBRD-9ePpM8Noh-Z1NNVyw&q="+this.props.x_city+","+this.props.y_city+"&zoom=10";

    return <div> City: <select onChange={this.props.setCity}>
      <option value="London">London</option>
      <option value="Warsaw" selected>Warsaw</option>
      <option value="Paris">Paris</option>
      <option value="Berlin">Berlin</option>
      <option value="Madrid">Madrid</option>
    </select> <br/><br/>
        <iframe src={maps} width="300" height="370" frameborder="1"></iframe>
    </div>
  }
}

export default City;