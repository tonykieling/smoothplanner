import React, { Component } from 'react';
import axios from 'axios';
import ItemsContainerA from './component_items_container_A';
import ItemsContainerE from './component_items_container_E';
import ItemsContainerT from './component_items_container_T';
import CreateTransport from './component_form_createTransport';
import CreateAccomodation from './component_form_create_A';
import CreateEvent from './component_form_create_E';


// this container will call the specific container (Accommodation, Event or Transportation)
// in order to mont the user's trip page
export default class ItemsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  fetchTripDetails() {
    axios.get(`http://localhost:3001/api/v1/trips/${this.props.match.params.id}.json`)
        .then(response => {
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


  componentDidMount() {
    this.fetchTripDetails();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchTripDetails();
    }
  };
  renderForm = (type) => {
    if(type === 'T') {
     (this.state.showTForm) ? this.setState({showTForm: false}) : this.setState({showTForm: true})
    } else if (type === 'A') {
      (this.state.showAForm) ? this.setState({showAForm: false}) : this.setState({showAForm: true})
    } else 
    (this.state.showEForm) ? this.setState({showEForm: false}) : this.setState({showEForm: true})
  }

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
            <button type="button" className="btn btn-outline-primary" onClick={this.renderForm("T")}>+ Transportation</button>
            <button type="button" className="btn btn-outline-success" onClick={this.renderForm("A")}>+ Accomodation</button>
            <button type="button" className="btn btn-outline-info" onClick={this.renderForm("E")}>+ Event</button>
      </div>
      {this.state.showTForm ? (<CreateTransport />): null}
      {this.state.showAForm ? (<CreateAccomodation />): null}
      {this.state.showEForm ? (<CreateEvent />): null}
      <div className="cards_list">
        {allCards}
      </div>
      </div>
    )
  }
}



