import React, { Component } from 'react';
import Script from 'react-load-script';

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
    //Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }
  handleScriptLoad() { 
    // Declare Options For Autocomplete 
    // const options = { types: ["(cities)","(regions)"] }; 
    
    // Initialize Google Autocomplete 
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
                          document.getElementById('searchTextField')
                        ); 
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed",
                                  this.handlePlaceSelect); 
  }
  handlePlaceSelect() {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }
  on

  render() {
    return (
      <div className="create-form-container">
       <Script url = {this.googleAPIURL}
      onLoad={this.handleScriptLoad}        
    />
      <div className="form-title">
      <h4 className="card-title">Create New Itinerary</h4>
      </div>
      <form>
        <div className="form-group row">
          <input type="text" name="itinerary-name" className="form-control" placeholder="Enter a title for your Itinerary"/>
        </div>
        <div className="form-group row">
            <label for="dt_start" className="col-sm-1 col-form-label">Trip begins: </label>
            <input type ='date' name="dt_start" className="form-control col-sm-11"/>
          </div>
          <div className="form-group row">
            <label for="dt_end" className="col-sm-1 col-form-label">Trip ends on: </label>
            <input type ='date' name="dt_end" className="form-control col-sm-11"/>
          </div>  
        <div className="form-group row">
        <input 
          id="searchTextField" 
          placeholder="Enter destination for your itinerary. Example: Canada, India, Paris, Banff etc." 
          hintText="Search Destination" 
          className="form-control"
          value={this.state.query} />
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
