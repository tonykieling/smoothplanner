import React, { Component } from 'react';


// this is the specific container for EVENT card type
export default class ItemsContainer extends Component {

  // calls delete item method on items_container
  handle_deleteItem = () => {
    console.log("this.propsITEM: ", this.props);
    const check = window.confirm(`Are you sure you want to delete this item?`);
    if (check === true)
      this.props.delete_item(this.props.item.id);
  }
  
  
  render() {
    const item = this.props.item;
    const details = <p><b>XXDetails: </b>item.details</p>
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="card">
            <div className="card-header">
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              <i className="far fa-edit"></i>
              <h4><strong>{item.title}</strong></h4>
            </div>

            <div className="card-body">
              <span> <strong>When:</strong>{Date.parse(item.time_start)} {item.time_end? ` - ${Date.parse(item.time_end)}` : ""}</span> <br />
              <span> <strong>Where: </strong>{item.venue}</span>  <br />
            </div>
          
            <div className="card-body">
              <span> <strong>Confirmation #: </strong>{item.confirmation}</span>
              <span className="to_time"> <strong>Files uploaded:</strong> - </span> <br />
              <span> <strong>Website: </strong>{item.url} </span>
              <span className="to_time"> <strong>Phone:</strong>{item.phone}</span>  <br />
              <span> <strong>Address:</strong>{item.address}</span>  <br />
              <span> {item.details ? details : null }</span>
            </div>
        </div>
    )
  }
}

