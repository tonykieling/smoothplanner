import React, { Component } from 'react';
import Script from 'react-load-script';
import LocationSearchInput from './component_form_autocomplete';

class CreateItinerary extends Component {
  constructor(props) {
    super(props);
    // Declare State
    this.state = {
      destination: '',
      query: '',
      title: 'New Trip',
    };
    const googleAPIURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`;
  }
  
  render() {
    return (
      <div className="create-form-container">
      <div className="form-title">
      <h4 className="card-title">Create New Itinerary</h4>
      </div>
      <form>
        <div className="form-group row">
          <input type="text" name="itinerary-name" className="form-control" placeholder="Enter a title for your Itinerary"/>
        </div>
        <div className="form-group row">
            <label for="dt_start" className="col-sm-6 col-form-label">Trip begins: </label>
            <input type ='date' name="dt_start" className="form-control col-sm-6"/>
          </div>
          <div className="form-group row">
            <label for="dt_end" className="col-sm-6 col-form-label">Trip ends on: </label>
            <input type ='date' name="dt_end" className="form-control col-sm-6"/>
          </div>  
        <div className="form-group">
        <LocationSearchInput />
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
