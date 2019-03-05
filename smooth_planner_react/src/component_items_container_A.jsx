import React, { Component } from 'react';

// this is the specific container for ACCOMMODATION card type
export default class ItemsContainer extends Component {

  render() {

    const item = this.props.item;
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="itinerary_card-parent">
            <div className="itinerary_card-main" >
              <h2><strong>{item.title} - Accommodation</strong></h2>
              <span> <strong>First Day:</strong> {item.time_start}</span>
              <span className="to_time"> <strong>Last Day:</strong> {item.time_end}</span>  <br />
              <span> <strong>Venue: </strong> {item.venue}</span>
            </div>
              
            <div className="itinerary_card-hiden">
              <span> <strong>Confirmation #: </strong> {item.confirmation}</span>
              <span> <strong>Files uploaded:</strong> reservation_hotel_Zurich.pdf</span> <br />
              <span> <strong>URL:</strong> www.sleepdream.com/sz</span>
              <span> <strong>Phone:</strong>{item.phone}</span>  <br />
              <span> <strong>Address:</strong>{item.address}</span> <br />
              <span> <strong>Details:</strong>{item.details}</span>
            </div>
          </div>
    )
  }
}
