/* eslint-disable no-undef */
import React, { Component } from 'react';
import Script from 'react-load-script';

class RecommendationItem extends Component {
  render() {
    return (
      <div>
        <h4>Restaurant recommendations in Vancouver</h4>
        <h5>{this.props.details.name}</h5>

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
      recommendations: [],
    }
  }
  handleScriptLoad() {
    const vancouver = new google.maps.LatLng(49.2812035,-123.1170263,17); // vancouver's lat and long.
    const map = new google.maps.Map(document.getElementById('map'), {
      center: vancouver,
      zoom: 15
    });
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: vancouver,
      radius: 10000, // radius in meters
      query: "restaurant"
    }
    //  text search returns top 20 results for the query and location. For example, in this hardcoded query - it will return top 20 restaurants in vancouver in 1
    service.textSearch(request,(results, status) => {
      console.log(status);
      console.log(results);
      // results gives back the name, address, map position etc. For ratings, website etc. will have to call place details API like below -
      let placeId = results[0].place_id;
      let placeName = results[0].name;
      // API call to Place details google API to get details
      this.setState({recommendations: results[0]})
    });
    

  }
  render() {
    return (
      <div>
        <div id="map"></div>
        <Script url = {this.googleAPIURL}
         onLoad = {this.handleScriptLoad}
        />
        <RecommendationItem details={this.state.recommendations} />
      </div>
    )
  }
}

