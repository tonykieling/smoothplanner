import React, { Component } from 'react';

class CreateItinerary extends Component {
  render() {
    return (
      <div className="create-itinerary">
        <h3>Create New Itinerary</h3>
        <form >
          <div class="form-group">
            <label for="itinerary-name">Itinerary Title</label>
            <input type="text" name="itinerary-name" class="form-control" placeholder="Enter a title for your Itinerary"/>
            <small id="emailHelp" class="form-text text-muted">Example: Canada Day 2019, Trip to India etc</small>
          </div>
          <label for="dt_start">Itinerary begins on: </label>
          <input type ='date' name="dt_start" class="form-control"/>

          <label for="dt_end">Itinerary end on: </label>
          <input type ='date' name="dt_end" class="form-control"/>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateItinerary;
