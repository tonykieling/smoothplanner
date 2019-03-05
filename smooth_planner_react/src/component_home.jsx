import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tripID: props.match.params.id
    }
  }
  render() {
    return (
      <div >
        <h3>This is home. {this.state.tripID}</h3>
        
      </div>
    )
  }
}