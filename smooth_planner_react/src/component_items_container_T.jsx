import React, { Component } from 'react';


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {
  render() {
    
    const item = this.props.item;

    return (
          <div className="card">
            <div className="card-header" >
              <h4><strong>{item.title} - Transportation</strong></h4>
              <span className="delete_item">X</span>
            </div>
            <div className="card-body">
              <span> <strong>Departure:</strong>{item.time_start}</span>
              <span> <strong>Arrival:</strong>{item.time_end}</span> <br />
              <span> <strong>Leaving from: </strong>{item.city_depart}</span>  <br />
            </div>

            <div className="card-body">
              <span> <strong>Confirmation #: </strong>{item.confirmation}</span>
              <span className="to_time"> <strong>Files uploaded:</strong> ticket_to_Zurich.pdf</span> <br />
              <span> <strong>Details:</strong>{item.details}</span>
            </div>
          </div>
    )
  }
}

