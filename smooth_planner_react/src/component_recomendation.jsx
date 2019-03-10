import React, { Component } from 'react';
import axios from 'axios';

export default class RecomendationCard extends Component {
  constructor(){
    super();
    this.state = {
      suggestions: [{name: '',}],
      index: 0
    }
    this.fetchRecommendations = this.fetchRecommendations.bind(this);
  }

  fetchRecommendations(item_id) {
    console.log("Fetching recommendations from the server", item_id)
    axios.get(`http://localhost:3001/api/v1/items/${item_id}.json`)
      .then(response => {
        this.setState({suggestions: response.data.results})
        console.log(this.state.suggestions)
      })
      .catch(error => {
        console.log(error )
      })
  }
  handleLeftClick = () => {
    let newIndex, currentIndex = this.state.index;
    if(currentIndex === 0) {
      newIndex = 19
    } else {
      newIndex = currentIndex - 1
    }
    this.setState({index: newIndex})
  }
  handleRightClick = () => {
    let newIndex, currentIndex = this.state.index;
    if(currentIndex === 19) {
      newIndex = 0
    } else {
      newIndex = currentIndex + 1
    }
    this.setState({index: newIndex})
  }
  componentDidUpdate(prevProps) {
    if(this.props.item_id && (this.props.item_id !== prevProps.item_id)) {
      this.fetchRecommendations(this.props.item_id)
    }
  }

  render() {
    const currentSuggestion = this.state.suggestions[this.state.index];
    let url = "https://www.google.com/maps/search/?api=1&query="
    let ItemToBeAdded ={};
    if(currentSuggestion.geometry) {
      const geo_location =  `${currentSuggestion.geometry.location.lat},${currentSuggestion.geometry.location.lng}`;
      url = `${url}${geo_location}&query_place_id=${currentSuggestion.place_id}`;
      ItemToBeAdded = {
        address: currentSuggestion.formatted_address,
        venue: currentSuggestion.name,
        geo_location,
        url,
      }
    }
    console.log("currentSuggestion", ItemToBeAdded);
    return (
        <div className="card">
          <div className="card-header">
            <img src={currentSuggestion.icon} />
            Suggestions for you
            <i class="far fa-calendar-plus" onClick={() =>{this.props.openModalE(ItemToBeAdded)}}></i>
          </div>
          
          <div className="card-body row">
            <div className="col-4">
              <i className="fas fa-chevron-left fa-5x carousel-pointer" onClick={this.handleLeftClick}></i>
            </div>
            <div className="col-4">
              <p className="card-text">
                <a href={url} target="_blank">{currentSuggestion.name}</a>
                {currentSuggestion.formatted_address}
                Rating: {currentSuggestion.rating} | {currentSuggestion.user_ratings_total} users | Price: {currentSuggestion.price_level}
              </p>
            </div>
            <div className="col-4">
              <i className="fas fa-chevron-right fa-5x carousel-pointer" onClick={this.handleRightClick}></i>
            </div>
          </div>
          <div className="card-footer">
            <img src="powered_by_google_on_white.png" alt="Powered by Google" />
          </div>
      </div>
    )
  }
}
