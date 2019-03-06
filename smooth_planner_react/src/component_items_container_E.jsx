import React, { Component } from 'react';


// this is the specific container for EVENT card type
export default class ItemsContainer extends Component {
  
  render() {
    const item = this.props.item;
    
    return (
          //there are 3 divs: parent, main and hiden (which expands and collapses according user's click)
          <div className="card">
            <div className="card-header">
              <h4><strong>{item.title}</strong></h4>
            </div>
            <div className="card-body">
              <span> <strong>When:</strong>{item.time_start}</span> <br />
              <span> <strong>Where: </strong>{item.time_end}</span>  <br />
            </div>
          
            <div className="card-body">
              <span> <strong>Confirmation #: </strong>{item.confirmation}</span>
              <span className="to_time"> <strong>Files uploaded:</strong> - </span> <br />
              <span> <strong>Website: </strong>{item.url} </span>
              <span className="to_time"> <strong>Phone:</strong>{item.phone}</span>  <br />
              <span> <strong>Address:</strong>{item.address}</span>  <br />
              <span> {item.details ? `<strong>Details: </strong>${item.details}` : "" }</span>
            </div>
        </div>
    )
  }
}

