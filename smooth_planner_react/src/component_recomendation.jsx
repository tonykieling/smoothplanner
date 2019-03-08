import React, { Component } from 'react';
import axios from 'axios';

export default class RecomendationCard extends Component {
  constructor(){
    super();
    this.state = {
      suggestions: [{}],
      index: 0
    }
    this.fetchRecommendations = this.fetchRecommendations.bind(this);
  }

  fetchRecommendations(item_id) {
    console.log("Fetching recommendations from the server")
    axios.get(`http://localhost:3001/api/v1/items/${item_id}.json`)
      .then(response => {
        this.setState({suggestions: response.data.results})
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

  componentDidMount() {
    this.fetchRecommendations(this.props.item_id);
  }
  render() {
    return (
        <div className="card">
          <div className="card-header">
            Suggestions for you
          </div>
          <i class="fas fa-chevron-left fa-9x" onClick={this.handleLeftClick}></i>
          <div className="card-body">
            <p className="card-text">
            <a href="https://www.google.com/search?q=miku+vancouver&place_id=ChIJlyu4u4NxhlQRkUpN_iFwl8Q">
              {this.state.suggestions[this.state.index].name}
            </a>
              Rating: {this.state.suggestions[this.state.index].rating} | {this.state.suggestions[this.state.index].user_ratings_total} users | Price: {this.state.suggestions[0].price_level}
            </p>
            <a href="#" class="btn btn-primary">Add to Itinerary</a>
          </div>
          <i class="fas fa-chevron-right fa-9x" onClick={this.handleRightClick}></i>
      </div>
    )
  }
}
