import React, { Component } from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      latitude: '',
      longitude: '' 
    };
    this.geolocation = this.geolocation.bind(this);
  }

  geolocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
      let coords = position.coords
      console.log('Your current position is:');
      console.log(`Latitude : ${coords.latitude}`);
      console.log(`Longitude: ${coords.longitude}`);
      this.setState({ 
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    })
}
 
  render() {
    return (
      <div className="App">
       <h1>GeoLocation App</h1>
       <button id="location" onClick={this.geolocation}>Show my location</button><br/>
          <p>The Location IS {this.state.latitude} & {this.state.longitude}</p>
          
      </div>
    );
  }
}

  export default App;
