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


  // function to format date inside the cards
  formatDate = () => {
    const trip = this.props.item;
    if (moment.utc(trip.time_start).format('dddd') === moment.utc(trip.time_end).format('dddd')) {
      return(
        <div className="timestamp">
          <span> <b>Departure: </b>{moment.utc(trip.time_start).format('LLLL')}</span>
          <span><b> - Arrival: </b>{moment.utc(trip.time_end).format('LTS')}</span> <br />
        </div>
      )
    } else {
      return(
        <div className="timestamp">
          <span> <b>Departure: </b>{moment.utc(trip.time_start).format('LLLL')}</span><br />
          <span><b>Arrival: </b>{moment.utc(trip.time_end).format('LLLL')}</span> <br />
        </div>
      )
    }
  }

  render() {
    
    const item = this.props.item;
    const details = <span><b>Details: </b>{item.details}<br /></span>
    const confirmation =<span> <b>Confirmation #: </b>{item.confirmation}<br /></span>

    return (
          <div className="card card-t">
            <div className="card-header item-card-head" >
              <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
              <i className="far fa-edit" onClick={()=>{this.props.editItem(item)}}></i>
              <h4 className="item-card-head"><b>Going to {item.city_arrival}</b></h4>
            </div>
            
            <div className="card-body card-body-upper">
              {this.formatDate()}
              <span> <b>Leaving from: </b>{item.city_depart} {item.venue ? ` - ${item.venue}` : ""}</span>  <br />
            </div>

            <div className="card-body card-body-lower">
              { item.confirmation? confirmation : null }
              { item.details ? details : null }
            </div>
          </div>
    )
  }
}

