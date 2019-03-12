import React, { Component } from 'react';

export default class Landing extends Component {

  change_user = (e) => {
    this.props.changeUser(e.target.value);
  }

  
  render() {
    return (
      <div >
      <div className="splash">
        <div className="splash-login">
          <button type="button" className="btn btn-success" onClick={this.change_user} value={1}>Bob</button>
          <button type="button" className="btn btn-success" onClick={this.change_user} value={2}>Alice</button>
        </div>
        <div className="call-to-action">
          <h1>Take Stress Out of Your Trip</h1>
          <h1>Start Planning Today!</h1>
          <button type="button" className="btn btn-warning">Create Account</button>
        </div>
        
        </div>
        <div className="benefits">
          <div><h4>Your Itinerary In One Place</h4><i className="fas fa-clipboard-list fa-6x"></i></div>
          <div><h4>Collaborate Together</h4><i className="fas fa-handshake fa-6x"></i></div>
          <div><h4>Destination Recommendations</h4><i className="fas fa-theater-masks fa-6x"></i></div>
        </div>
        
      </div>
    )
  }
}