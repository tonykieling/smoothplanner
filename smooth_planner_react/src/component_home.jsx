import React, { Component } from 'react';

export default class Home extends Component {
  render() {   
    return (
      <div>
          <div className="home-card">
            <h1> Welcome {this.props.user}!</h1> <br />
            <div>
              <i className="far fa-arrow-alt-circle-left fa-3x"></i>
              <h3> To begin create or select a trip</h3>
            </div><br/>
          </div>        
      </div>
    )
  }
}