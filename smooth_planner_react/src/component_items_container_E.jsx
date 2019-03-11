import React, { Component } from 'react';
import moment from 'moment'


// this is the specific container for EVENT card type
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
          <span> <b>When: </b> {moment.utc(this.props.item.time_start).format('llll')}</span>
          <span> <b> - </b> {moment.utc(this.props.item.time_end).format('llll')}</span>
        </div>
      )
    else {
      return(
        <div>
          <span> <b>When: </b> {moment.utc(this.props.item.time_start).format('llll')}</span>
        </div>
      )
    }
  }
  

  render() {
    const item = this.props.item;
    const details = <p><b>XXDetails: </b>item.details</p>
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="card">
            <div className="card-header">
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              <i className="far fa-edit" onClick={()=>{this.props.editItem(item)}}></i>
              <h4><b>{item.title}</b></h4>
            </div>

            <div className="card-body">
              {this.presentDate()}
              <span> <b>Where: </b>{item.venue}</span>  <br />
            </div>
          
            <div className="card-body">
              <span> <b>Confirmation #: </b>{item.confirmation}</span>
              <span className="to_time"> <b>Files uploaded:</b> - </span> <br />
              <span> <b>Website: </b>{item.url} </span>
              <span className="to_time"> <b>Phone:</b>{item.phone}</span>  <br />
              <span> <b>Address:</b>{item.address}</span>  <br />
              <span> {item.details ? details : null }</span>
            </div>
        </div>
    )
  }
}

