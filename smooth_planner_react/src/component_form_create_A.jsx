import React, { Component } from 'react';
import LocationSearchInput from './component_form_autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateAccomodation extends Component {
  constructor(props) {
    super(props);
    //Declare state
    this.state = {
      item_type:'A',
      trip_id: this.props.tripID,
      ...(this.props.item || {})
    }
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
  }
  onChangeHandler = (event) => {
    const stateName = event.target.name
    const value = event.target.value
    this.setState({[stateName]:value})
    console.log(this.state)
  }
  handleChangeEndDate(date) {
    this.setState({
      time_end: date,
    });
  }
  handleChangeStartDate(date) {
    this.setState({
      time_start: date,
    });
  }
  handlesSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state)
    this.props.addItem(this.state);
    this.props.closeModal();
  }
  onChangeVenue = (address, venue) => {
    this.setState({
      address,
      venue
    })
  }
  onChangeLatLng = (latlng) => {
    const geo_location = `${latlng.lat} ${latlng.lng}`
    this.setState({geo_location})
    console.log("state change!", this.state)    
  }


  render() {
    return(
      <div class="create-form-container">
        <div class="form-title">
        <h4 class="card-title">Add/Edit Accomodation</h4>
        </div>
        <form onSubmit={this.handlesSubmit}>
          <div class="row form-group">
            <label htmlFor="dt_start" class="col-sm-3 col-form-label">Check in:</label>
            <DatePicker
              name="time_start"
              placeholderText = "Click to select"
              selected = {this.state.time_start}
              onChange = {this.handleChangeStartDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY h:mm aa"
              timeCaption="time"
              className = "form-control col-sm-10"
              required
            />
          </div>
          <div class="row form-group">
            <label htmlFor="dt_end" class="col-sm-3 col-form-label">Check out:</label>
            <DatePicker
              name="time_end"
              placeholderText = "Click to select"
              selected = {this.state.time_end}
              onChange = {this.handleChangeEndDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY h:mm aa"
              timeCaption="time"
              className = "form-control col-sm-10"
              required
            />
          </div>
          <div class="row form-group">
            <label htmlFor="confirmation" class="col-sm-3 col-form-label">Reservation #:</label>
            <input 
              type="text" 
              class="form-control col-sm-9" 
              name="confirmation"
              onChange = {this.onChangeHandler}
              value = {this.state.confirmation}
            />
          </div>
          <div class="row form-group" id="locationField">
            <label htmlFor="venue" class="col-sm-3 col-form-label">Venue: </label>
            <LocationSearchInput
              type="text" 
              className="form-control col-sm-10" 
              name="venue" 
              placeholder="Hotel" 
              handleAddress = {this.onChangeVenue}
              handleLatLng = {this.onChangeLatLng}
              address = {this.state.venue}
            />
          </div>
          <div class="row form-group">
            <label htmlFor="details" class="col-sm-3 col-form-label">Details:</label>
            <textarea 
              className="form-control col-sm-9"
              name="details"
              onChange = {this.onChangeHandler}
              value = {this.state.details}>
            </textarea>
          </div>
          <div class ="form-group">
            {/* <a role="button" class="btn btn-outline-primary" href="#">Upload files</a> */}
          </div>
          <div class="form-group">
            <button type="submit" class="col-sm-12 btn btn-primary">Submit</button>
          </div>
        </form>
    </div>
    )
  }


}

export default CreateAccomodation;
