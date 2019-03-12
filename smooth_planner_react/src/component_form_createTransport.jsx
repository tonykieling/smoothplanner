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
      venue: '',
      details: '',
      confirmation: '',
      city_depart: '',
      city_arrival: '',
    }
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);

  }
  onChangeHandler = (event) => {
    const stateName = event.target.name
    const value = event.target.value
    this.setState({[stateName]:value})
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
    this.props.addItem(this.state);
    this.props.closeModal();
  }
  onChangeDepartCity = (formatted_address, city_depart) => {
    this.setState({city_depart})
  }
  onChangeArriveCity = (formatted_address, city_arrival) => {
    this.setState({city_arrival})
  }
  onChangeLatLng = (latlng) => {
    const geo_location = `${latlng.lat} ${latlng.lng}`
    this.setState({geo_location})   
  }
  componentDidMount() {
    if(this.props.item) {
      this.setState({
        time_start: this.props.item.time_start,
        time_end: this.props.item.time_end,
        venue: this.props.item.venue,
        details: this.props.item.details,
        confirmation: this.props.item.confirmation,
        city_depart: this.props.item.city_depart,
        city_arrival: this.props.item.city_arrival,
        id: this.props.item.id,
       });
    }
  }
 

  render() {
    return (
      <div className="create-form-container">
        <div className="form-title">
        <h4 className="card-title">
          <i className="fas fa-plane"></i>Add/Edit Transportation
        </h4>
        </div>
        <form onSubmit={this.handlesSubmit}>
          <div className="form-group">
            <label htmlFor="city_depart" className="form-label">From:</label>
            <LocationSearchInput
              type="text" 
              className="form-control" 
              name="city_depart" 
              placeholder="Departing City"
              handleAddress = {this.onChangeDepartCity}
              address = {this.state.city_depart}
              handleLatLng = { () => {}}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city_arrival" className="form-label">To:</label>
            <LocationSearchInput
              type="text" 
              name="city_arrival" 
              placeholder="Arrival City" 
              handleAddress = {this.onChangeArriveCity}
              address = {this.state.city_arrival}
              handleLatLng = {this.onChangeLatLng}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time_start" className="form-label col-12">Departure Date:</label>
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
              className = "form-control wd-100"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time_end"className="form-label col-12">Arrival Date:</label>
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
              className = "form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmation" className="form-label">Reservation #:</label>
            <input 
              type="text" 
              className="form-control" 
              name="confirmation"
              onChange = {this.onChangeHandler}
              value = {this.state.confirmation}
            />
          </div>
          <div className="form-group">
            <label htmlFor="details" className="form-label">Details:</label>
            <textarea 
              className="form-control"
              name="details"
              onChange = {this.onChangeHandler}
              value = {this.state.details}>
            </textarea>
          </div>
          <div className ="form-group">
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary">Submit</button>
            <button className="btn btn-danger" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    )
  } 
}

export default CreateTransport;
