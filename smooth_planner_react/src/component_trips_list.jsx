import React, { Component } from 'react';
import { Link } from '../node_modules/react-router-dom'

export default class TripsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // calls delete item method on items_container
  handle_deleteTrip = () => {
    // console.log("this.propsABC: ", this.props);
    console.log("ID: ", this.props);
    const check = window.confirm(`Are you sure you want to delete this Trip?`);
    // if (check === true)
      this.props.delete_trip(this.props.trip.id);
  }

  render() {
    function dateCheck(tripEnds) {
      const diff = Date.parse(tripEnds) - Date.now()
      if (diff) {
        return "list-group-item list-group-item-action list-group-item-success"
      } else {
        return "list-group-item list-group-item-action list-group-item-warning"
      }
    }
    const trips = this.props.trips.map((trip) => {
      return (
        <Link key={trip.id} to={'/trips/' + trip.id } className={dateCheck(trip.time_end)}>{trip.name}
          <i className="fas fa-trash-alt" onClick={this.handle_deleteTrip}></i>
        </Link>)
    })

console.log("this.propsZ: ", this.props);
    return (
      <div className="list-group trip-list">
        <button type="button" className="btn btn-outline-warning">+ New Trip</button>
        <h4>Your Trips</h4>
        <ul>
          {trips}
          
        </ul>
      </div>
    )
  }
}