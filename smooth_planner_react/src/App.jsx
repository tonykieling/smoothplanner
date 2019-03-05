import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
// import Home from './component_home';
import TripsList from './component_trips_list'
import { BrowserRouter, Route, Link } from '../node_modules/react-router-dom'
import logo from './styles/images/plane_world.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itineraries: [],
      test: 'does this change'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/itineraries.json')
    .then(response => {
      // console.log(response.data)
      this.setState({itineraries: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state.test)

    return (
      <BrowserRouter>
      <div className="App">
      <header>
        <nav>
          <div>
            <Link to={'/'}>Home</Link>
            {/* <Link to={`/${:itinerary.id}`}></Link><h1>User </h1> */}
            </div>
          <div>
              <img src={logo} alt="Logo"/>
            <h3>Smooth Planner</h3>
          </div>
          <TripsList trips={this.state.itineraries} />
        </nav> 
      </header>
      <main>
        <div className="add_new_buttons">
            <button type="button" className="btn btn-outline-success">+ Transportation</button>
            <button type="button" className="btn btn-outline-success">+ Accomodation</button>
            <button type="button" className="btn btn-outline-success">+ Event</button>
        </div>
        <Route path="/itineraries/:id" exact component={ ItemsContainer } />
        </main>
      </div>
      </BrowserRouter>
    );
  }
}



export default App;
