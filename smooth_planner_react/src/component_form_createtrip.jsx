import React, { Component } from 'react';

class CreateItinerary extends Component {
  render() {
    return (
      <div className="create-itinerary">
        <h3>Create New Itinerary</h3>
        <form >
          <div className="form-group">
            <label htmlFor="itinerary-name">Itinerary Title</label>
            <input type="text" name="itinerary-name" className="form-control" placeholder="Enter a title for your Itinerary"/>
            <small id="emailHelp" className="form-text text-muted">Example: Canada Day 2019, Trip to India etc</small>
          </div>
          <label htmlFor="dt_start">Itinerary begins on: </label>
          <input type ='date' name="dt_start" className="form-control"/>

          <label htmlFor="dt_end">Itinerary end on: </label>
          <input type ='date' name="dt_end" className="form-control"/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateItinerary;
