import React, { Component } from 'react';
import axios from 'axios';
import google from './styles/images/google.png';

export default class RecomendationCard extends Component {
  constructor(){
    super();
    this.state = {
      suggestions: [
        {
          name: '',
          icon: '',
          formatted_address: '',
          rating:'',
          user_ratings_total: '',
          price_level: '',
        }
      ],
      index: 0
    }
    this.fetchRecommendations = this.fetchRecommendations.bind(this);
  }

  fetchRecommendations(item_id, suggestionType, query) {
    console.log("Fetching recommendations from the server", item_id)
    axios.get(`http://localhost:3001/api/v1/items/${item_id}.json?suggestionType=${suggestionType}&query=${query}`)
      .then(response => {
        if(response.data.status === "OK") { 
          this.setState({suggestions: response.data.results})
        }
      })
      .catch(error => {
        console.log(error )
      })
  }
  handleLeftClick = () => {
    let newIndex = this.state.index - 1;
    if(newIndex < 0) {
      newIndex = this.state.suggestions.length - 1;
    }
    this.setState({index: newIndex})
  }
  handleRightClick = () => {
    let newIndex = this.state.index + 1;
    if(newIndex >= this.state.suggestions.length) {
      newIndex = 0;
    }
    this.setState({index: newIndex})
  }
 
  componentDidUpdate(prevProps) {
    if(this.props.item_id && (this.props.item_id !== prevProps.item_id)) {
      this.fetchRecommendations(this.props.item_id, this.props.type, this.props.query)
    }
  }
  componentDidMount() {
    this.fetchRecommendations(this.props.item_id, this.props.type, this.props.query);
  }

  render() {
    const currentSuggestion = this.state.suggestions[this.state.index];
    let url = "https://www.google.com/maps/search/?api=1&query=";
    let ItemToBeAdded ={};
    if(currentSuggestion && currentSuggestion.geometry) {
      const geo_location =  `${currentSuggestion.geometry.location.lat},${currentSuggestion.geometry.location.lng}`;
      url = `${url}${geo_location}&query_place_id=${currentSuggestion.place_id}`;
      ItemToBeAdded = {
        address: currentSuggestion.formatted_address,
        venue: currentSuggestion.name,
        geo_location,
        url,
      }
    }
    return (
        <div className="card">
          <div className="card-header">
            Suggestions for you
            <i className="fas fa-plus" onClick={() =>{this.props.openModalE(ItemToBeAdded)}}></i>
          </div>
          <div className="card-body row">
            <div className="col-4">
              <i className="fas fa-chevron-left fa-5x carousel-pointer" onClick={this.handleLeftClick}></i>
            </div>
            <div className="col-4 card-text">
                <h5><a href={url} target="_blank" rel='noreferrer noopener'>{currentSuggestion.name}</a></h5>
                <p>
                {currentSuggestion.formatted_address}
                Rating: {currentSuggestion.rating} | {currentSuggestion.user_ratings_total} users | Price: {currentSuggestion.price_level}
                </p>
                <img src={currentSuggestion.icon} alt="suggestion-icon" />
            </div>
            <div className="col-4">
              <i className="fas fa-chevron-right fa-5x carousel-pointer" onClick={this.handleRightClick}></i>
            </div>
          </div>
          <div className="card-footer">
            <img src={google} alt="Powered by Google" />
          </div>
      </div>
    )
  }
}
