import React, { Component } from 'react';


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {
  render() {
    
    const item = this.props.item;

    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          // in this here there are some comments and thoughts in order to help the developement
          // TODO: cleanup the comments later
          <div className="itinerary_card-parent">
            <div className="itinerary_card-main" >
              <h2><strong>{item.title} - Transportation</strong></h2>
              {/* <div className="transport-item" key={itinerary.id}> */}
              {/* <h2> Going FROM {itinerary.city_depart} TO {itinerary.city_arrival}</h2> */}
              {/* consider only the title */}
              <span> <strong>Departure:</strong>{item.time_start}</span>
              {/* format a nice date and time showing the trip starting */}
              <span> <strong>Arrival:</strong>{item.time_end}</span> <br />
              {/* format a nice date and time showing the trip ending */}
              <span> <strong>Leaving from: </strong>{item.venue}</span>  <br />
              {/* here we display the place where the transportation will depart */}
            </div>

            <div className="itinerary_card-hiden">
              <span> <strong>Confirmation #: </strong>{item.confirmation}</span>
              {/* ticket number */}
              <span className="to_time"> <strong>Files uploaded:</strong> ticket_to_Zurich.pdf</span> <br />
              {/* figure out how to display the document (plura? all documents or only for that specific user?) */}
              <span> <strong>Details:</strong>{item.details}</span>
              {/* details typed by the user */}
            </div>
          </div>
    )
  }
}

