import React, { Component } from 'react';
import { Link } from '../node_modules/react-router-dom'

export default class TripsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
      return (<Link key={trip.id} to={'/trips/' + trip.id } className={dateCheck(trip.time_end)}>{trip.name}</Link>)
    })

    
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