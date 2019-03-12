import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return (
      <div>
          <div className="home-card">
            <h1> Hi <b>{this.props.user}</b>!!</h1> <br />
            <h1>Welcome to <b>Smooth Planner</b> App.</h1> <br /><br />
            <h3>Now, you will be able to plan your trip</h3>
            <h3> in a easy way.</h3>
          </div>        
      </div>
    )
  }
}