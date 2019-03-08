import React, { Component } from 'react';
import axios from 'axios';

export default class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.handlesSubmit = this.handlesSubmit.bind(this)
  }

  handlesSubmit = (event)=>{
    event.preventDefault();
    console.log(this.refs.email.value) // To make axios PUT to add trip to user.
    this.props.closeModal();
  }



  render() {
    
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Add another users mail address to add them to colaborate on this trip</label>
          <input type="email" className="form-control" id="email" name="email" ref="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share this email with anyone else.</small>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.handlesSubmit}>Submit</button>
      </form>
    );
  }
  

}
