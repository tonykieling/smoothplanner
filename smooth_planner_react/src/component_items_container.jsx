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

    console.log("11111111111");
    axios.get('http://localhost:3001/api/v1/items.json')
    .then(response => {
      console.log("22222222");
      this.setState({cards: response.data});
      // console.log("normal: ", (response.data)[0]);
      // console.log("stringify: ", JSON.stringify(response.data)[0]);
      console.log("this.state1: ", this.state);
    });
    console.log("this.state: ", this.state);

    // exp_coll();
  }

  componentDidMount() {
    exp_coll();
    // console.log("this.state3: ", this.state);
  }

  //connect to the database before renders ???
  // componentWillMount() {
  //   // connection to the database and query it about itineraries
  //   axios.get('http://localhost:3001/api/v1/items.json')
  //   .then(response => {
  //     // console.log("response.data: ", response.data)
  //     this.setState({items: response.data})
  //     console.log("this.state1: ", typeof this.state.items);
      
  //     // this.state.items.forEach((item) => {
  //     //   console.log("item: ", item);
  //       // if (item.item_type === "T") {
  //       //   console.log(item.id, item.item_type);
  //       // }
  //     // });

  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }


  render() {
    // console.log("this.state4: ", this.state);
    // console.log("this.state2: ", this.state);
    // const itineraries = JSON.stringify(this.state);
    const itineraries = this.state;
    console.log("itinerariesCARDS: ", itineraries);
    console.log("asd: ", Array.isArray(itineraries.cards));
    // console.log("itineraries2: ", Object.keys(this.state).length === 0);
    // (itineraries.id === undefined) ? console.log("UNDEF") : console.log("DEFFFF");
    // console.log("itineraries2: ", typeof itineraries);
    // if (isEmpty(itineraries)) {
    // if (!Object.keys(itineraries).length) {
    //   // itineraries.forEach((item) => {
    //     console.log("itemXXXXXXXXX: ", typeof itineraries);
    //   //   if (item.item_type === "T") {
    //   //     console.log(item.id, item.item_type);
    //   // });
    // //   console.log("YES")
    // }

    let allCards = itineraries.cards.map((item) => {
      if (item.item_type === "A") {
        return <ItemsContainerA key={item.id} item={item}/>
      }
      else if (item.item_type === "E") {
        return <ItemsContainerE key={item.id} item={item}/>
      }
      else if (item.item_type === "T") {
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


// changes:
// - App.css
// - component_items_container.jsx
// - component_items_container-A.jsx
// - component_items_container-E.jsx
// - component_items_container-T.jsx
// ps: React complains about the name style for the components. In this way, I followed the directions to be PascalCase.
// TODO:
//    make JS script run inside react's render
//    cleanup coments from component_items_container-T.jsx and
//    make it dynamic and talk with axios

// https://www.fullstackreact.com/articles/Declaratively_loading_JS_libraries/index.html

// DONT need
// Need instal React Helmet in order to run the JS script
// `npm install --save react-helmet`
// - 'package.json' added react-helmet
