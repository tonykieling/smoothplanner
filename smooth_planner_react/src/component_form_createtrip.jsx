import React, { Component } from 'react';
import axios from 'axios';
import LocationSearchInput from './component_form_autocomplete';

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    // Declare State
    this.state = {
      title: '',
      dt_start: '',
      dt_end: '',
      destination_address:'',
      destination_latlng: ''
    };
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeTitle = (event)=>{
    this.setState({title: event.target.value})
    console.log("state change!", this.state)
  }
  onChangeStartDate = (event) => {
    this.setState({dt_start: Date.parse(event.target.value)})
    console.log("state change!", this.state)
  }
  onChangeEndDate = (event) => {
    this.setState({dt_end: Date.parse(event.target.value)})
    console.log("state change!", this.state)
  }
  onChangeDestination = (destination_address) => {
    this.setState({
      destination_address, 
    })
    console.log("state change!", this.state)    
  }
  onChangeLatLng = (destination_latlng) => {
    this.setState({
      destination_latlng,
    })
    console.log("state change!", this.state)    
  }
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/v1/itineraries', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
   
    return (
      <div className="create-form-container">
        <div className="form-title">
        <h4 className="card-title">Create New Trip</h4>
        </div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group form-row">
          <label for="trip-name" className="col-sm-2 col-form-label">Trip Name:</label>
          <input 
            type="text" 
            name="Trip-name" 
            className="form-control col-sm-10" 
            placeholder="Example: Trip to India, Weekend getaway in Victoria etc."
            onChange={this.onChangeTitle}
            value={this.state.title}
            required
          />
        </div>
        <div className="form-group form-row">
            <label for="dt_start" className="col-sm-2 col-form-label">Trip begins: </label>
            <input 
              type ='date' 
              name="dt_start" 
              className="form-control col-sm-10"
              onChange={this.onChangeStartDate}
              required
            />
        </div>
        <div className="form-group form-row">
            <label for="dt_end" className="col-sm-2 col-form-label">Trip ends on: </label>
            <input type ='date'
              name="dt_end" 
              className="form-control col-sm-10"
              onChange={this.onChangeEndDate}
              required
            />
          </div>  
        <div className="form-group">
        <LocationSearchInput 
          handleAddress = {this.onChangeDestination}
          handleLatLng = {this.onChangeLatLng}
        />
        </div>
        <div className ="form-group">
          <button type="submit" className="btn btn-primary form-control">Submit</button>
        </div>
      </form>
    </div>
    )
  }
}

export default CreateTrip;
