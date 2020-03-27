import React, { Component } from 'react';
import Zomato from './component/Zomato/Zomato'
import Nasa from './component/NasaAPI/Nasa'
import Weather from './component/WeatherAPI/Weather'

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
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
        <AppBar position="static">
          <Toolbar className="toolbar">
          <Typography variant="h6" className="headerType">
            Geo-location App
            </Typography>
            <Button id="location" variant="contained" color="secondary" onClick={this.geolocation}>Show my location</Button>
           
            {/* <p>Your Location is {this.state.latitude} & {this.state.longitude}</p> */}
          </Toolbar> 
        </AppBar>
          <div className="bodyBlock">
            <Zomato latitude={this.state.latitude} longitude={this.state.longitude} />
            <Weather latitude={this.state.latitude} longitude={this.state.longitude} />
            <Nasa latitude={this.state.latitude} longitude={this.state.longitude} />
        </div>
      </div>
    );
  }
}

  export default App;
