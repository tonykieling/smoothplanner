import React, { Component } from 'react';
import moment from 'moment'

// this is the specific container for ACCOMMODATION card type
export default class ItemsContainer extends Component {

  // calls delete item method on items_container
  handle_deleteItem = () => {
    const check = window.confirm(`Are you sure you want to delete this item?`);
    if (check === true)
      this.props.delete_item(this.props.item.id);
  }

  //function to format the date's presentation for accommodation
  presentDate = () => {
    if (this.props.item.time_end != null)
      return(
        <div>
          <span> <b>First Day: </b> {moment(this.props.item.time_start).format('dddd, MMMM Do YYYY')}</span>
          <span className="to_time"> <b>Last Day: </b> {moment(this.props.item.time_end).format('dddd, MMM Do YYYY')}</span>
        </div>
      )
    else {
      return(
        <div>
          <span> <b>First Day: </b> {moment(this.props.item.time_start).format('dddd, MMMM Do YYYY')} - no last day yet.</span>
        </div>
      )
    }
  }

  render() {

    const item = this.props.item;
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="card">
            <div className="card-header" >
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              <i className="far fa-edit"></i>
              <h4><b>{item.title ? item.title : item.venue}</b></h4>
            </div>
            
            <div className="card-body">
              {this.presentDate()}
              <span><b>Venue: </b> {item.venue}</span>
            </div>
              
            <div className="card-body">
              <span> <b>Confirmation #: </b> {item.confirmation}</span>
              <span> <b>Files uploaded:</b> reservation_hotel_Zurich.pdf</span> <br />
              <span> <b>Website: </b> {item.url}</span>
              <span> <b>Phone:</b>{item.phone}</span>  <br />
              <span> <b>Address:</b>{item.address}</span> <br />
              <span> {item.details ? `<b>Details: </b>${item.details}` : "" }</span>
            </div>
          </div>
    )
  }
}
