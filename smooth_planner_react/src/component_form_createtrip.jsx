import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

class CreateItinerary extends Component {
  render() {
    return (
      <div className="create-form-container">
      <div className="form-title">
      <h4 className="card-title">Create New Itinerary</h4>
      </div>
      <form>
        <div className="form-group">
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
        <Geosuggest 
          placeholder="Enter a destination for your trip like: Paris, Victoria, Australia etc."
          className="form-group"
          inputClassName="form-control"
          suggestsClassName="list-group"
          suggestItemClassName="list-group-item"
          type="text"
          />
        <div className ="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    )
  }
}

export default CreateItinerary;
