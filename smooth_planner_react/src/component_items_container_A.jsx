import React, { Component } from 'react';

// this is the specific container for ACCOMMODATION card type
export default class ItemsContainer extends Component {

  // calls delete item method on items_container
  handle_deleteItem = () => {
    const check = window.confirm(`Are you sure you want to delete this item?`);
    if (check === true)
      this.props.delete_item(this.props.item.id);
  }
  // handle_editItem = () => {
  //   this.props.editItem(this.props.item);
  // }

  render() {

    const item = this.props.item;
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="card">
            <div className="card-header" >
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              <i className="far fa-edit" onClick={()=>{this.props.editItem(item)}}></i>
              <h4><strong>{item.title ? item.title : item.venue}</strong></h4>
            </div>
            
            <div className="card-body">
              <span> <strong>First Day:</strong> {item.time_start}</span>
              <span className="to_time"> <strong>Last Day:</strong> {item.time_end}</span>  <br />
              <span> <strong>Venue: </strong> {item.venue}</span>
            </div>
              
            <div className="card-body">
              <span> <strong>Confirmation #: </strong> {item.confirmation}</span>
              <span> <strong>Files uploaded:</strong> reservation_hotel_Zurich.pdf</span> <br />
              <span> <strong>Website: </strong> {item.url}</span>
              <span> <strong>Phone:</strong>{item.phone}</span>  <br />
              <span> <strong>Address:</strong>{item.address}</span> <br />
              <span> {item.details ? `<strong>Details: </strong>${item.details}` : "" }</span>
            </div>
          </div>
    )
  }
}
