import React, { Component } from 'react';


// this is the specific container for TRANSPORTATION card type
export default class ItemsContainer extends Component {

  render() {
    
    return (
          <div className="empty-card">
              <h1>This trip is empty.</h1>
              <h1>Use the buttons above to add items.</h1>
          </div>
    )
  }
}

