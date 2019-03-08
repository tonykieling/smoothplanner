
import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
import TripsList from './component_trips_list'
import { BrowserRouter, Route, Link } from '../node_modules/react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {name: "Bob", id: 1},
      trips: [],
      // selected_trip: { id: 2, title: "Japan Trip" }
      selected_trip: { id: 9}
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

  delete_trip = () => {
    console.log("trip_id: ", this.state.selected_trip.id);
    // axios.delete(`http://localhost:3001/api/v1/trips/${id}`)
    // .then(response => {
    //   this.setState({trips: response.data});
    // })
    // .catch(error => console.log(error));
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
          <a href="javascript:window.print()"><i className="fas fa-print fa-2x"></i></a>
          </div>
        </nav> 
        <div className="side-bar">
          <TripsList trips={this.state.trips} delete_trip={this.delete_trip}/>
        </div>
      </header>
      <main>
        
        <Route path="/trips/:id" render={(props)=><ItemsContainer {...props}/>}/>
        <Route path="/" exact render={()=> <h3>Welcome. Plan Your Next Trip!</h3>}/>
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
