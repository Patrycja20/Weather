import React from "react";

class City extends React.Component {

  render() {
    return <div> City: <select id="city">
      <option value="l">London</option>
      <option value="w" selecte>Warsaw</option>
      <option value="p">Paris</option>
      <option value="b">Berlin</option>
      <option value="m">Madrid</option>
    </select> <br/><br/>
      <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312779.9431310756!2d20.781016711291045!3d52.232606289062204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1534881905344'} width="300" height="350"></iframe>
    </div>
  }
}

export default City;