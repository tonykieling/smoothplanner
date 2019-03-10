import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import ItemsContainer from './component_items_container';
import TripsList from './component_trips_list'
import { BrowserRouter, Route, Link } from '../node_modules/react-router-dom'
import Share from './component_share';
import ReactModal from 'react-modal';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: {name: "Bob", id: 1},
      trips: [],
      // selected_trip: { id: 2, title: "Japan Trip" },
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
    axios.get(`http://localhost:3001/api/v1/users/${this.state.current_user.id}.json`)
    .then(response => {
      this.setState({trips: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }


  delete_trip = (trip) => {
    console.log("current_user_id: ", this.state.current_user.id)
    console.log("trip_id: ", trip.id);
    axios.delete(`http://localhost:3001/api/v1/trips/${trip.id}`, {data: {user: this.state.current_user.id}} )
    .then(response => {
      this.setState({trips: response.data});
      window.location = "/"
      // console.log("tripsafter: ", this.state.trips);
    })
      .catch(error => console.log(error));
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
          <div className="print_share">
          <i onClick={this.handleOpenModalShare} className="fas fa-share-alt fa-2x"></i>
          <a href="javascript:window.print()"><i className="fas fa-print fa-2x"></i></a>
          </div>
        </nav> 
        <div className="side-bar">
          <TripsList trips={this.state.trips} />
        </div>
      </header>
      <main>
        {/* <Share /> */}
        <Route path="/trips/:id" render={
                        (props)=><ItemsContainer {...props} trips={this.state.trips} delete_trip={this.delete_trip}/>
                        }/>
        <Route path="/" exact render={()=> <h3>Welcome. Plan Your Next Trip!</h3>}/>
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
  }
}

export default App;
