import React from 'react';
let key = '99f06dadf9df372df9f8e5049250a3e0';

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            temp: '',
            longitude: props.longitude,
            latitude: props.latitude
        };
    }

    componentsDidMount() {
        console.log(this.state.latitude)
        console.log(this.state.longitude)
        fetch (`api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${key}`)
        .then(res => {
            res.json()
        })
        .then(json => {
            console.log(json)
        });
    }

    render() {
        return(
            <div>
                <p></p>
            </div>
        );
    }
}