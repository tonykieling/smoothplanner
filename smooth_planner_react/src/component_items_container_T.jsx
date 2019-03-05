import React, { Component } from 'react';


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {
  render() {
    
    const item = this.props.item;

    return (
          <div className="card">
            <div className="card-header" >
              <h4><strong>Going to {item.city_arrival}</strong></h4>
            </div>
            <div className="card-body">
              <span> <strong>Departure: </strong>{item.time_start}</span>
              <span> <strong>Arrival: </strong>{item.time_end}</span> <br />
              <span> <strong>Leaving from: </strong>{item.city_depart} {item.venue ? ` - ${item.venue}` : ""}</span>  <br />
            </div>

            <div className="card-body">
              <span> <strong>Confirmation #: </strong>{item.confirmation}</span>
              <span className="to_time"> <strong>Files uploaded: </strong> ticket_to_Zurich.pdf</span> <br />
              <span> {item.details ? `<strong>Details: </strong>${item.details}` : "" }</span>
              {/* right now, if details is empty, it doesnt show up */}
            </div>
          </div>
    )
  }
}

