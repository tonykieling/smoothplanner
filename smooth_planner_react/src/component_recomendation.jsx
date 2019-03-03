/* eslint-disable no-undef */
import React, { Component } from 'react';
import Script from 'react-load-script';

class RecommendationItem extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    )
  }
}

export default class GoogleRecomendation extends Component {
  constructor() {
    super();
    const googleAPIURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`;
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.state = {
      recomendations: {name: ''}
    }
  }
  handleScriptLoad() {
    
    const vancouver = new google.maps.LatLng(49.2812035,-123.1170263,17);
    const map = new google.maps.Map(document.getElementById('map'), {
      center: vancouver,
      zoom: 15
    });
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: vancouver,
      radius: 10000,
      query: "restaurant"
    }
    function callback(results, status) {
      console.log(status);
      this.state.recomendations.name = results[0].name;
    }
    service.textSearch(request, callback);

  }
  render() {
    return (
      <div>
        <div id="map"></div>
        <Script url = {this.googleAPIURL}   
         onLoad = {this.handleScriptLoad}
        />
        <RecommendationItem name={this.state.recomendations.name} />
      </div>
    )
  }
}

