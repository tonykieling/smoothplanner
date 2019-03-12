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
    axios.put(`http://localhost:3001/api/v1/trips/${this.props.match.params.id}.json`, {email: this.refs.email.value})
    .then(response => {
      
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.closeModal();
  }



  render() {
    
    return (
      <div className="create-form-container-small">
      <form onSubmit={this.handlesSubmit}>
      <div className="form-title">
        <h4 className="card-title">
        <i className="fas fa-user-friends"></i> Add your friends to the trip!
        </h4>
        </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter e-mail address below: </label>
            <input type="email" className="form-control" id="email" name="email" ref="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share this email with anyone else.</small>
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
  

}
