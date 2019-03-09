import React, { Component } from 'react';
import LocationSearchInput from './component_form_autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreateTransport extends Component {
  constructor(props){
    super(props);
    //Declare state
    this.state = {
      item_type:'T',
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
  onChangeDepartCity = (city_depart) => {
    this.setState({city_depart})
  }
  onChangeArriveCity = (city_arrival) => {
    this.setState({city_arrival})
  }
  onChangeLatLng = (latlng) => {
    const geo_location = `${latlng.lat} ${latlng.lng}`
    this.setState({geo_location})
    console.log("state change!", this.state)    
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
              handleAddress = {this.onChangeDepartCity}
              address = {this.state.city_depart}
            />
          </div>
          <div className="row form-group">
            <label for="city_arrival" className="col-sm-3 col-form-label">Arrival</label>
            <LocationSearchInput
              type="text" 
              className="form-control col-sm-10" 
              name="city_arrival" 
              placeholder="Arrival City" 
              handleAddress = {this.onChangeArriveCity}
              address = {this.state.city_arrival}
              handleLatLng = {this.onChangeLatLng}
            />
          </div>
          <div className="row form-group">
            <label for="time_start" className="col-sm-3 col-form-label">Departing:</label>
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
            <label for="time_end"className="col-sm-3 col-form-label">Arriving:</label>
            <DatePicker
              name="time_end"
              placeholderText = "Click to select"
              selected = {this.state.time_end}
              onChange = {this.handleChangeEndDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY :mm aa"
              timeCaption="time"
              className = "form-control col-sm-10"
              required
            />
          </div>
          <div className="row form-group">
            <label for="confirmation" className="col-sm-3 col-form-label">Reservation #:</label>
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
              onChange = {this.onChangeHandler}
              value = {this.state.details}>
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
