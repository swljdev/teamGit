import React from 'react';
import { responsiveFontSizes } from '@material-ui/core';
let key = '99f06dadf9df372df9f8e5049250a3e0';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.handleMetricClick = this.handleMetricClick.bind(this);
        this.handleImperialClick = this.handleImperialClick.bind(this);
        this.state = {
            isMetric: true,
            isLoading: false,
            units: 'metric',
            temp: '',
            feels_like: '',
            temp_min: '',
            temp_max: '',
        };
        this.handleUnitChange = this.handleUnitChange.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.latitude !== prevProps.latitude) {
        console.log(this.props.latitude)
        console.log(this.props.longitude)
              
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=${key}&units=metric`)
            .then(response => response.json())
            .then(json => {
                // console.log(json.main)
                this.setState({
                    isLoading: false,
                    temp: json.main.temp,
                    feels_like: json.main.feels_like,
                    temp_min: json.main.temp_min,
                    temp_max: json.main.temp_max,

            })
        })
            .catch(error => console.log('error', error));
    }}

    handleMetricClick() {
        this.setState({isMetric: true});
    }

    handleImperialClick() {
        this.setState({isMetric: false});
    }

    handleUnitChange() {
        if (this.state.units === 'metric'){
            let newTemp = (this.state.temp * (9/5)) + (32)
            newTemp = (newTemp.toFixed(1))
            let newFeels = (this.state.feels_like * (9/5)) + (32)
            newFeels = (newFeels.toFixed(1))
            let newMin = (this.state.temp_min * (9/5)) + (32)
            newMin = (newMin.toFixed(1))
            let newMax = (this.state.temp_max * (9/5)) + (32)
            newMax = (newMax.toFixed(1))
            this.setState({
                temp: newTemp,
                feels_like: newFeels,
                temp_min: newMin,
                temp_max: newMax,
                units: 'imperial'
            })
        } else if (this.state.units === 'imperial'){
            let newTemp = (this.state.temp - 32) *(5/9)
            newTemp = (newTemp.toFixed(1))
            let newFeels = (this.state.feels_like - 32) *(5/9)
            newFeels = (newFeels.toFixed(1))
            let newMin = (this.state.temp_min - 32) *(5/9)
            newMin = (newMin.toFixed(1))
            let newMax = (this.state.temp_max - 32) *(5/9)
            newMax = (newMax.toFixed(1))
            this.setState({
                temp: newTemp,
                feels_like: newFeels,
                temp_min: newMin,
                temp_max: newMax,
                units: 'metric'
            })
        }
    }
render() {
    const isMetric = this.state.isMetric;
    let currentUnit;
    if (this.state.units === 'metric') {
        currentUnit = 'Switch to Imperial'
    } else {
        currentUnit = 'Switch to Metric'
    }
    return (
        <div className="weather">
            <h4>Today's Weather</h4>
                <li>Todays temperature is: {this.state.temp}</li>
                <li>It feels like: {this.state.feels_like}</li>
                <li>Today's high is: {this.state.temp_max}</li>
                <li>Today's low is: {this.state.temp_min}</li>
            <button onClick={this.handleUnitChange}>{currentUnit}</button>
        </div>
    )
}
}