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
      current_user: {name: "Bob", id: 1},
      trips: []
    }
  }
  //Simone and Neila

  componentDidMount() {
    axios.get(`http://localhost:3001/api/v1/users/${this.state.current_user.id}.json`)
    .then(response => {
      this.setState({trips: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <header>
        <nav>
          <div className="logo">
            <Link to={'/'}><i className="fas fa-home fa-2x"></i></Link>
            <h3>Smooth Planner</h3>
          </div>
          <div className="print_share">
          <i class="fas fa-share-alt fa-2x"></i>
          <i class="fas fa-print fa-2x"></i>
          </div>
        </nav> 
        <div className="side-bar">
          <TripsList trips={this.state.trips} />
        </div>
      </header>
      <main>
        
        <Route path="/trips/:id" exact component={ ItemsContainer } />
        {/* <Route path="/trips/:id" render={()=><ItemsContainer trips={this.state.trips}/>}/> */}
        <Route path="/" exact render={()=> <h3>Welcome. Plan Your Next Trip!</h3>}/>
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
