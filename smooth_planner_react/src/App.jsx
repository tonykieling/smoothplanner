import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import CreateItinerary from './component_form_createtrip';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itineraries: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/itineraries.json')
    .then(response => {
      console.log(response.data)
      this.setState({itineraries: response.data})
    })
    .catch(error => {
      console.log(error)
    })
    
  }
  render() {
    console.log(this.state.itineraries.forEach((item) => {
      return console.log(item.name)
    }))
    
    return (
      <div className="App">
        <header className="App-header">
        <p>Hello World!</p>
        </header>
        <CreateItinerary />
      </div>
    );
  }
}

export default App;
