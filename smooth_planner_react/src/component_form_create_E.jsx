import React, { Component } from 'react';
import LocationSearchInput from './component_form_autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    //Declare state
    this.state = {
      item_type:'E',
      trip_id: this.props.tripID,
      title: '',
      venue: '',
      details: '',
      confirmation: '',
      address: '',
      url: '',
    }
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
  }
  handleChangeStartDate(date) {
    this.setState({
      time_start: date,
      time_end: date,
    });
  }
  handlesSubmit = (event)=>{
    event.preventDefault();
    this.props.addItem(this.state);
    this.props.closeModal();
  }
  onChangeVenue = (address, venue) => {
    this.setState({address, venue})
  }
  onChangeLatLng = (latlng) => {
    const geo_location = `${latlng.lat} ${latlng.lng}`
    this.setState({geo_location})   
  }
  onChangeHandler = (event) => {
    const stateName = event.target.name
    const value = event.target.value
    this.setState({[stateName]:value})
  }

  componentDidMount() {
    if(this.props.item) {
      this.setState({
        title: this.props.item.title || '',
        time_start: this.props.item.time_start,
        venue: this.props.item.venue || '',
        details: this.props.item.details || '',
        confirmation: this.props.item.confirmation || '',
        address: this.props.item.address || '',
        id: this.props.item.id || '',
        url: this.props.item.url || '',
       });
    } 
  }


  render() {
    return (
      <div className="create-form-container">
        <div className="form-title">
        <h4 className="card-title">
          <i className="fas fa-theater-masks"></i>Add/Edit Event
        </h4>
        </div>
        <form onSubmit={this.handlesSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input 
              type="text" 
              className="form-control"
              name="title" 
              placeholder="Example: Dinner @ local eatery, Guided tour of the Pyramids" 
              value={this.state.title}
              onChange = {this.onChangeHandler}  />
          </div>
          <div className="form-group">
            <label htmlFor="dt_start" className="form-label col-12">Event time:</label>
            <DatePicker
              name="time_start"
              placeholderText = "Click to select"
              selected = {this.state.time_start}
              onChange = {this.handleChangeStartDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY h:mm aa"
              minDate={new Date()}
              timeCaption="Time"
              className = "form-control"
              required
            />
          </div>
          <div className="form-group">
          <label htmlFor="confirmation" className="form-label">Reservation #:</label>
            <input 
              type="text" 
              className="form-control "
              name="confirmation"
              onChange = {this.onChangeHandler}
              value = {this.state.confirmation}
            />
            </div>
          <div className="form-group" id="locationField">
            <label htmlFor="venue" className="form-label">Venue: </label>
              <LocationSearchInput
                type="text" 
                className="form-control" 
                name="venue" 
                value = {this.state.venue}
                handleAddress = {this.onChangeVenue}
                handleLatLng = {this.onChangeLatLng}
                address = {this.state.venue}
              />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address: </label>
            <input readOnly className="form-control" type="text" value={this.state.address}/>
          </div>
          <div className="form-group">
            <label htmlFor="url" className="form-label">Website: </label>
            <input className="form-control" type="text" value={this.state.url} onChange = {this.onChangeHandler} />
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
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
    </div>
    )
  }
}

export default CreateEvent;
