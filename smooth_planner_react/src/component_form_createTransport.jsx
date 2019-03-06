import React, { Component } from 'react';
import axios from 'axios';
import LocationSearchInput from './component_form_autocomplete';

function concatDateandTime(date, time) {
  const concatString = `${date} ${time}`
  return Date.parse(concatString)
}

class CreateTransport extends Component {
  constructor(props){
    super(props);
    //Declare state
    this.state = {
      city_depart: '',
      city_arrival: '',
      dt_start: '',
      time_start: '',
      dt_end: '',
      confirmation: '',
      details: ''
    }
  }
  onChangeHandler = (event) => {
    const stateName = event.target.name
    const value = event.target.value
    this.setState({[stateName]:value})
    
  }
  handlesSubmit = (event)=>{
    event.preventDefault();
    //  Combiming date and time for start
    const start_timestamp = concatDateandTime(this.state.dt_start_raw, this.state.time_start)
    //  combining date and time for end
    const end_timestamp = concatDateandTime(this.state.dt_end_raw, this.state.time_end)
    
    this.setState({dt_start: start_timestamp, dt_end: end_timestamp})
    console.log(this.state)
  }
 

  render() {
    return (
      <div className="create-form-container">
        <div className="form-title">
        <h4 className="card-title">Add/Edit Transportation</h4>
        </div>
        <form onSubmit={this.handlesSubmit}>
          <div className="row form-group">
            <label for="city_depart" className="col-sm-3 col-form-label">Departing</label>
            <LocationSearchInput
              type="text" 
              className="form-control" 
              name="city_depart" 
              placeholder="Departing City"
              onChange = {this.onChangeHandler}
            />
          </div>
          <div className="row form-group">
            <label for="dt_start_raw" className="col-sm-3 col-form-label">Date & Time:</label>
            <input
              type="date" 
              className="form-control col-sm-3" 
              name="dt_start"
              onChange = {this.onChangeHandler}

              required
            />
            <input 
            type="time"
            className="form-control col-sm-3"
            name="time_start"
            onChange = {this.onChangeHandler}
            />

          </div>
          <div className="row form-group">
            <label for="city_arrival" className="col-sm-3 col-form-label">Arrival</label>
            <LocationSearchInput
              type="text" 
              className="form-control" 
              name="city_arrival" 
              placeholder="Arrival City" 
              onChange = {this.onChangeHandler}
            />
          </div>
          <div className="row form-group">
            <label for="dt_end"className="col-sm-3 col-form-label">Date & Time:</label>
            < input 
              type="date"
              className="form-control col-sm-9" 
              name="dt_end_raw"
              onChange = {this.onChangeHandler}
              required
            />
            <input 
            type="time"
            className="form-control col-sm-3"
            name="time_end"
            onChange = {this.onChangeHandler}
            />
          </div>
          <div className="row form-group">
            <label for="confirmation-number" className="col-sm-3 col-form-label">Reservation #:</label>
            <input 
              type="text" 
              className="form-control col-sm-9" 
              name="confirmation"
              onChange = {this.onChangeHandler}
              value = {this.state.confirmation}
            />
          </div>
          <div className="row form-group">
            <label for="details" className="col-sm-3 col-form-label">Details:</label>
            <textarea 
              className="form-control col-sm-9"
              name="details"
              onChange = {this.onChangeHandler}>
            </textarea>
          </div>
          <div className ="form-group">
            {/* <a role="button" className="btn btn-outline-primary">Upload files</a> */}
          </div>
          <div className="form-group">
            <button type="submit" className="col-sm-12 btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  } 
}

export default CreateTransport;
