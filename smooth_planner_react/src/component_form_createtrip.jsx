import React, { Component } from 'react';
import Script from 'react-load-script';
import LocationSearchInput from './component_form_autocomplete';

class CreateItinerary extends Component {
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
  
  render() {
   
    return (
      <div className="create-form-container">
        <div className="form-title">
        <h4 className="card-title">Create New Itinerary</h4>
        </div>
      <form>
        <div className="form-group row">
          <input 
            type="text" 
            name="itinerary-name" 
            className="form-control" 
            placeholder="Enter a title for your Itinerary"
            onChange={this.onChangeTitle}
            value={this.state.title}
          />
        </div>
        <div className="form-group row">
            <label for="dt_start" className="col-sm-6 col-form-label">Trip begins: </label>
            <input 
              type ='date' 
              name="dt_start" 
              className="form-control col-sm-6"
              onChange={this.onChangeStartDate}
            />
          </div>
          <div className="form-group row">
            <label for="dt_end" className="col-sm-6 col-form-label">Trip ends on: </label>
            <input type ='date'
              name="dt_end" 
              className="form-control col-sm-6"
              onChange={this.onChangeEndDate}
            />
          </div>  
        <div className="form-group">
        <LocationSearchInput handleAddress = {this.onChangeDestination}
        />
        </div>
        <div className ="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    )
  }
}

export default CreateItinerary;
