import React, { Component } from 'react';
import axios from 'axios';
import ItemsContainerA from './component_items_container_A';
import ItemsContainerE from './component_items_container_E';
import ItemsContainerT from './component_items_container_T';

// import the JS function to expand and collapse the cards to call it in the componentDidMount lifecycle
import exp_coll from './expand';


// this container will call the specific container (Accommodation, Event or Transportation)
// in order to mont the user's trip page
export default class ItemsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: "Bob"},
      cards: []
    }

    axios.get('http://localhost:3001/api/v1/items.json')
    .then(response => {
      this.setState({cards: response.data});
    });
  }

  componentDidMount() {
    exp_coll();
  }


  render() {
    const itineraries = this.state;

    let allCards = itineraries.cards.map((item) => {
      if (item.item_type === "A") {
        return <ItemsContainerA key={item.id} item={item}/>
      }
      else if (item.item_type === "E") {
        return <ItemsContainerE key={item.id} item={item}/>
      }
      else {
        return <ItemsContainerT key={item.id} item={item}/>
      }
    });

    return (
      <div >
        {allCards}
      </div>
    )
  }
}



