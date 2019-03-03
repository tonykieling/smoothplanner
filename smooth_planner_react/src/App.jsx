import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
import GoogleRecommendation from './component_recomendation';
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
      <header>
        <nav>
          <div><h1>User </h1></div>
          <div><h1>Other field</h1></div>
        </nav> 
        <div className="add_new_buttons">
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-success">Success</button>
        </div>
      </header>
        <ItemsContainer />
        <CreateItinerary />
      </div>
    );
  }
}

export default App;
