import React, { Component } from 'react';
import moment from 'moment'


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {

  // calls delete item method on items_container
  handle_deleteItem = () => {
    const check = window.confirm(`Are you sure you want to delete this item?`);
    if (check === true)
      this.props.delete_item(this.props.item.id);
  }


  render() {
    
    const item = this.props.item;
    const details = <p><b>XXDetails: </b>item.details</p>

    return (
          <div className="card">
            <div className="card-header" >
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              {/* <div className="edit-bt"> */}
                <i className="far fa-edit"></i>
                {/* <div className="edit-hint">Edit Card</div>
              </div> */}
              <h4><b>Going to {item.city_arrival}</b></h4>
            </div>
            
            <div className="card-body">
              <span> <b>Departure: </b>{moment(item.time_start).format('MMM Do YYYY')}<b>  -  </b></span>
              <span><b>Arrival: </b>{moment(item.time_end).format('MMM Do YYYY')}</span> <br />
              <span> <b>Leaving from: </b>{item.city_depart} {item.venue ? ` - ${item.venue}` : ""}</span>  <br />
            </div>

            <div className="card-body">
              <span> <b>Confirmation #: </b>{item.confirmation}</span>
              <span className="to_time"> <b>Files uploaded: </b> ticket_to_Zurich.pdf</span> <br />
              <span> {item.details ? details : null }</span>
              {/* right now, if details is empty, it doesnt show up */}
            </div>
          </div>
    )
  }
}

