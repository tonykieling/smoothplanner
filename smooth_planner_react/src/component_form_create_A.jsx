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
      venue:'',
      details:'',
      confirmation:'',
      address: '',
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
  onChangeVenue = (address, venue) => {
    this.setState({
      address,
      venue
    })
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
        address: this.props.item.address,
        id: this.props.item.id,
       });
    }
  }


  render() {
    return(
      <div className="create-form-container">
        <div className="form-title">
        <h4 className="card-title">
          <i className="fas fa-concierge-bell"></i> Add/Edit Accomodation
        </h4>
        </div>

        <form onSubmit={this.handlesSubmit}>
          <div className="form-group">
            <label htmlFor="dt_start" className="form-label col-12">Check in:</label>
            <DatePicker
              name="time_start"
              placeholderText = "Click to select"
              selected = {this.state.time_start}
              onChange = {this.handleChangeStartDate}
              showTimeSelect
              selectsStart
              minDate={new Date()}
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY h:mm aa"
              timeCaption="Time"
              startDate={this.state.time_start}
              endDate={this.state.time_end}
              className = "form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dt_end" className="form-label col-12">Check out:</label>
            <DatePicker
              name="time_end"
              placeholderText = "Click to select"
              selected = {this.state.time_end}
              onChange = {this.handleChangeEndDate}
              showTimeSelect
              selectsEnd
              minDate={this.state.time_start}
              startDate={this.state.time_start}
              endDate={this.state.time_end}
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY h:mm aa"
              timeCaption="Time"
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
          <div className="form-group" id="locationField">
            <label htmlFor="venue" className="form-label">Venue: </label>
            <LocationSearchInput
              type="text"
              name="venue" 
              placeholder="Hotel" 
              handleAddress = {this.onChangeVenue}
              handleLatLng = {this.onChangeLatLng}
              address = {this.state.venue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address: </label>
            <input readOnly className="form-control" type="text" value={this.state.address} onChange = {this.onChangeHandler}  />
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
            {/* <a role="button" className="btn btn-outline-primary" href="#">Upload files</a> */}
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
    </div>
    )
  }


}

export default CreateAccomodation;
