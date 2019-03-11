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
        <div className="timestamp">
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
    const details = <span> <b>Details: </b>{item.details}</span>
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="card">
            <div className="card-header item-card-head" >
              <h4>{item.title ? item.title : item.venue}</h4>
              <div>
                <i className="fas fa-trash-alt" onClick={this.handle_deleteItem}></i>
                <i className="far fa-edit" onClick={()=>{this.props.editItem(item)}}></i>
              </div>
            </div>
            
            <div className="card-body">
              {this.presentDate()}
              <p><b>Venue: </b> <a href={item.url} target="_blank" rel="noopener noreferrer">{item.venue}</a></p>
            </div>
              
            <div className="card-body">
              <span> <b>Confirmation #: </b> {item.confirmation}</span><br />
              <span> <b>Website: </b> {item.url}</span>
              <span> <b>Phone:</b>{item.phone}</span>  <br />
              <span> <b>Address:</b>{item.address}</span> <br />
              <span> {item.details ? details : null}</span>
            </div>
          </div>
    )
  }
}
