import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tripID: ''
    }
  }
  render() {
    return (
      <div >
        <h3>This is home. </h3>
        
      </div>
    )
  }
}