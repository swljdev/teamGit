import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export default class Zomato extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            restaurants: undefined
          };
    }

    componentDidUpdate(prevProps) {
        if (this.props.latitude !== prevProps.latitude) {
        this.setState({ isLoading: true });
        let APIKEY = '9985583621577a1bfffeea339ba7b09c'
        let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.latitude}&lon=${this.props.longitude}`
        var myHeaders = new Headers();
        myHeaders.append("user-key", APIKEY);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({ 
                isLoading: false,
                restaurants: result.nearby_restaurants
             })
            })
        .catch(error => console.log('error', error));
    }
}
    
   
    render() {
      if (this.state.restaurants !== undefined) {
        console.log('Received Data: ', this.state.restaurants)
        return ( 
            <div className="zomatoList">
             <h4>Restaraunts Near You:</h4>
                    {
                    this.state.restaurants.map(function(store, index){
                    console.log(store);
                   
                    return <li key={index}>{store.restaurant.name}</li>
  })
                    }
            
            </div>
           
         )
      } else 
      return (
          <p>Click 'Show Your Location' To see a list of nearby restaurants</p>
      )
    }
  }