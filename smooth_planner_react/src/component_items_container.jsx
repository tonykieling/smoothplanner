import React, { Component } from 'react';
import ItemsContainerA from './component_items_container_A';
import ItemsContainerE from './component_items_container_E';
import ItemsContainerT from './component_items_container_T';

// import the JS function to expand and collapse the cards to call it in the componentDidMount lifecycle
import exp_coll from './expand';


// this container will call the specific container (Accommodation, Event or Transportation)
// in order to mont the user's trip page
export default class ItemsContainer extends Component {

  componentDidMount() {
    // axios.get('http://localhost:3001/api/v1/itineraries.json')
    // .then(response => {
    //   console.log(response.data)
    //   this.setState({itineraries: response.data})
    // })
    // .catch(error => {
    //   console.log(error)
    // })

    exp_coll();
  }


  render() {
    return (
      <div >
        <h3>Tony this is the Items Container Component and is going to be the container for all the items to be rendered in. Axios calls will be made from here for elements in here and logic for distinguishing between types will be done here for deciding which cards to render</h3>

        <ItemsContainerT />
        <ItemsContainerA />
        <ItemsContainerE />
        
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
