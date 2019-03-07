import React, { Component } from 'react';


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {

  // calls delete item method on items_container
  handle_deleteItem = () => {
    const check = window.confirm(`Are you sure you want to delete this Transportation card?`);
    if (check === true)
      this.props.delete_item(this.props.item.id);
  }


  render() {
    
    const item = this.props.item;

    return (
          <div className="card">
            <div className="card-header" >
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              <div className="edit-bt">
                <i className="far fa-edit"></i>
                <div className="edit-hint">Edit Card</div>
              </div>
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

