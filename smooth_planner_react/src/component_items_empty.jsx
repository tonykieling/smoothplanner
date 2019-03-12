import React, { Component } from 'react';


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {

  render() {
    
    return (
          <div className="empty-card">
              <h1>It seems your trip is empty.</h1>
              <h1>Let's start inserting items from the buttons above.</h1>
          </div>
    )
  }
}

