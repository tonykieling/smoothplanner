import React, { Component } from 'react';


// this is the specific container for EVENT card type
export default class ItemsContainer extends Component {
  
  render() {
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="itinerary_card-parent">
            <div className="itinerary_card-main">
              <h5><strong>Japaneses Dinner - Event</strong></h5>          
              <span> <strong>When:</strong> March, 10th, 2019 - 6:00 P.M. </span> <br />
              <span> <strong>Where: </strong>Arigato Restaurant</span>  <br />
            </div>
          
            <div className="itinerary_card-hiden">
              <span> <strong>Confirmation #: </strong> - </span>
              <span className="to_time"> <strong>Files uploaded:</strong> - </span> <br />
              <span> <strong>URL:</strong> www.arigato.ca </span>
              <span className="to_time"> <strong>Phone:</strong>9878-8878</span>  <br />
              <span> <strong>Address:</strong> Sashimi Street, 123 </span>  <br />
              <span> <strong>Details:</strong>Talked with Janice and reserved for 4 people</span>
            </div>
        </div>
    )
  }
}

