import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
import { BrowserRouter, Route, Link } from '../node_modules/react-router-dom'

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
      <BrowserRouter>
      <div className="App">
      <header>
        <nav>
          
          <div>
            <Link to={'/h'}>Home</Link>
            {/* <Link to={`/${:itinerary.id}`}></Link><h1>User </h1> */}
            </div>
          <div><h1>Other field</h1></div>
        </nav> 
        <div className="add_new_buttons">
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-success">Success</button>
            <button type="button" className="btn btn-outline-success">Success</button>
        </div>
      </header>
        <Route path="/h/:id" component={TestWelcomePage}/>
        <ItemsContainer />
      </div>
      </BrowserRouter>
    );
  }
}

const TestWelcomePage = ({ match }) => (
  <div>
    <h1>Welcome!!{match.params.id}</h1>
  </div>
)


export default App;
