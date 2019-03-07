import React, { Component } from 'react';
import axios from 'axios';
import ItemsContainerA from './component_items_container_A';
import ItemsContainerE from './component_items_container_E';
import ItemsContainerT from './component_items_container_T';
import Popup from "reactjs-popup";
import ReactModal from 'react-modal';
import CreateTransport from './component_form_createTransport';
import CreateAccomodation from './component_form_create_A';
import CreateEvent from './component_form_create_E';


// this container will call the specific container (Accommodation, Event or Transportation)
// in order to mont the user's trip page

ReactModal.setAppElement('#root');
export default class ItemsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      showModalT: false,
      showModalA: false,
      showModalE: false
    }
    this.handleOpenModalT = this.handleOpenModalT.bind(this);
    this.handleCloseModalT = this.handleCloseModalT.bind(this);
    this.handleOpenModalA = this.handleOpenModalA.bind(this);
    this.handleCloseModalA = this.handleCloseModalA.bind(this);
    this.handleOpenModalE= this.handleOpenModalE.bind(this);
    this.handleCloseModalE = this.handleCloseModalE.bind(this);
  }
  //  Modal state handling functions
  // Transport modal
  handleOpenModalT (){
    this.setState({ showModalT: true });
  }
  handleCloseModalT () {
    this.setState({ showModalT: false });
  }
  // Accomodation modal
  handleOpenModalA (){
    this.setState({ showModalA: true });
  }
  handleCloseModalA () {
    this.setState({ showModalA: false });
  }
  // Event
  handleOpenModalE (){
    this.setState({ showModalE: true });
  }
  handleCloseModalE () {
    this.setState({ showModalE: false });
  }



  fetchTripDetails() {
    axios.get(`http://localhost:3001/api/v1/trips/${this.props.match.params.id}.json`)
        .then(response => {
          console.log("data: ", response.data);
          this.setState({cards: response.data});
      })
      .catch(error => {
        console.log(error)
      })
  }

  // delete method which connects to the database and runs destroy method on
  // items_controller to the specific item
  delete_item = (id) => {
    axios.delete(`http://localhost:3001/api/v1/items/${id}`)
    .then(response => {
      this.setState({cards: response.data});
    })
    .catch(error => console.log(error));
  }

  addItem = (data) => {
    axios.post('http://localhost:3001/api/v1/items', data)
    .then(response => {
      this.setState({cards: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  componentDidMount() {
    this.fetchTripDetails();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchTripDetails();
    }
  };

  render() {
    const itineraries = this.state;

    let allCards = itineraries.cards.map((item) => {
      if (item.item_type === "A") {
        return <ItemsContainerA key={item.id} item={item} delete_item={this.delete_item}/>
      }
      else if (item.item_type === "E") {
        return <ItemsContainerE key={item.id} item={item} delete_item={this.delete_item}/>
      }
      else {
        return <ItemsContainerT key={item.id} item={item} delete_item={this.delete_item}/>
      }
    });

    return (
      <div className="items_container">
        <div className="add_new_buttons">
          <div>
            {/* Transportation button */}
            <button onClick={this.handleOpenModalT} className="btn btn-outline-primary">+ Transportation</button>
            <ReactModal 
              isOpen={this.state.showModalT}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModalT}
            >
              <CreateTransport addItem={this.addItem} closeModal={this.handleCloseModalT} tripID={this.props.match.params.id} />
            </ReactModal>
          </div>

          <div>
            {/* Accommodation Button */}
            <button onClick={this.handleOpenModalA} className="btn btn-outline-primary">+ Accommodation</button>
            <ReactModal 
              isOpen={this.state.showModalA}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModalA}
            >
              <CreateAccomodation addItem={this.addItem} closeModal={this.handleCloseModalA} tripID={this.props.match.params.id} />
            </ReactModal>
          </div>

          <div>
            {/* Event Button */}
            <button onClick={this.handleOpenModalE} className="btn btn-outline-primary">+ Event</button>
            <ReactModal 
              isOpen={this.state.showModalE}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModalE}
            >
              <CreateEvent addItem={this.addItem} closeModal={this.handleCloseModalE} tripID={this.props.match.params.id} />
            </ReactModal>
          </div>
        </div>
            
          <div className="cards_list">
            {allCards}
          </div>
      </div>
    )
  }
}



