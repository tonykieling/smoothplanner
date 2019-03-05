import React, { Component } from 'react';


// this is the specific container for EVENT card type
export default class ItemsContainer extends Component {
  
  render() {
    const item = this.props.item;
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="itinerary_card-parent">
            <div className="itinerary_card-main">
              <h2><strong>{item.title} - Event</strong></h2>
              <span> <strong>When:</strong>{item.time_start}</span> <br />
              <span> <strong>Where: </strong>{item.time_end}</span>  <br />
            </div>
          
            <div className="itinerary_card-hiden">
              <span> <strong>Confirmation #: </strong>{item.confirmation}</span>
              <span className="to_time"> <strong>Files uploaded:</strong> - </span> <br />
              <span> <strong>URL:</strong> www.arigato.ca </span>
              <span className="to_time"> <strong>Phone:</strong>{item.phone}</span>  <br />
              <span> <strong>Address:</strong>{item.address}</span>  <br />
              <span> <strong>Details:</strong>{item.details}</span>
            </div>
        </div>
    )
  }
}

