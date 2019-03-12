import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
import TripsList from './component_trips_list'
import { BrowserRouter, Route, Link } from '../node_modules/react-router-dom'
import Share from './component_share';
import ReactModal from 'react-modal';
import Home from './component_home';
import Landing from './component_landing';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {name: "Alice", id: 2},
      trips: [],
      showModalShare: false
    }

    this.handleOpenModalShare = this.handleOpenModalShare.bind(this);
    this.handleCloseModalShare = this.handleCloseModalShare.bind(this);
  }
  
  // Share
  handleOpenModalShare() {
    this.setState({ showModalShare: true });
  }
  handleCloseModalShare () {
    this.setState({ showModalShare: false });
  }

 


  componentDidMount() {
    if (this.state.current_user) {
      axios.get(`http://localhost:3001/api/v1/users/${this.state.current_user.id}.json`)
      .then(response => {
        this.setState({trips: response.data})
      })
      .catch(error => {
        console.log(error)
      })
    }
  }


  delete_trip = (trip) => {
    axios.delete(`http://localhost:3001/api/v1/trips/${trip.id}`, {data: {user: this.state.current_user.id}} )
    .then(response => {
      window.location = "/"
      this.setState({trips: response.data});
    })
      .catch(error => console.log(error));
  }


  

  render() {
    if(this.state.current_user) {
      return (
        <BrowserRouter>
        <div className="App">
        <header>
          <nav>
            <div className="logo">
              <Link to={'/'}><i className="fas fa-home fa-2x"></i></Link>
              <h2>Smooth Planner</h2>
            </div>
            <div className="print_share">
            <i onClick={this.handleOpenModalShare} className="fas fa-share-alt fa-2x"></i>
            <a href="javascript:window.print()"><i className="fas fa-print fa-2x"></i></a>
            </div>
          </nav> 
          <div className="side-bar">
            <TripsList trips={this.state.trips} currentUser = {this.state.current_user.id}/>
          </div>
        </header>
        <main>
          {/* <Share /> */}
          <Route path="/trips/:id" render={
                          (props)=><ItemsContainer {...props} trips={this.state.trips} delete_trip={this.delete_trip}/>
                          }/>
          <Route path="/" exact render={()=> <Home user={this.state.current_user.name}/>}/>
        </main>
        
        <Route path="/trips/:id" render={(props)=>
        <div>
          <ReactModal 
            isOpen={this.state.showModalShare}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModalShare}
          >
            <Share closeModal={this.handleCloseModalShare} {...props}/>
          </ReactModal>
        </div> }/>
        </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
        <div className="landing">
          <Route path="/" exact render={()=> <Landing />}/>
        </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
