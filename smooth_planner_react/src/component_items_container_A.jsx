import React, { Component } from 'react';


// this is the specific container for ACCOMMODATION card type
export default class ItemsContainer extends Component {

  render() {
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="itinerary_card-parent">
            <div className="itinerary_card-main" >
              <h5><strong>Dream Sleep Hotels - Accommodation</strong></h5>
              <span> <strong>First Day:</strong> March, 10th, 2019</span>
              <span className="to_time"> <strong>Last Day:</strong> March, 15th, 2019</span>  <br />
              <span> <strong>Venue: </strong> Dream Sleep Hotels</span>
            </div>
              
            <div className="itinerary_card-hiden">
              <span> <strong>Confirmation #: </strong> H073L958-789</span>
              <span> <strong>Files uploaded:</strong> reservation_hotel_Zurich.pdf</span> <br />
              <span> <strong>URL:</strong> www.sleepdream.com/sz</span>
              <span> <strong>Phone:</strong>9878-8878</span>  <br />
              <span> <strong>Address:</strong> Hotel Neighborhood, 321</span> <br />
              <span> <strong>Details:</strong>we didn't order breakfast</span>
            </div>
          </div>
    )
  }
}

