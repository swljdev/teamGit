import React from 'react';

export default class Nasa extends React.Component{
    constructor(props) {
        super(props)
            this.state = {
            isLoading: false,
            photo: undefined
            };
        
            }      
    
    componentDidUpdate(prevProps){
        if (this.props.latitude !== prevProps.latitude) {
            this.setState({isLoading: true})
            let APIKEY = '1DxVmAj6p061TWlctpjdg9qowilSjnWKDAuqtVZb'
            let url = `https://api.nasa.gov/planetary/earth/imagery/?lon=${this.props.longitude}&lat=${this.props.latitude}&api_key=${APIKEY}`
        
            
        fetch(url)
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoading: false,
                photo: result.url
            })   
        })  
        .catch(error => console.log('error', error)) 
      }
    }
      
    render() {
        if (this.state.photo !==undefined) {
              console.log("Received Data:", this.state.photo)
            return (
                <div className= "nasa">
                    <img src = {this.state.photo} alt={this.state.title} /> 
                </div>
                )
        } else {
            return (
            <p>NASA DATA FAILED TO LOAD</p>
            )
        }
    }
}


    

