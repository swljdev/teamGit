import React from 'react';
import { responsiveFontSizes } from '@material-ui/core';
let key = '99f06dadf9df372df9f8e5049250a3e0';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            temp: '',
          
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.latitude !== prevProps.latitude) {
        console.log(this.props.latitude)
        console.log(this.props.longitude)
              
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=${key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
            .catch(error => console.log('error', error));
        
    }}

render() {
    return (
        <p></p>
    )
}
}
