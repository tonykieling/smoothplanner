import React, { Component } from 'react';

export default class Home extends Component {
  render() {   
    return (
      <div>
          <div className="home-card">
            <h1> Hi <b>{this.props.user}</b>!!</h1> <br />
            <h1>Welcome to Smooth Planner</h1> <br /><br />
            <h3><i className="far fa-arrow-alt-circle-left fa-2x"></i> To begin select or create new trip</h3>
          </div>        
      </div>
    )
  }
}