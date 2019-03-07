
import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
// import Home from './component_home';
import TripsList from './component_trips_list'
import { BrowserRouter, Route, Link } from '../node_modules/react-router-dom'
<<<<<<< HEAD
import logo from './styles/images/plane_world.png'
import CreateTrip from './component_form_createtrip';
import CreateTransport from './component_form_createTransport';
import CreateAccomodation from './component_form_create_A';
import CreateEvent from './component_form_create_E';


=======
>>>>>>> 716bdbc9d6543cc818f25fb7f2fb8ef4784f1799

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {name: "Bob", id: 1},
      trips: [],
      selected_trip: { id: 2, title: "Japan Trip" }
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
            <h2>Smooth Planner</h2>
          </div>
          <div>
            <h4>{this.state.selected_trip.title}</h4>
          </div>
          <div className="print_share">
          <i className="fas fa-share-alt fa-2x"></i>
          <i className="fas fa-print fa-2x"></i>
          </div>
        </nav> 
        <div className="side-bar">
          <TripsList trips={this.state.trips} />
        </div>
      </header>
      <main>
        
        <Route path="/trips/:id" exact component={ ItemsContainer } />
<<<<<<< HEAD
        <Route path="/" exact render={()=> <h3>Hello Welcome!</h3>}/>
        <CreateEvent />
=======
        {/* <Route path="/trips/:id" render={()=><ItemsContainer trips={this.state.trips}/>}/> */}
        <Route path="/" exact render={()=> <h3>Welcome. Plan Your Next Trip!</h3>}/>
>>>>>>> 716bdbc9d6543cc818f25fb7f2fb8ef4784f1799
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
