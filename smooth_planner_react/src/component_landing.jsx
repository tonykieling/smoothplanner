import React, { Component } from 'react';
import $ from "jquery";

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    $("body").css("background-image", "none")
  }

  render() {
    return (
      <div >
      <div className="splash">
        <div className="splash-login">
          <button type="button" class="btn btn-success">Bob</button>
          <button type="button" class="btn btn-success">Alice</button>
        </div>
        <div className="call-to-action">
          <h1>Take Stress Out of Your Trip</h1>
          <h1>Start Planning Today!</h1>
          <button type="button" class="btn btn-warning">Create Account</button>
        </div>
        
        </div>
        <div className="benefits">
          <div><h4>Your Itinerary In One Place</h4><i class="fas fa-clipboard-list fa-6x"></i></div>
          <div><h4>Collaborate Together</h4><i class="fas fa-handshake fa-6x"></i></div>
          <div><h4>Recommendations</h4><i class="fas fa-theater-masks fa-6x"></i></div>
        </div>
        
      </div>
    )
  }
}